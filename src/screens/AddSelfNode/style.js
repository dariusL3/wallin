import TextStyle, { FontStyle, scaleInApp } from '@src/styles/TextStyle';
import { StyleSheet } from 'react-native';
import { COLORS, FONT } from '@src/styles';

export const placeHolderColor = '#B9C9CA';
const styles = StyleSheet.create({
  group_list_account:{
    flexDirection:'column'
  },
  item_account_text: {
    ...TextStyle.normalText,
    color: COLORS.colorPrimary,
    paddingVertical: scaleInApp(5)
  },
  textInputPrivateKey:{
    flex:1,
    marginTop: scaleInApp(20),
    borderColor:'#E5E9EA',
    textAlignVertical:'top',
    paddingTop: scaleInApp(15),
    paddingBottom: scaleInApp(15),
    paddingHorizontal:scaleInApp(20),
    borderBottomWidth: scaleInApp(1),
    borderRadius:scaleInApp(4)
  },
  textInput: {
    ...TextStyle.mediumText,
    color: COLORS.colorPrimary,
    fontFamily: FontStyle.light.fontFamily,
    fontSize: FONT.SIZE.regular
  },
  buttonChooseAccount:{
    ...TextStyle.smallText,
    color:'#25CDD6',
    textAlign:'right',
    marginTop:scaleInApp(10),
    backgroundColor:'transparent'
  },
  errorText: {
    ...TextStyle.smallText,
    color: 'red',
    marginTop: scaleInApp(8)
  },
  label: {
    fontSize: FONT.SIZE.medium,
    fontFamily: FONT.NAME.bold,
  },
  button:{
    marginTop: 50,
  },
  textTitleButton:{
    ...TextStyle.mediumText,
    ...FontStyle.medium,
    color:'#FFFFFF'
  },

  group_host: {
    backgroundColor: '#FFFFFF',
  },
  dialog_content:{
    paddingVertical:scaleInApp(5),
  },
  input: {
    fontSize: FONT.SIZE.regular,
    fontFamily: FONT.NAME.bold,
    height: 40,
  }
});

export default styles;
