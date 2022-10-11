import { StyleSheet } from 'react-native';
import TextStyle, { scaleInApp, FontStyle } from '@src/styles/TextStyle';
import { COLORS, FONT } from '@src/styles';
import { ScreenWidth } from '@src/utils/devices';

const ratioImageCellular = ScreenWidth / 500;
const ratioConnection = ScreenWidth / 500;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    overflow: 'hidden'
  },
  item: {
    marginTop: 12,
  },
  errorText: {
    ...FONT.STYLE.medium,
    textAlign: 'center',
    color: COLORS.orange,
  },
  qrError: {
    ...FONT.STYLE.medium,
    color: COLORS.orange,
    textAlign: 'center',
    fontSize: 13,
  },
  errorWifi: {
    ...TextStyle.minimizeText,
    textAlign: 'left',
    color: COLORS.orange,
  },
  title1: {
    ...TextStyle.minimizeText,
    ...FontStyle.medium,
    color: '#101111',
    marginVertical: scaleInApp(10),
    textAlign: 'center',
  },
  title2: {
    width: '100%',
    fontFamily: FONT.NAME.bold,
    fontSize: FONT.SIZE.medium,
    alignSelf: 'center',
    textAlign: 'center',
    lineHeight: 28,
    marginBottom: 50,
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
  content_step2_image: {
    alignSelf: 'center',
    resizeMode: 'contain',
    width: '100%',
    height: 70,
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
  step3_text: {
    ...TextStyle.normalText,
    marginTop: 10,
    fontFamily: FONT.NAME.medium,
    alignSelf: 'center'
  },
  item_container_input: {
    borderBottomColor: '#E5E9EA',
    borderBottomWidth: scaleInApp(1)
  },
  text: {
    ...TextStyle.normalText,
    fontFamily: FONT.NAME.medium,
    fontSize: FONT.SIZE.superMedium,
    marginTop: 15,
    marginBottom: 5,
  },
  item_container_error: {
    borderBottomColor: '#E5E9EA',
    borderBottomWidth: scaleInApp(1),
    paddingVertical: scaleInApp(10),
  },
  linkBtn: {
    marginTop: 30,
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
  },
  bold: {
    ...FontStyle.bold,
    fontSize: 16,
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
    marginRight: 15,
    width: 20,
    height: 20,
    paddingTop: 3,
  },
  disabledText: {
    color: COLORS.newGrey,
  },
  headerRight: {
    marginRight: 15,
  }
});

export default styles;
