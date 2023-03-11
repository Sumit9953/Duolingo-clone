import React from "react";
import { Pressable, Text } from "react-native";
import PropTypes from "prop-types";
import styles from "./styles";

const Button = ({ text, OnPress, disabled }) => {
  return (
    <Pressable
      onPress={OnPress}
      disabled={disabled}
      style={[styles.container, disabled ? styles.disabledContainer : {}]}
    >
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  OnPress: PropTypes.func,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  OnPress: () => {},
  disabled: false,
};
export default Button;
