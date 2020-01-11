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

import styles from "./styles/registrationfivestyles";
import HeaderText from "../../../components/Text/HeaderText/headertext";
import Header from "../../../components/Header/Header";
import MainButton from "../../../components/Buttons/MainButton";
import LineTextInput from "../../../components/TextInput/LineTextInput/LineTextInput";

const screen = Dimensions.get("screen");

class RegistrationFive extends Component {
    static navigationOptions = {
        header: null,
        drawerLockMode: "locked-closed"
      };
  constructor(props) {
    super(props);
    this.state = {
      user_name: "",
      error: ""
    };
  }

  render() {
    const { params } = this.props.navigation.state;
    return (
      <SafeAreaView style={styles.container}>
        <Header navigation={this.props.navigation} />
        <HeaderText text={"Upload Profile Image"} />
        <TouchableOpacity activeOpacity={0.7}>
          <View style={styles.uploadImageCircle}>
            <Image
              source={require("../../../assets/images/camera.png")}
              resizeMode={"contain"}
              style={styles.cameraImage}
            />
          </View>
        </TouchableOpacity>
        <View style={styles.buttonParent}>
          <TouchableOpacity activeOpacity={0.7}>
            <View style={styles.skipView}>
              <Text style={styles.buttonText}>Skip</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() =>
              this.props.navigation.navigate("RegistrationSuccess")
            }
          >
            <View style={styles.nextView}>
              <Text style={styles.buttonText}>Next</Text>
            </View>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

export default RegistrationFive;
