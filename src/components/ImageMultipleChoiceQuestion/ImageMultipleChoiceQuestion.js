import React , {useState} from "react";
import { Alert,View, Text } from "react-native";
import ImageOption from "../ImageOption";
import Button from "../Button";
import PropTypes from "prop-types";
import styles from "./styles";

const ImageMulatipleChoiceQuestions = ({ question , onCorrect , onIncorrect }) => {
  const [selected, setSelected] = useState(null);

  const onButtonPress = () => {
    if (selected.correct) {

      onCorrect();
      //   setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelected(null);
    } else {
      onIncorrect();
    }
  };

  return (
    <>
      <Text style={styles.title}>{question.question}</Text>

      <View style={styles.optionsContainer}>
        {question.options.map((option) => (
          <ImageOption
            key={option.id}
            image={option.image}
            text={option.text}
            isSelected={selected?.id === option.id}
            OnPress={() => setSelected(option)}
          />
        ))}
      </View>
      <Button text="Check" OnPress={onButtonPress} disabled={!selected} />
    </>
  );
};

ImageMulatipleChoiceQuestions.propTypes = {
  question: PropTypes.shape({
    question: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        text: PropTypes.string,
        image: PropTypes.string,
        correct: PropTypes.bool,
      })
    ).isRequired,
  }).isRequired,
};

export default ImageMulatipleChoiceQuestions;
