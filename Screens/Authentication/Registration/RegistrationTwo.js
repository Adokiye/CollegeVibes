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

import styles from "./styles/registrationtwostyles";
import HeaderText from "../../../components/Text/HeaderText/headertext";
import MainButton from "../../../components/Buttons/MainButton";
import Header from "../../../components/Header/Header";

const screen = Dimensions.get("screen");

class RegistrationTwo extends Component {
    static navigationOptions = {
        header: null,
        drawerLockMode: "locked-closed"
      };
  constructor(props) {
    super(props);
    this.state = {
      first_name: ""
    };
  }

  render() {
    const { params } = this.props.navigation.state;
    return (
      <SafeAreaView style={styles.container}>
        <Header navigation={this.props.navigation} />
        <HeaderText text={"Upload School Id"} />
        <TouchableOpacity activeOpacity={0.7}>
          <View style={styles.greyView}>
            <Text style={styles.uploadText}>Upload Valid School Id</Text>     
                 <Image
            source={require("../../../assets/images/blackFront.png")}
            resizeMode={"contain"}
            style={styles.frontImage}
          />
          </View>

        </TouchableOpacity>
        <MainButton
          text="CONTINUE"
          onPress={() =>
            this.props.navigation.navigate("RegistrationVerification")
          }
        />
      </SafeAreaView>
    );
  }
}

export default RegistrationTwo;
