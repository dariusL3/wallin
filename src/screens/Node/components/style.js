import { StyleSheet } from 'react-native';
import { COLORS, FONT } from '@src/styles';
import {isAndroid, isIOS} from '@utils/platform';

const style = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    marginBottom: 30,
  },
  containerDetail: {
    backgroundColor: COLORS.white,
    marginBottom: 15,
    padding: 20,
    paddingTop: 0,
    flex: 1
  },
  row: {
    flexDirection: 'row',
  },
  itemLeft: {
    marginRight: 'auto',
    fontFamily: FONT.NAME.bold,
    fontSize: FONT.SIZE.medium,
    textAlign: 'left',
    maxWidth: 200,
  },
  itemRight: {
    marginLeft: 'auto',
    paddingVertical: 5
  },
  statusContainer: {
    width: 14,
    height: 14,
    borderRadius: 7,
    marginEnd: 20,
  },
  dot: {
    width: 6,
    height: 6,
    marginTop: 20,
    borderRadius: 3,
    backgroundColor: COLORS.lightGrey5,
  },
  activeDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    marginTop: 20,
    backgroundColor: COLORS.blue5,
  },
  balance: {
    fontSize: 20,
    color: COLORS.colorGreyBold,
  },
  balanceContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center'
  },
  balanceUpdate: {
    fontSize: FONT.SIZE.veryLarge,
    color: COLORS.black,
    textAlign: 'center',
  },
  itemCenter: {
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  imageWrapper: {
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  token: {
    fontSize: 20,
    color: COLORS.colorGreyBold,
    textAlign: 'center'
  },
  desc: {
    marginTop: 15,
  },
  greyText: {
    color: COLORS.lightGrey1,
  },
  greenText: {
    color: COLORS.green,
  },
  withdrawMenuItem: {
    flexDirection: 'row',
    opacity: 0.4,
  },
  withdrawText: {
    marginRight: 15,
  },
  actionButton: {
    height: 30,
    minWidth: 80,
  },
  loading: {
    marginLeft: 10,
  },
  hidden: {
    opacity: 1,
  },
  fixButton: {
    backgroundColor: COLORS.dark3,
  },
  centerAlign: {
    alignItems: 'center',
  },
  infoBtnStyle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center'
  },
  icon: {
    marginRight: 10,
    width: 20,
    height: 16,
    resizeMode: 'contain',
  },
  disabled: {
    opacity: 0.6,
  },
  balanceList: {
    width: '100%',
    marginTop: 42,
    height: 70
  },
  text: {
    ...FONT.STYLE.medium,
  },
  bold: {
    ...FONT.STYLE.bold,
  },
  bigText: {
    fontSize: 18,
  },
  rightHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  warningDesc: {
    color: COLORS.orange,
    fontSize: 16,
    lineHeight: isIOS() ? 25 : 30,
    marginTop: 10,
    ...FONT.STYLE.medium
  },
  infoIcon: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20
  }
});

export const rewardStyle = StyleSheet.create({
  slider: {
    marginTop: 10,
    marginBottom: 30,
  },
  container: {
    justifyContent: 'flex-start',
  },
  row: {
    flexDirection: 'row',
    width: 200,
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemLeft: {
    marginRight: 'auto',
  },
  itemRight: {
    marginLeft: 'auto',
  },
  itemCenter: {
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  dot: {
    width: 16,
    height: 2,
    borderRadius: 0,
    backgroundColor: COLORS.lightGrey5,
  },
  activeDot: {
    width: 16,
    height: 2,
    borderRadius: 0,
    backgroundColor: COLORS.primary,
  },
  balance: {
    textAlign: 'center',
    height: '100%',
    ...FONT.TEXT.incognitoP1,
  },
  prvStyle: {
    marginTop: isAndroid() ? 3 : 0,
  },
});

export const nodeItemStyle = StyleSheet.create({
  wrapperRaw: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center'
  },
  btnStyle: {
    width: 30,
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
  },
  // This style support ActivityIndicator because
  // ActivityIndicator to large than status view
  wrapperLoading: {
    marginLeft: -8,
    width: 38
  }
});

export default style;
