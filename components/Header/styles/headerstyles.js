import {StyleSheet, Dimensions, Platform} from 'react-native';

const screen = Dimensions.get('screen');

const HeaderStyle = () =>
  StyleSheet.create({
    container: {
      width: screen.width * (87/100),
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    backImage: {
        width: 30,
        height: 22
    },
    backImageUnsee: {
        width: 30,
        height: 22,
        opacity: 0
    }
  });

export default HeaderStyle;
