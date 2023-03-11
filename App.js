import React from "react";
import { Text, View } from "react-native";
import styles from "./App.styles";
import data from "./assets/data/oneQuestionWithOption"
import ImageOption from "./src/components/ImageOption/";

const App = () => {
  return (
    <View style={styles.root}>
      <Text style={styles.title}>{data.question}</Text>

      <View style={styles.optionsContainer}>
       {data.options.map((option) => (
          <ImageOption
          key={option.id}
          image={option.image}
          text={option.text}
        />
      ))}
      </View>
    </View>
  );
};

export default App;
