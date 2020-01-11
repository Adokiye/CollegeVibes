import {StyleSheet, Dimensions, Platform} from 'react-native';

const screen = Dimensions.get('screen');

const GetStartedStyle = () =>
  StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: 'white',
      paddingVertical: 34,
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    textunderlogo: {
      marginTop: 11,
      color: 'black',
      fontFamily: 'mont-semi',
      fontSize: 10
    },
    middleImage: {
      width: 252,
      height: 221
    },
    logoHeader: {
      width: 137, 
      height: 63, 
    },
    haveanaccount: {
      color: 'black',
      fontFamily: 'mont-medium',
      fontSize: 12,
      marginTop: 11,
    }, 
    logintext: {
      color: '#FFD037',
      fontSize: 12,
      marginTop: 11,
      marginLeft: 5,
      fontFamily: 'mont-medium',
    }
  });

export default GetStartedStyle;
