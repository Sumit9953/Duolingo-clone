import React, { useState } from "react";

import { View, Text, TextInput, Image } from "react-native";
import mascot from "../../../assets/images/mascot.png";
import styles from "./styles";
import PropTypes from "prop-types";
import Button from "../Button";

const OpenEndedQuestion = ({ question, onCorrect, onIncorrect }) => {
  const [input, setInput] = useState("");

  const onButtonPress = () => {
    if(question.answer.toLowerCase().trim() === input.toLowerCase().trim()){
        onCorrect();

    }else{
        onIncorrect();
    }
    setInput("");
  };
  return (
    <>
      <Text style={styles.title}>Translate this sentence</Text>
      <View style={styles.row}>
        <Image resizeMode="contain" source={mascot} style={styles.mascot} />

        <View style={styles.sentenceContainer}>
          <Text style={styles.sentence}>{question.text}</Text>
        </View>
      </View>
      <TextInput
        value={input}
        style={styles.textInput}
        onChangeText = {(changedValue) => setInput(changedValue)}
        placeholder="Type Here..."
        textAlignVertical="top"
        multiline
      />
      <Button text="Check" OnPress={onButtonPress} disabled={false} />
    </>
  );
};

OpenEndedQuestion.propTypes = {
  question: PropTypes.shape({
    id: PropTypes.string,
    type: PropTypes.string,
    text: PropTypes.string,
    answer: PropTypes.string,
  }).isRequired,
};

export default OpenEndedQuestion;
