import {StyleSheet} from 'react-native';
import {COLORS, FONT} from '@src/styles';

const style = StyleSheet.create({
  container: {
    paddingHorizontal: 25,
  },
  text: {
    color: COLORS.newGrey,
    lineHeight: 30,
    ...FONT.STYLE.medium,
  },
  title: {
    ...FONT.STYLE.bold,
    marginTop: 30,
    lineHeight: 26,
    fontSize: 18,
    color: COLORS.black,
  },
  bold: {
    ...FONT.STYLE.bold,
  },
  semiBold: {
    ...FONT.STYLE.bold,
    color: COLORS.newGrey,
  },
  marginTop: {
    marginTop: 25,
  },
  noMarginTop: {
    marginTop: 0,
  },
  content: {
    marginTop: 12,
  },
  link: {
    color: COLORS.black,
    ...FONT.STYLE.medium,
    textDecorationLine: 'underline',
  }
});

export default style;
