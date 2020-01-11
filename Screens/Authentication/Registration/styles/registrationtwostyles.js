import {StyleSheet, Dimensions} from 'react-native';

const screen = Dimensions.get('screen');

export default StyleSheet.create({
  container: {
      flexDirection: 'column',
      flex: 1,
      backgroundColor: 'white',
      paddingTop: 34,
      paddingBottom: screen.height * (19.94/100),
      alignItems: 'center',
      justifyContent: 'space-between',
  },
  greyView: {
      width: screen.width * (87/100),
      alignSelf: 'center',
      paddingHorizontal: 23,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      height: 82,
      backgroundColor: '#EBE7E7',
      borderRadius: 2,
  },
  uploadText: {
      color: 'black',
      fontFamily: 'mont-semi',
      fontSize: 15
  },
  frontImage: {
      width: 26,
      height: 26
  }
});
