/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { StyleSheet, Text, Image, Dimensions, View } from "react-native";
export default class Onboarding3 extends Component {
  static navigationOptions = {
    header: null,
    drawerLockMode: "locked-closed"
  };
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {}
  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require("../../assets/images/onboardThree.png")}
          resizeMode="contain"
          style={styles.imageStyle}
        />
        <Text style={styles.titleStyle}>Track your Studies</Text>
        <Text style={styles.descriptionStyle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et purus 
egestasullamcorper leo velit faucibus. Venenatis sem netus turpis auctor
 purus eleifend aliquaviverra pellentesque.</Text>
      </View>
    );
  }
}
const dimensions = Dimensions.get("window");
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center"
  },
  imageStyle: {
    height: 205,
    width: "70.4%",
    alignSelf: "center"
  },
  titleStyle: {
    alignSelf: "center",
    color: "#000",
    fontFamily: "mont-bold",
    fontSize: 16,
    marginTop: "7%"
  },
  descriptionStyle: {
      marginTop: 5,
      color: '#898383',
      fontSize: 10,
      fontFamily: 'mont-reg',
      alignSelf: "center",
      width: '77.1%',
      textAlign: 'center'
  }
});
