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
  createdText: {
      fontSize: 20,
      color: '#331A6E',
      fontFamily: 'mont-bold',
      marginTop: 17,
      width: '87%',
      textAlign: 'center'
  },
  backCircle: {
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
      alignSelf: 'center',
      width: 95,
      height: 95,
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
  },
  subText: {
      color: '#331A6E',
      marginTop: 17,
      fontFamily: 'mont-reg',
      fontSize: 12,
      textAlign: 'center'
  }
});
