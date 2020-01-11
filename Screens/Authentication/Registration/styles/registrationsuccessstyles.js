import {StyleSheet, Dimensions} from 'react-native';

const screen = Dimensions.get('screen');

export default StyleSheet.create({
  container: {
      flexDirection: 'row',
      flex: 1,
      backgroundColor: '#331A6E',
      alignItems: 'center',
      justifyContent: 'center',
  },
  createdText: {
      fontSize: 20,
      color: 'white',
      fontFamily: 'mont-bold',
      marginTop: 17,
      width: '87%',
      textAlign: 'center',
      alignSelf: 'center'
  },
  backCircle: {
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
      alignSelf: 'center',
      width: 95, height: 95,
      borderRadius: 95/2
  },
  middleCircle: {
      elevation: 2,
      width: 72,
      height: 72,
      borderRadius: 72/2,
      backgroundColor: '#FFD037',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center'
  },
  checkImage: {
      width: 49,
      height: 46
  }
});
