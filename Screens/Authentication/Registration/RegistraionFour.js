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

import styles from "./styles/registrationthreestyles";
import HeaderText from "../../../components/Text/HeaderText/headertext";
import Header from "../../../components/Header/Header"
import MainButton from "../../../components/Buttons/MainButton";
import LineTextInput from "../../../components/TextInput/LineTextInput/LineTextInput";

const screen = Dimensions.get("screen");

class RegistrationFour extends Component {
    static navigationOptions = {
        header: null,
        drawerLockMode: "locked-closed"
      };
  constructor(props) {
    super(props);
    this.state = {
      user_name: "",
      error: ''
    };
  }

  render() {
    const { params } = this.props.navigation.state;
    return (
      <SafeAreaView style={styles.container}>
            <Header
      navigation={this.props.navigation} />
        <HeaderText text={"Set a Password"} />
        <LineTextInput
                    type={"default"}
            placeholder={"Enter Password"}
            autoFocus={true}
            secured={true}
            value={this.state.user_name}
            onTextInput={text => this.setState({ user_name: text })}
            error={this.state.error}
         />
        <MainButton
          text="CONTINUE"
          onPress={() => this.props.navigation.navigate("RegistrationFive")}
        />
      </SafeAreaView>
    );
  }
}

export default RegistrationFour;
