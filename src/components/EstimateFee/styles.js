import { COLORS, THEME, FONT } from '@src/styles';
import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
  container: {
    marginTop: 30,
    display: 'flex'
  },
  errorBox: {
    flexDirection: 'column',
    alignItems: 'center'
  },
  retryBtn: {
    paddingVertical: 5,
    paddingHorizontal: 20,
    backgroundColor: COLORS.orange,
    marginVertical: 10,
    marginHorizontal: 10,
    maxWidth: 200,
    maxHeight: 40,
    borderRadius: 20,
  },
  errorText: {
    ...THEME.text.errorText,
    textAlign: 'center',
    padding: 15,
    fontSize: 14
  },
  label: {
    marginBottom: 8
  },
  feeTypeGroup: {
    flexDirection: 'row',
  },
  feeType: {
    paddingVertical: 10,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: COLORS.lightGrey6,
    borderBottomWidth: 1,
    borderColor: COLORS.lightGrey4
  },
  feeTypeHighlight: {
    backgroundColor: COLORS.white,
    borderBottomWidth: 0,
  },
  feeTypeFirst: {
    borderRightWidth: 1,
    borderColor: COLORS.lightGrey4
  },
  feeTypeText: {
    color: COLORS.lightGrey3,
  },
  feeTypeTextHighlight: {
    color: COLORS.dark1
  },
  rateContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    minHeight: 60
  },
  box: {
    borderWidth: 1,
    borderRadius: 4,
    borderColor: COLORS.lightGrey4,
    backgroundColor: COLORS.white,
    overflow: 'hidden'
  },
  changeFeeModal: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.overlayBlackLight,
  },
  changeFeeForm: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    maxWidth: 350,
    minHeight: 200,
    padding: 20,
    paddingVertical: 30,
    backgroundColor: COLORS.white,
    shadowOffset: {
      height: 2,
      width: 0
    },
    shadowColor: 'rgba(208,208,208,0.5)',
    shadowOpacity: 1,
    elevation: 3,
    shadowRadius: 1.2,
    borderRadius: 6,
  },
  feeInputWrapper: {
    marginHorizontal: 25,
    marginBottom: 40,
    marginTop: 20,
    flexDirection: 'row',
  },
  changeFeeInput: {
    flex: 1,
    minWidth: 200,
  },
  changeFeeBtnGroup: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },
  changeFeeBtn: {
    marginLeft: 5,
    backgroundColor: COLORS.transparent,
    borderColor: COLORS.primary,
    borderBottomWidth: 1,
  },
  changeFeeSubmitBtn: {
    backgroundColor: COLORS.primary,
    borderColor: COLORS.primary,
    borderBottomWidth: 1,
    marginRight: 5,
  },
  changeFeeSubmitText: {
    color: COLORS.white
  },
  changeFeeResetText: {
    color: COLORS.blue
  },
  feeTextContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
  changeFeeLightBtn: {
    paddingHorizontal: 15,
    paddingVertical: 5,
    marginTop: 20,
  },
  changeFeeText: {
    ...FONT.STYLE.medium,
    color: COLORS.blue,
    fontSize: 16,
  },
  feeTextTitle: {
    fontSize: 16,
    textAlign: 'center',
    color: '#657576',
    marginBottom: 12
  },
  rateText: {
    fontSize: 14,
  }
});

export default style;
