import React from "react";
import { TextInput, View, Text } from "react-native";
import styles from "./styles/linetextinputstyles.js";

const LineTextInput = props => {
  const {
    type,
    placeholder,
    onInputFocus,
    onInputBlur,
    onTextInput,
    editable,
    autoFocus,
    value,
    label,
    secured,
    error
  } = props;
  return (
    <View style={styles.parent}>
      <Text style={styles.labelText}>{label}</Text>
      <View style={styles.container}>
        <TextInput
          style={styles.textinput}
          keyboardType={type}
          placeholder={placeholder}
          placeholderTextColor="#9CA0A5"
          onFocus={onInputFocus}
          onBlur={onInputBlur}
          editable={editable}
          autoFocus={autoFocus}
          onChangeText={onTextInput}
          value={value}
          secureTextEntry={secured}
        />
      </View>
      <Text style={styles.errorText}>{error}</Text>
    </View>
  );
};

export default LineTextInput;
