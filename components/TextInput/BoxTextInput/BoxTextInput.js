import React from "react";
import { TextInput, View, Text } from "react-native";
import BoxTextInputStyle from "./styles/boxtextinputstyles.js";

const BoxTextInput = props => {
  const {
    type,
    placeholder,
    onInputFocus,
    onInputBlur,
    onTextInput,
    editable,
    autoFocus,
    value,
    label
  } = props;
  return (
    <View style={BoxTextInputStyle().parent}>
      <Text style={BoxTextInputStyle().labelText}>{label}</Text>
      <View style={BoxTextInputStyle().container}>
        <TextInput
          style={BoxTextInputStyle().textinput}
          keyboardType={type}
          placeholder={placeholder}
          placeholderTextColor="#9CA0A5"
          onFocus={onInputFocus}
          onBlur={onInputBlur}
          editable={editable}
          autoFocus={autoFocus}
          onChangeText={onTextInput}
          value={value}
        />
      </View>
    </View>
  );
};

export default BoxTextInput;
