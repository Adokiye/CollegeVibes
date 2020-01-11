import React, { Component } from "react";
import {
  FlatList,
  View,
  Image,
  Text,
  Animated,
  Dimensions,
  TouchableOpacity,
  TextInput
} from "react-native";
import SearchStyle from "./styles/searchstyles";

import BoxTextInputStyle from "../TextInput/BoxTextInput/styles/boxtextinputstyles";

const screen = Dimensions.get("screen");

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: true,
      data: null,
      new_data: null,
      text: ""
    };
  }
  dataChange(text) {
    let data_edit = this.state.data;
    //console.log(data_edit);
    const data = this.state.data.filter(item =>
      item.name.toUpperCase().includes(text.toUpperCase())
    );
    this.setState({
      new_data: data
    });
  }
  handleChange = text => {
    //console.log('\n' + text + '\n');
    this.setState({ text }, () => {
      this.dataChange(this.state.text);
    });
  };
  componentDidMount() {
    const { params } = this.props.navigation.state;
    if (params && params.data) {
      this.setState({ data: params.data, new_data: params.data });
    }
  }

  getInitials(name) {
    var splitStr = name.toLowerCase().split(" ");
    console.log(splitStr);
    let text = "";
    if (splitStr.length >= 2) {
      length = 2;
    } else {
      length = splitStr.length;
    }
    for (var i = 0; i < length; i++) {
      if (i <= 1) {
        text += splitStr[i].charAt(0).toUpperCase();
      }
    }
    return text;
  }

  onInputFocus = () => {
    this.setState({ active: true });
  };

  onInputBlur = () => {
    this.setState({ active: false });
  };

  render() {
    const { params } = this.props.navigation.state;
    let data = (
      <FlatList
        data={this.state.new_data}
        extraData={this.state}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() =>
              this.props.navigation.navigate(params.state, {
                selected: item
              })
            }
          >
            <View style={SearchStyle.beneficiariesView}>
              <View style={SearchStyle.initialsOval}>
                <Text style={SearchStyle.initialsText}>
                  {this.getInitials(item)}
                </Text>
              </View>
              <View style={SearchStyle.wrapperColumnView}>
                <Text style={SearchStyle.companyNameText}>{item}</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item, index) => `list-item-${index}`}
      />
    );
    return (
      <View style={SearchStyle.container}>
        <View style={SearchStyle.header}>
          <TouchableOpacity
            activeOpacity={0.7}
            hitSlop={{ left: 2, right: 2, top: 2, bottom: 2 }}
            onPress={() => this.props.navigation.goBack()}
          >
            <View style={SearchStyle.backImageView}>
              <Image
                resizeMethod={"auto"}
                resizeMode={"contain"}
                style={SearchStyle.backImage}
                source={require("../../assets/images/backIcon.png")}
              />
            </View>
          </TouchableOpacity>
        </View>
        <View
          style={
            this.state.active
              ? SearchStyle.activeTextInputView
              : SearchStyle.inactiveTextInputView
          }
        >
          <TextInput
            style={BoxTextInputStyle().textinput}
            keyboardType={"default"}
            placeholder={"Search for your College"}
            placeholderTextColor="#9CA0A5"
            onFocus={this.onInputFocus} 
            onBlur={this.onInputBlur}
            autoFocus={true}
            onChangeText={value => this.handleChange(value)}
          />
        </View>
        {data}
      </View>
    );
  }
}
