import React, { useState, useEffect } from "react";
import { Alert, Text, View } from "react-native";
import styles from "./App.styles";
import questions from "./assets/data/imageMulatipleChoiceQuestions";
import Button from "./src/components/Button";
import ImageMulatipleChoiceQuestions from "./src/components/ImageMultipleChoiceQuestion/";
import ImageOption from "./src/components/ImageOption/";
import OpenEndedQuestion from "./src/components/OpenEndedQuestion/";

const App = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(
    questions[currentQuestionIndex]
  );

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

  const onIncorrect = () => {
    Alert.alert("Incorrect!");
  };

  return (
    <View style={styles.root}>
      {/* <ImageMulatipleChoiceQuestions
        question={currentQuestion}
        onCorrect={onCorrect}
        onIncorrect={onIncorrect}
      /> */}
      <OpenEndedQuestion
      question={currentQuestion}
        onCorrect={onCorrect}
        onIncorrect={onIncorrect} />
    </View>
  );
};

export default App;
