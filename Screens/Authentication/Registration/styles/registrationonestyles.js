import {StyleSheet, Dimensions} from 'react-native';

const screen = Dimensions.get('screen');

export default StyleSheet.create({
  container: {
      flexDirection: 'column',
      flex: 1,
      backgroundColor: 'white',
      paddingVertical: 34,
      alignItems: 'center'
  },
facebookimage: {
    width: 27,
    height: 27
},
frontImage: {
    width: 30,
    height: 22,
    transform: [{ rotate: '180deg'}]
},
googleImage: {
    width: 27,
    height: 27,
    marginLeft: 6
},
parent: {
    flexDirection: "column",
    width: screen.width * (87 / 100),
    alignItems: "flex-start",
    marginTop: 22,
    alignSelf: 'center'
  },
  labelText: {
    color: "black",
    fontFamily: "mont-bold",
    fontSize: 11,
    marginBottom: 8,
  },
  school_container: {
    width: screen.width * (87 / 100),
    backgroundColor: "white",
    borderColor: "#FFD037",
    borderWidth: 1,
    borderRadius: 3,
    height: 45,
    alignSelf: "center",
    alignItems: 'center',
    paddingHorizontal: 16,
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  schoolName: {
      color: '#000',
      flex: 1,
      flexWrap: 'wrap',
      fontFamily: 'mont-reg'
  },
});
