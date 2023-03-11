import React from "react";
import { View , Image, Text } from "react-native";
import styles from "./styles";

const ImageOption = ({image,text}) => {
  return (
    <View  style={styles.optionContainer}>
      <Image
        resizeMode="contain"
        style={styles.optionImage}
        source={{
          uri: image,
        }}
      />
      <Text style={styles.optionText}>{text}</Text>
    </View>
  ); 
};

export default ImageOption;
