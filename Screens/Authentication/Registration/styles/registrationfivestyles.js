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
  uploadImageCircle: {
      width: 136,
      height: 136,
      borderRadius: 136/2,
      backgroundColor: 'rgba(255, 208, 55, 0.6)',
      borderWidth: 3,
      borderColor: 'white',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center'
  },
  cameraImage: {
      width: 69,
      height: 52
  },
  buttonParent: {
    width: '87%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
},
skipView: {
    width: 57,
    height: 26,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F2B002',
    borderRadius: 2
},
buttonText: {
    fontFamily: 'mont-medium',
    fontSize: 12,
    color: '#fff'
},
nextView: {
  width: 57,
  height: 26,
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#331A6E',
  borderRadius: 2
}
});
