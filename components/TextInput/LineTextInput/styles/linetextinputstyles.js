import { StyleSheet, Dimensions, Platform } from "react-native";

const screen = Dimensions.get("screen");

export default  StyleSheet.create({
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
    errorText: {
        color: "black",
        fontFamily: "mont-italic",
        fontSize: 11,
        marginTop: 8,
    },
    container: {
      width: screen.width * (87 / 100),
      backgroundColor: "white",
      borderBottomColor: "#331A6E",
      borderBottomWidth: 1,
      height: 45,
      alignSelf: "center",
    },
    textinput: {
      paddingHorizontal: 16,
      fontSize: 15,
      fontFamily: "mont-reg",
      color: "#51922A",
      flex: 1,
      paddingBottom: 0
    }
  });

