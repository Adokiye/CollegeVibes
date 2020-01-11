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
});
