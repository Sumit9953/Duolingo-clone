import React, { useState, useEffect } from "react";
import { Alert, Text, View } from "react-native";
import styles from "./App.styles";
import ImageMulatipleChoiceQuestions from "./src/components/ImageMultipleChoiceQuestion/";
import OpenEndedQuestion from "./src/components/OpenEndedQuestion/";
import Header from "./src/components/Header";

import questions from "./assets/data/allQuestions";

const App = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(
    questions[currentQuestionIndex]
  );

  const [lives, setLives] = useState(5);

  useEffect(() => {
    if (currentQuestionIndex >= questions.length) {
      Alert.alert("You won");
      setCurrentQuestionIndex(0);
    } else {
      setCurrentQuestion(questions[currentQuestionIndex]);
    }
  }, [currentQuestionIndex]);

  const onCorrect = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const restart = () => {
    setLives(5);
    setCurrentQuestionIndex(0);
  }

  const onIncorrect = () => {
    if(lives <= 1){
      Alert.alert("Game Over" , "Try again" , [{
        text: 'Try again',
        onPress: restart,
      }]);
    }else{
      Alert.alert("Incorrect!");
      setLives(lives - 1);
    }
  };

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
