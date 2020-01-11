import {StyleSheet, Dimensions} from 'react-native';

const screen = Dimensions.get('screen');

export default StyleSheet.create({
  text: {
      alignSelf: 'center',
      fontFamily: 'mont-bold',
      color: 'black',
      fontSize: 19,
      marginBottom: 10,
      marginTop: 10
  }
});
