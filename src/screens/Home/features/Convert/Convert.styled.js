import { StyleSheet } from 'react-native';
import TextStyle, { scaleInApp, FontStyle } from '@src/styles/TextStyle';
import { COLORS, FONT } from '@src/styles';
import { ScreenWidth } from '@src/utils/devices';

const ratioImageCellular = ScreenWidth / 500;
const ratioConnection = ScreenWidth / 500;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  item: {
    marginTop: 12,
  },
  errorText: {
    ...FONT.STYLE.medium,
    color: COLORS.red,
    fontSize: 14,
    marginTop: -20,
    marginBottom: 20,
  },
  warningText: {
    ...FONT.STYLE.medium,
    color: COLORS.orange,
    fontSize: 14,
    marginTop: -20,
  },
  warning: {
    ...FONT.STYLE.medium,
    fontSize: 14,
    marginTop: -20,
    marginBottom: 20,
    textAlign: 'center'
  },
  content: {
    justifyContent: 'center',
    flexDirection: 'column',
    marginTop: 50
  },
  content_step1_image: {
    height: 255,
    alignSelf: 'center',
    resizeMode: 'contain',
  },
  plug: {
    width: 20,
    height: 40,
    alignSelf: 'center',
    resizeMode: 'contain',
    marginVertical: 25,
  },
  contentWrapper: {
    paddingTop: 32,
  },
  content_step4_image: {
    alignSelf: 'center',
    resizeMode: 'contain',
    width: ScreenWidth * 0.8,
    height: ratioConnection * 0.8 * 271,
  },
  content_step3_image: {
    alignSelf: 'center',
    height: ratioImageCellular * 0.8 * 156,
    width: ScreenWidth * 0.8,
    resizeMode: 'contain',
  },
  content_step1: {
    alignSelf: 'center',
    width: 230,
  },
  content_step1QRCode: {
    alignSelf: 'center',
    width: 30,
    height: 30,
  },
  nodeVerifiedImage: {
    alignSelf: 'center',
  },
  footer: {
    marginVertical: 50,
    flexDirection: 'column',
  },
  button: {
    backgroundColor: '#25CDD6',
    marginHorizontal: scaleInApp(20),
    padding: scaleInApp(10),
    borderRadius: scaleInApp(4),
  },
  textTitleButton: {
    ...TextStyle.mediumText,
    ...FontStyle.medium,
    color: '#FFFFFF'
  },
  text: {
    ...TextStyle.normalText,
    fontFamily: FONT.NAME.medium,
    fontSize: FONT.SIZE.regular,
    marginTop: 15,
    marginBottom: 5,
    textAlign: 'center'
  },
  item_container_error: {
    borderBottomColor: '#E5E9EA',
    borderBottomWidth: scaleInApp(1),
    paddingVertical: scaleInApp(10),
  },
  linkBtn: {
    marginTop: 30,
    color: COLORS.colorGreyBold,
    alignSelf: 'center',
    fontFamily: FONT.NAME.medium,
    fontSize: FONT.SIZE.medium,
  },
  centerText: {
    textAlign: 'center',
    marginVertical: 20,
  },
  divider: {
    width: '100%',
    height: 1,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.lightGrey5,
    marginBottom: 15,
  },
  row: {
    flexDirection: 'row',
  },
  guideLine: {
    marginTop: 15,
    fontSize: 16,
    width: ScreenWidth * 0.8,
    fontFamily: FONT.NAME.medium,
    color: COLORS.colorGreyBold
  },
  bold: {
    ...FontStyle.bold,
    fontSize: 16,
    color: COLORS.colorPrimary,
  },
  icon: {
    marginHorizontal: 5,
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  guide: {
    marginLeft: 20,
  },
  log: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  logIcon: {
    marginRight: 10,
    width: 20,
    height: 20,
    paddingTop: 3,
  },
  disabledText: {
    color: COLORS.newGrey,
  },
  headerRight: {
    marginRight: 15,
  },
  stepText: {
    ...FONT.STYLE.medium,
    fontFamily: FONT.NAME.medium,
    fontSize: FONT.SIZE.regular
  }
});

export default styles;
