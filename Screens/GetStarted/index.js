/* eslint-disable react-native/no-inline-styles */
import React, { Component } from "react";
import {
  Text,
  View,
  Dimensions,
  Image,
  ScrollView,
  TouchableOpacity,
  SafeAreaView
} from "react-native";

import GetStartedStyle from "./styles/getstartedstyle";
import GeneralStyle from "../generalstyles/generalstyles";
import MainButton from "../../components/Buttons/MainButton";

const screen = Dimensions.get("screen");

class GetStarted extends Component {
    static navigationOptions = {
        header: null,
        drawerLockMode: "locked-closed"
      };
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { params } = this.props.navigation.state;
    return (
      <SafeAreaView style={GetStartedStyle().container}>
        <View style={GeneralStyle().column}>
          <Image
            source={require("../../assets/images/topIcon.png")}
            style={GetStartedStyle().logoHeader}
            resizeMode={"contain"}
          />
          <Text style={GetStartedStyle().textunderlogo}>
            Lorem ipsum dolor sit amet
          </Text>
        </View>
        <Image
          source={require("../../assets/images/getStarted.png")}
          style={GetStartedStyle().middleImage}
          resizeMode={"contain"}
        />
        <View style={GeneralStyle().column}>
          <MainButton
            onPress={() => this.props.navigation.navigate("RegistrationOne")}
            text="Get Started"
          />
          <View style={GeneralStyle().row}>
            <Text style={GetStartedStyle().haveanaccount}>
              Have an Account?
            </Text>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => this.props.navigation.navigate("Login")}
            >
              <Text style={GetStartedStyle().logintext}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

export default GetStarted;
