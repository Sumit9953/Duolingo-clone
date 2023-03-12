import React, { useState, useEffect } from "react";
import { Alert, Text, View } from "react-native";
import styles from "./App.styles";
// import questions from "./assets/data/imageMulatipleChoiceQuestions";
import Button from "./src/components/Button";
import ImageMulatipleChoiceQuestions from "./src/components/ImageMultipleChoiceQuestion/";
import ImageOption from "./src/components/ImageOption/";
import OpenEndedQuestion from "./src/components/OpenEndedQuestion/";

// import questions from "./assets/data/openEndedQuestions"
import questions from "./assets/data/allQuestions";

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
      /> ): null}
    </View>
  );
};

export default App;
