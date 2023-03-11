import React , {useState} from "react";
import { Alert, Text, View } from "react-native";
import styles from "./App.styles";
import questions from "./assets/data/imageMulatipleChoiceQuestions";
import Button from "./src/components/Button";
import ImageOption from "./src/components/ImageOption/";

const App = () => {
  const [selected, setSelected] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(questions[currentQuestionIndex])

  const onButtonPress = () => {
    if(selected.correct){
    Alert.alert("Correct!");
    const nextIndex =  currentQuestionIndex + 1;
    console.log(currentQuestionIndex);
    setCurrentQuestionIndex(nextIndex);
    console.log(nextIndex);
    setCurrentQuestion(questions[nextIndex]);
    }else{
      Alert.alert("Incorrect!")
    }
  }

  return (
    <View style={styles.root}>
      <Text style={styles.title}>{currentQuestion.question}</Text>

      <View style={styles.optionsContainer}>
       {currentQuestion.options.map((option) => (
          <ImageOption
          key={option.id}
          image={option.image}
          text={option.text}
          isSelected = {selected ?.id === option.id}
          OnPress = {() => setSelected(option)}
        />
      ))}
      </View>
      <Button text = "Check" OnPress={onButtonPress} disabled={!selected} />
    </View> 
  );
};

export default App;
