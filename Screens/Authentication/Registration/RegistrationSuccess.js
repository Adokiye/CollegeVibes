/* eslint-disable react-native/no-inline-styles */
import React, { Component } from "react";
import {
  Text,
  View,
  Dimensions,
  Image,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  Animated
} from "react-native";

import styles from "./styles/registrationsuccessstyles";
import GeneralStyle from "../../generalstyles/generalstyles";
import HeaderText from "../../../components/Text/HeaderText/headertext";
import Header from "../../../components/Header/Header";
import MainButton from "../../../components/Buttons/MainButton";
import LineTextInput from "../../../components/TextInput/LineTextInput/LineTextInput";
import LinearGradient from 'react-native-linear-gradient';

const screen = Dimensions.get("screen");

class RegistrationSuccess extends Component {
    static navigationOptions = {
        header: null,
        drawerLockMode: "locked-closed"
      };
  constructor(props) {
    super(props);
    this.state = {
      user_name: "",
      error: "",
      animationValue: new Animated.Value(80),
      viewState: true
    };
  }


  render() {
    const { params } = this.props.navigation.state;
    return (
      <SafeAreaView style={styles.container}>
      <View style={GeneralStyle().column}>
      <LinearGradient colors={['rgba(255, 208, 55, 0.4)', 'rgba(255, 208, 55, 0.4)', 'rgba(255, 252, 252, 0.2)']} style={styles.backCircle}>
          <View style={styles.middleCircle}>
            <Image
              source={require("../../../assets/images/blueCheck.png")}
              resizeMode={"contain"}
              style={styles.checkImage}
            />
          </View>
        </LinearGradient>
        <Text style={styles.createdText}>
          Account Created Successfully!
        </Text>
        </View>
      </SafeAreaView>
    );
  }
}

export default RegistrationSuccess;
