import React from "react";
import { View, Image, Text, Pressable } from "react-native";
import PropTypes from "prop-types";
import styles from "./styles";

const ImageOption = ({ image, text, isSelected ,OnPress}) => {
  return (
    <Pressable
    onPress={OnPress}
      style={[
        styles.optionContainer,
        isSelected ? styles.selectedContainer : {},
      ]}
    >
      <Image
        resizeMode="contain"
        style={styles.optionImage}
        source={{
          uri: image,
        }}
      />
      <Text style={isSelected ? styles.slectedText : styles.optionText}>
        {text}
      </Text>
    </Pressable>
  );
};

ImageOption.propTypes = {
  image: PropTypes.string.isRequired,
  text: PropTypes.string,
  isSelected: PropTypes.bool,
  OnPress: PropTypes.func
};

ImageOption.defaultProps = {
  text: "Default",
  isSelected: false,
  OnPress: () => {},
};

export default ImageOption;
