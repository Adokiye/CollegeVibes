import {StyleSheet, Dimensions, Platform} from 'react-native';

const screen = Dimensions.get('screen');

const GeneralStyle = () =>
  StyleSheet.create({
    column: {
        flexDirection: 'column',
        alignSelf: 'center'
    },
    row: {
        flexDirection: 'row',
        alignSelf: 'center'
    },
    logoHeader: {
        width: 137, 
        height: 63, 
      },
  });

export default GeneralStyle;
