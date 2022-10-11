import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, BaseTextInput, RoundCornerButton } from '@components/core';
import mainStyle from '@screens/PoolV2/style';
import { compose } from 'recompose';
import { withLayout_2 } from '@components/Layout/index';
import { Header, Row } from '@src/components/';
import withChangeInput from '@screens/DexV2/components/Trade/input.enhance';
import withValidate from '@screens/DexV2/components/Trade/validate.enhance';
import withDefaultAccount from '@components/Hoc/withDefaultAccount';
import Loading from '@screens/DexV2/components/Loading';
import ExtraInfo from '@screens/DexV2/components/ExtraInfo';
import formatUtil from '@utils/format';
import { BtnInfinite } from '@components/Button/index';
import convertUtil from '@utils/convert';
import globalStyled from '@src/theme/theme.styled';
import { Text4 } from '@src/components/core/Text';
import withCoinData from './coin.enhance';
import withConfirm from './confirm.enhance';
import withSuccess from './success.enhance';
import styles from './style';
import { Line } from '../../Provide/Input';

const Provide = ({
  coin,
  onConfirm,
  error,
  onChangeInputText,
  withdrawing,
  inputText,
  disable
}) => {
  const handleMax = () => {
    const humanAmount = convertUtil.toHumanAmount(coin.balance, coin.pDecimals);
    const fixDecimals = formatUtil.toFixed(humanAmount, coin.pDecimals);
    onChangeInputText(fixDecimals.toString());
  };

  return (
    <>
      <Header title={`Withdraw ${coin.symbol} provision`} />
      <View style={[mainStyle.coinContainerNoMargin, globalStyled.defaultPadding2]} borderTop>
        <Text4 style={mainStyle.label}>Amount</Text4>
        <Row center spaceBetween style={mainStyle.inputContainer}>
          <BaseTextInput
            style={mainStyle.input}
            placeholder="0"
            onChangeText={onChangeInputText}
            value={inputText}
            keyboardType="decimal-pad"
          />
          <BtnInfinite
            style={mainStyle.symbol}
            onPress={handleMax}
          />
        </Row>
        <Line />
        <Text style={mainStyle.error}>{error}</Text>
        <RoundCornerButton
          title="Withdraw provisions"
          style={[mainStyle.button, styles.button]}
          onPress={onConfirm}
          disabled={!!error || !inputText || disable}
        />
        <ExtraInfo
          left="Balance"
          right={`${coin.displayFullBalance} ${coin.symbol}`}
          style={mainStyle.coinExtra}
        />
        <Text style={mainStyle.coinExtra}>
          Provision withdrawals may take up to 5-7 days
          to process.
        </Text>
      </View>
      <Loading open={withdrawing} />
    </>
  );
};

Provide.propTypes = {
  coin: PropTypes.object.isRequired,
  onConfirm: PropTypes.func.isRequired,
  onChangeInputText: PropTypes.func.isRequired,
  inputText: PropTypes.string,
  withdrawing: PropTypes.bool,
  error: PropTypes.string,
  disable: PropTypes.bool.isRequired,
};

Provide.defaultProps = {
  error: '',
  withdrawing: false,
  inputText: '',
};

export default compose(
  withLayout_2,
  withDefaultAccount,
  withCoinData,
  withChangeInput,
  withValidate,
  withSuccess,
  withConfirm,
)(Provide);

