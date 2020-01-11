import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  Image,
  Dimensions,
  StatusBar,
  View,
  ViewPagerAndroid,
  TouchableOpacity,
  ScrollView,
  SafeAreaView
} from "react-native";
import Onboarding1 from "./Onboarding1";
import Onboarding2 from "./Onboarding2";
import Onboarding3 from "./Onboarding3";
import GetStarted from "../../Screens/GetStarted";
//import LoaderModal from './Modals/LoaderModal';
//var SharedPreferences = require("react-native-shared-preferences");
type Props = {};
//import { connect } from "react-redux";
/*const mapStateToProps = state => ({
  ...state
});*/
class Onboarding extends Component<Props> {
  static navigationOptions = {
    header: null,
    drawerLockMode: "locked-closed"
  };
  constructor(props) {
    super(props);
    this.state = {
      regLoader: true,
      first: true,
      second: false,
      third: false,
      no: 0
    };
  }
  skip(){
    this.props.navigation.navigate('GetStarted')
  }
  componentDidMount() {}
  next() {
    if (this.state.no != 3) {
      this.viewPager.setPage(this.state.no + 1);
    }
    if(this.state.no == 2){
       this.props.navigation.navigate('GetStarted')
    }

    let value = this.state.no != 3 ? this.state.no + 1 : 3;
    /*    if(value == 4){
        this.props.navigation.navigate('SignUp', {});
    } */
    this.setState({ no: value });
    if (value == 0) {
      this.setState({ first: true, second: false, third: false });
    } else if (value == 1) {
      this.setState({ first: false, second: true, third: false });
    } else if (value == 2) {
      this.setState({ first: false, second: false, third: true });
    }
  }
  onPageSelected(e) {
    let currentPage = e.nativeEvent.position;
    //   let n = currentPage.toString();
    console.log(currentPage);
    //  this.setState({ n });
    this.setState({ no: currentPage });
    if (currentPage == 0) {
      this.setState({ first: true, second: false, third: false });
    } else if (currentPage == 1) {
      this.setState({ first: false, second: true, third: false });
    } else if (currentPage == 2) {
      this.setState({ first: false, second: false, third: true });
    }
  }
  render() {
    let bottom,
      button = "";
    if (this.state.first) {
      bottom = (
        <View style={styles.circleView}>
          <View style={styles.activeCircle}></View>
          <View style={styles.inactiveCircle}></View>
          <View style={styles.inactiveCircle}></View>
        </View>
      );
      button = (
        <View style={styles.buttonParent}>
          <View
            style={{
              width: 10,
              height: 10,
              opacity: 0,
              backgroundColor: "#fff"
            }}
          />
          <TouchableOpacity activeOpacity={0.7} onPress={this.next.bind(this)}>
            <View style={styles.nextView}>
              <Text style={styles.buttonText}>Next</Text>
            </View>
          </TouchableOpacity>
        </View>
      );
    } else if (this.state.second) {
      bottom = (
        <View style={styles.circleView}>
          <View style={styles.inactiveCircle}></View>
          <View style={styles.activeCircle}></View>
          <View style={styles.inactiveCircle}></View>
        </View>
      );
      button = (
        <View style={styles.buttonParent}>
          <TouchableOpacity 
         onPress={this.skip.bind(this)}
          activeOpacity={0.7}>
            <View style={styles.skipView}>
              <Text style={styles.buttonText}>Skip</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.7} onPress={this.next.bind(this)}>
            <View style={styles.nextView}>
              <Text style={styles.buttonText}>Next</Text>
            </View>
          </TouchableOpacity>
        </View>
      );
    } else if (this.state.third) {
      bottom = (
        <View style={styles.circleView}>
          <View style={styles.inactiveCircle}></View>
          <View style={styles.inactiveCircle}></View>
          <View style={styles.activeCircle}></View>
        </View>
      );
      button = (
        <View style={styles.buttonParent}>
          <TouchableOpacity
           onPress={this.skip.bind(this)}
           activeOpacity={0.7}>
            <View style={styles.skipView}>
              <Text style={styles.buttonText}>Skip</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.7} onPress={this.next.bind(this)}>
            <View style={styles.nextView}>
              <Text style={styles.buttonText}>Next</Text>
            </View>
          </TouchableOpacity>
        </View>
      );
    }
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor="#fff" barStyle="dark-content" />
        {/* <View style={styles.topLeft}>
          <Image 
              source={require('../../assets/images/onLeft.png')}
              style={{width: 100,  height: 160,}}
              resizeMode={'contain'}
          />
          </View>
          <View style={styles.topRight}>
          <Image 
              source={require('../../assets/images/onRight.png')}
              style={{ width: 154, height: 58}}
              resizeMode={'contain'}
          />
          </View> */}
        <Image
          source={require("../../assets/images/topIcon.png")}
          style={{
            width: 137,
            height: 63,
            marginTop: 60,
            marginBottom: "11.28%"
          }}
          resizeMode={"contain"}
        />
        <ViewPagerAndroid
          style={{ width: "100%", height: 362 }}
          initialPage={0}
          onPageSelected={this.onPageSelected.bind(this)}
          ref={viewPager => {
            this.viewPager = viewPager;
          }}
        >
          <View style={{ flex: 1 }} key="1">
            <ScrollView
              keyboardShouldPersistTaps="always"
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={false}
              automaticallyAdjustContentInsets={false}
              directionalLockEnabled={true}
              bounces={false}
              scrollsToTop={false}
            >
              <Onboarding1 navigation={this.props.navigation} />
            </ScrollView>
          </View>
          <View style={{ flex: 1 }} key="2">
            <ScrollView
              contentContainerStyle={{ flexGrow: 1 }}
              keyboardShouldPersistTaps="always"
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={false}
              automaticallyAdjustContentInsets={false}
              directionalLockEnabled={true}
              bounces={false}
              scrollsToTop={false}
            >
              <Onboarding2 navigation={this.props.navigation} />
            </ScrollView>
          </View>
          <View style={{ flex: 1 }} key="3">
            <ScrollView
              contentContainerStyle={{ flexGrow: 1 }}
              keyboardShouldPersistTaps="always"
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={false}
              automaticallyAdjustContentInsets={false}
              directionalLockEnabled={true}
              bounces={false}
              scrollsToTop={false}
            >
              <Onboarding3 navigation={this.props.navigation} />
            </ScrollView>
          </View>
        </ViewPagerAndroid>
        {bottom}
        {button}
        <View style={styles.topLeft}>
          <Image
            source={require("../../assets/images/onLeft.png")}
            style={{ width: 100, height: 160, zIndex: -1 }}
            resizeMode={"contain"}
          />
        </View>
        <View style={styles.topRight}>
          <Image
            source={require("../../assets/images/onRight.png")}
            style={{ width: 154, height: 58 }}
            resizeMode={"contain"}
          />
        </View>
      </SafeAreaView>
    );
  }
}
/*const Splash = connect(
  mapStateToProps,
)(reduxSplash);*/
export default Onboarding;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff"
  },
  topLeft: {
    position: "absolute",
    width: 100,
    height: 160,
    top: 0,
    left: 0
  },
  topRight: {
    position: "absolute",
    top: 0,
    right: 0,
    width: 154,
    height: 58
  },
  activeCircle: {
    width: 10,
    height: 10,
    backgroundColor: "#331A6E",
    borderRadius: 5
  },
  inactiveCircle: {
    width: 10,
    height: 10,
    backgroundColor: "#D4CFE0",
    borderRadius: 5
  },
  circleView: {
    width: 55,
    flexDirection: "row",
    justifyContent: "space-between",
    alignSelf: "center",
    marginBottom: 23
  },
  buttonParent: {
    width: "77.1%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignSelf: "center",
    marginBottom: 24
  },
  skipView: {
    width: 57,
    height: 26,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F2B002",
    borderRadius: 2
  },
  buttonText: {
    fontFamily: "mont-medium",
    fontSize: 12,
    color: "#fff"
  },
  nextView: {
    width: 57,
    height: 26,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#331A6E",
    borderRadius: 2
  }
});
