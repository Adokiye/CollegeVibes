import {StyleSheet, Dimensions} from 'react-native';

const screen = Dimensions.get('screen');

export default StyleSheet.create({
  container: {
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#331A6E',
    height: 50,
    flexDirection: 'row',
    width: screen.width * (87/100),
    alignSelf: 'center'
  },
  content: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontFamily: 'mont-bold',
    color: '#FFD037',
    fontSize: 15,
    alignSelf: 'center'
  },
});
