/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  AsyncStorage,
  Alert,
  TouchableOpacity
} from "react-native";
import Splash from "./components/Splash";
import Onboarding from "./components/Onboarding/index"
import GetStarted from "./Screens/GetStarted/index"
import Search from "./components/Search/search"
import RegistrationOne from "./Screens/Authentication/Registration/RegistrationOne"
import RegistrationTwo from "./Screens/Authentication/Registration/RegistrationTwo"
import RegistrationThree from "./Screens/Authentication/Registration/RegistrationThree"
import RegistrationFour from "./Screens/Authentication/Registration/RegistraionFour"
import RegistrationFive from "./Screens/Authentication/Registration/RegistrationFive"
import RegistrationSuccess from "./Screens/Authentication/Registration/RegistrationSuccess"
import RegistrationVerification from "./Screens/Authentication/Registration/RegistrationVerification"
import {fromRight} from 'react-navigation-transitions';
import { createStackNavigator } from "react-navigation";
type Props = {};
const RootStack = createStackNavigator({
  Home: {
    screen: Onboarding
  },
  Search: {
    screen: Search
  },
  RegistrationOne: {
    screen: RegistrationOne
  },
  RegistrationTwo: {
    screen: RegistrationTwo
  },
  RegistrationThree: {
    screen: RegistrationThree
  },
  RegistrationFour: {
    screen: RegistrationFour
  },
  RegistrationFive: {
    screen: RegistrationFive
  },
  RegistrationSuccess: {
    screen: RegistrationSuccess
  },
  RegistrationVerification: {
    screen: RegistrationVerification
  },
  GetStarted:{
    screen: GetStarted
 
}
},
  {
    headerMode: 'none',
    transitionConfig: () => fromRight(),
  },);

class App extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      timePassed: false
    };
  }
  componentDidMount() {
    // SplashScreen.hide()
  }
  render() {
    setTimeout(() => {
      this.setState({ timePassed: true });
    }, 4000);
    if (this.state.timePassed) {
      return (
        <View style={styles.container}>
          <RootStack />
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <Splash />
        </View>
      );
    }
  }
}
/*function connectWithStore(store, WrappedComponent, ...args) {
  var ConnectedWrappedComponent = connect(...args)(WrappedComponent);
  return function(props) {
    return <ConnectedWrappedComponent {...props} store={store} />;
  };
}*/
/*const App = connectWithStore(
  store,
  reduxApp,
  mapStateToProps,
 // mapDispatchToProps
);*/
export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff"
  }
});
