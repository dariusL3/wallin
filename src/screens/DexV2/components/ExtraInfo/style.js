import { StyleSheet } from 'react-native';
import { COLORS, UTILS, FONT } from '@src/styles';

const deviceWidth = UTILS.deviceWidth();

export default StyleSheet.create({
  wrapper: {
    marginVertical: UTILS.heightScale(6),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    ...FONT.STYLE.normal,
  },
  textLeft: {
    marginRight: 10,
  },
  textRight: {
    textAlign: 'right',
    maxWidth: deviceWidth - 155,
  },
  btnChevron: {
    justifyContent: 'center',
  },
  message: {
    ...FONT.STYLE.medium,
    fontSize: 14, 
    marginVertical: 10,
  },
});
