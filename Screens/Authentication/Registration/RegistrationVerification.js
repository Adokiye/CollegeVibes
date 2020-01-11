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

import styles from "./styles/registrationverificationstyles";
import GeneralStyle from "../../generalstyles/generalstyles"
import HeaderText from "../../../components/Text/HeaderText/headertext";
import Header from "../../../components/Header/Header";
import MainButton from "../../../components/Buttons/MainButton";
import LinearGradient from 'react-native-linear-gradient';
import LineTextInput from "../../../components/TextInput/LineTextInput/LineTextInput";

const screen = Dimensions.get("screen");

class RegistrationVerification extends Component {
    static navigationOptions = {
        header: null,
        drawerLockMode: "locked-closed"
      };
  constructor(props) {
    super(props);
    this.state = {
      user_name: "",
      error: '',
      animationValue: new Animated.Value(8),
      viewState: true
    };
  }


  render() {
    const { params } = this.props.navigation.state;
    return (
      <SafeAreaView style={styles.container}>
            <Header
      navigation={this.props.navigation} />
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
          Success!
        </Text>
        </View>
        <MainButton
          text="CONTINUE"
          onPress={() => this.props.navigation.navigate("RegistrationThree")}
        />
      </SafeAreaView>
    );
  }
}

export default RegistrationVerification;
