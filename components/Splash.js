import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  Image,
  Dimensions,
  StatusBar,
  View
} from "react-native";
//import LoaderModal from './Modals/LoaderModal';
//var SharedPreferences = require("react-native-shared-preferences");
type Props = {};
//import { connect } from "react-redux";
/*const mapStateToProps = state => ({
  ...state
});*/
class Splash extends Component<Props> {
  static navigationOptions = {
    header: null,
    drawerLockMode: "locked-closed"
  };
  constructor(props) {
    super(props);
    this.state = {
     regLoader: true
    };
  }
  componentDidMount(){
  }
  render() {
    return (
        <View style={styles.container}>
                    <StatusBar
                backgroundColor="#331A6E"
                barStyle="light-content"
            />
            <View style={styles.topCity}>
           <Image
            source={require("../assets/images/left.png")}
            resizeMode="cover"
            style={{width: 75, height: 212}}
          /></View>
          <Image
            source={require("../assets/images/center_icon.png")}
            resizeMode="contain"
            style={styles.logo}
          />
          <View style={styles.bottomCity}>
           <Image
            source={require("../assets/images/right.png")}
            resizeMode="cover"
            style={{width: 210, height: 152}}
          /></View>
        </View>
    );
  }
}
/*const Splash = connect(
  mapStateToProps,
)(reduxSplash);*/
export default Splash;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: '#331A6E'
      },
     logo: {
         width: 213,
         height: 100,
         alignSelf: 'center'
     },
     bottomCity: {
         bottom: 0,
         position: 'absolute',
         width: 210,
         height: 152,
         right: 0
     },
     topCity: {
      top: 0,
      position: 'absolute',
      width: 75,
      height: 212,
      left: 0
    }  
});
