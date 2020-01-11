import {StyleSheet, Dimensions} from 'react-native';

const screen = Dimensions.get('screen');

const SearchStyle = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    backgroundColor: '#fff',
    width: screen.width,
    height: screen.height,
    flexDirection: 'column',
    elevation: 2,
  },
  backImageView: {
        width: 30,
        height: 22,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
  },
  backImage: {
    width: 30,
    height: 22
},
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: screen.width - 32,
    alignSelf: 'center',
    marginTop: screen.height * (1.84 / 100),
    marginBottom: screen.height * (3.7 / 100),
  },
  activeTextInputView: {
    borderBottomColor: '#707070',
    borderTopColor: '#707070',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    width: screen.width,
    height: 50,
    backgroundColor: '#fff',
    alignSelf: 'center',
   // marginBottom: '3.81%',
    flexDirection: 'row',
    alignItems: 'center'
  },
  inactiveTextInputView: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderBottomColor: '#EEF0F1',
    borderTopColor: '#EEF0F1',
    width: screen.width,
    height: 50,
    backgroundColor: '#fff',
    alignSelf: 'center',
 //   marginBottom: '3.81%',
  },
  beneficiariesView: {
    width: screen.width,
    height: 60,
    alignSelf: 'center',
    flexDirection: 'row',
    marginTop: screen.height * (2.7 / 100),
    alignItems: 'center',
 //   paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#EEF0F1',
    paddingVertical: screen.width * (8 / 100),
  },
  initialsOval: {
    width: 45,
    height: 45,
    borderRadius: 45 / 2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#331A6E',
    marginLeft: screen.width * (4 / 100),
  },
  initialsText: {
    color: '#FFD037',
    fontSize: 13,
    fontFamily: 'mont-medium',
  },
  wrapperColumnView: {
    flexDirection: 'column',
    marginLeft: screen.width * (4 / 100),
  },
  companyNameText: {
    fontSize: 13,
    color: '#331A6E',
    fontFamily: 'mont-medium',
    // flex: 1, 
    // flexWrap: 'wrap'
  },
});

export default SearchStyle;
