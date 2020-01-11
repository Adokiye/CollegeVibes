import { StyleSheet, Dimensions, Platform } from "react-native";

const screen = Dimensions.get("screen");

const BoxTextInputStyle = () =>
  StyleSheet.create({
    parent: {
      flexDirection: "column",
      width: screen.width * (87 / 100),
      alignItems: "flex-start",
      marginTop: 22,
      alignSelf: 'center'
    },
    labelText: {
      color: "black",
      fontFamily: "mont-bold",
      fontSize: 11,
      marginBottom: 8,
    },
    container: {
      width: screen.width * (87 / 100),
      backgroundColor: "white",
      borderColor: "#FFD037",
      borderWidth: 1,
      borderRadius: 3,
      height: 45,
      alignSelf: "center",
    },
    textinput: {
      paddingHorizontal: 16,
      fontSize: 15,
      fontFamily: "mont-reg",
      color: "#000",
      flex: 1,
      paddingBottom: 0
    }
  });

export default BoxTextInputStyle;
