import { ActivityIndicator, Text, View } from '@src/components/core';
import accountService from '@src/services/wallet/accountService';
import { COLORS } from '@src/styles';
import PropTypes from 'prop-types';
import React from 'react';
import KeepAwake from 'react-native-keep-awake';
import PureModal from '@components/Modal/features/PureModal';
import moment from 'moment';
import { useSelector } from 'react-redux';
import { defaultAccountSelector } from '@src/redux/selectors/account';
import { walletSelector } from '@src/redux/selectors/wallet';
import BtnClose from '@src/components/Button/BtnClose';
import { colorsSelector } from '@src/theme';
import styleSheet from './style';

const LoadingTx = (props) => {
  const colors = useSelector(colorsSelector);
  const account = props?.account || useSelector(defaultAccountSelector);
  const wallet = props?.wallet || useSelector(walletSelector);
  const initialState = {
    open: false,
    percent: 0,
    message: '',
    totalTime: 0,
    startTime: null,
  };
  const [state, setState] = React.useState(initialState);
  const [startTime, setStartTime] = React.useState(null);
  const { text, descFactories, currentTime, totalTimes } = props;
  const { open, percent, message } = state;
  let displayPercent = percent;
  if (totalTimes) {
    const maxPercentPerTime = 100 / totalTimes;
    const currentTimeStartPercent = currentTime * maxPercentPerTime;
    displayPercent = Math.floor(currentTimeStartPercent + percent / totalTimes);
  }
  const progress = async () => {
    const [percent, message] = await Promise.all([
      accountService.getProgressTx(account, wallet),
      accountService.getDebugMessage(account, wallet),
    ]);
    percent && setState({ ...state, percent, message });
    if (percent === 100) {
      setTimeout(() => handleToggle(false), 1000);
    }
  };
  const handleToggle = (isOpen) => setState({ ...state, open: !!isOpen });

  const renderModalContent = () => {
    return (
      <View style={styleSheet.container}>
        <View style={[styleSheet.wrapper, { backgroundColor: colors.grey7 }]}>
          {percent === 100 && (
            <BtnClose
              style={styleSheet.btnClose}
              onPress={() => handleToggle(false)}
              size={20}
            />
          )}
          <ActivityIndicator size="large" />
          <Text style={styleSheet.percent}>{`${displayPercent}%`}</Text>
          {!!text && (
            <Text style={[styleSheet.desc, styleSheet.extraDesc]}>{text}</Text>
          )}
          {descFactories ? (
            descFactories?.map((item) => (
              <Text style={[styleSheet.desc, item?.styled]}>{item?.desc}</Text>
            ))
          ) : percent === 100 ? null : (
            <Text style={styleSheet.desc}>
              {'Please do not navigate away till this\nwindow closes.'}
            </Text>
          )}
          {!!global.isDebug() && !!message && (
            <Text style={styleSheet.desc}>{message}</Text>
          )}
          {!!global.isDebug() && (
            <Text style={styleSheet.desc}>
              {moment().diff(startTime, 'seconds')} seconds
            </Text>
          )}
        </View>
        <KeepAwake />
      </View>
    );
  };

  const initData = async () => {
    await accountService.resetProgressTx(account, wallet);
    await setState({ ...state, open: true });
  };

  React.useEffect(() => {
    if (!open) {
      initData();
    }
  }, []);

  React.useEffect(() => {
    if (open) {
      const interval = setInterval(() => {
        progress();
      }, 100);
      setStartTime(moment());
      return () => {
        clearInterval(interval);
      };
    }
  }, [open]);

  return <PureModal visible={open} content={renderModalContent()} />;
};

LoadingTx.defaultProps = {
  text: '',
  totalTimes: undefined,
  currentTime: undefined,
  descFactories: null,
};

LoadingTx.propTypes = {
  text: PropTypes.string,
  totalTimes: PropTypes.number,
  currentTime: PropTypes.number,
  descFactories: PropTypes.array,
  account: PropTypes.any,
  wallet: PropTypes.any,
};

export default React.memo(LoadingTx);
