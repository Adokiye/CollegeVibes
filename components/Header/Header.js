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

import HeaderStyle from "./styles/headerstyles";
import GeneralStyle from "../../Screens/generalstyles/generalstyles";

const screen = Dimensions.get("screen");

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { params } = this.props.navigation.state;
    return (
    <View style={HeaderStyle().container}>
      <TouchableOpacity
      hitSlop={{left: 5, right: 5, top: 5, bottom: 5}}
       activeOpacity={0.7}
      onPress={()=>this.props.navigation.goBack()}>
                <Image
            source={require("../../assets/images/backIcon.png")}
            style={HeaderStyle().backImage}
            resizeMode={"contain"}
          />
      </TouchableOpacity>
      <Image
            source={require("../../assets/images/topIcon.png")}
            style={GeneralStyle().logoHeader}
            resizeMode={"contain"}
          />
                          <Image
            source={require("../../assets/images/backIcon.png")}
            style={HeaderStyle().backImageUnsee}
            resizeMode={"contain"}
          />
    </View>
    );
  }
}

export default Header;
