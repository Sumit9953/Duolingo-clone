import React, { useState, useEffect } from "react";
import { ActivityIndicator, Alert, Text, View } from "react-native";
import styles from "./App.styles";
import ImageMulatipleChoiceQuestions from "./src/components/ImageMultipleChoiceQuestion/";
import OpenEndedQuestion from "./src/components/OpenEndedQuestion/";
import Header from "./src/components/Header";

import AsyncStorage from "@react-native-async-storage/async-storage";
import questions from "./assets/data/allQuestions";

const App = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(
    questions[currentQuestionIndex]
  );

  const [lives, setLives] = useState(5);
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    if (currentQuestionIndex >= questions.length) {
      Alert.alert("You won");
      setCurrentQuestionIndex(0);
    } else {
      setCurrentQuestion(questions[currentQuestionIndex]);
    }
  }, [currentQuestionIndex]);

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    if(hasLoaded){
      saveData();
    }
  }, [lives, currentQuestionIndex,hasLoaded]);

  const onCorrect = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const restart = () => {
    setLives(5);
    setCurrentQuestionIndex(0);
  };

  const onIncorrect = () => {
    if (lives <= 1) {
      Alert.alert("Game Over", "Try again", [
        {
          text: "Try again",
          onPress: restart,
        },
      ]);
    } else {
      Alert.alert("Incorrect!");
      setLives(lives - 1);
    }
  };

  const saveData = async () => {
    await AsyncStorage.setItem("lives", lives.toString());
    await AsyncStorage.setItem(
      "currentQuestionIndex",
      currentQuestionIndex.toString()
    );
  };

  const loadData = async () => {
    const loadedLives = await AsyncStorage.getItem("lives");
    if (loadedLives) { 
      setLives(parseInt(loadedLives));
    }
    const currentQuestionIndex = await AsyncStorage.getItem(
      "currentQuestionIndex"
    );
    if (currentQuestionIndex) {
      setCurrentQuestionIndex(parseInt(currentQuestionIndex));
    }

    setHasLoaded(true);
  };

  if(!hasLoaded){
    return (<ActivityIndicator />)
  }
  return (
    <View style={styles.root}>
      <Header
        progress={currentQuestionIndex / questions.length}
        lives={lives}
      />
      {currentQuestion.type === "IMAGE_MULTIPLE_CHOICE" ? (
        <ImageMulatipleChoiceQuestions
          question={currentQuestion}
          onCorrect={onCorrect}
          onIncorrect={onIncorrect}
        />
      ) : null}
      {currentQuestion.type === "OPEN_ENDED" ? (
        <OpenEndedQuestion
          question={currentQuestion}
          onCorrect={onCorrect}
          onIncorrect={onIncorrect}
        />
      ) : null}
    </View>
  );
};

export default App;
