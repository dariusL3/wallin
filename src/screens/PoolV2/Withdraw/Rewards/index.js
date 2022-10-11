import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, BaseTextInput, RoundCornerButton } from '@components/core';
import mainStyle from '@screens/PoolV2/style';
import { compose } from 'recompose';
import { withLayout_2 } from '@components/Layout/index';
import { Header, Row } from '@src/components/';
import { COINS } from '@src/constants';
import Loading from '@screens/DexV2/components/Loading';
import withDefaultAccount from '@components/Hoc/withDefaultAccount';
import globalStyled from '@src/theme/theme.styled';
import { Text4 } from '@src/components/core/Text';
import withConfirm from './confirm.enhance';
import withRewards from './reward.enhance';
import withSuccess from './success.enhance';
import styles from './style';
import { Line } from '../../Provide/Input';


const Provide = ({
  displayFullTotalRewardsNonLock,
  onConfirm,
  error,
  withdrawing,
  disable,
}) => {
  const coin = COINS.PRV;
  return (
    <>
      <Header title="Withdraw rewards" />
      <View style={[mainStyle.coinContainerNoMargin, globalStyled.defaultPadding2]} borderTop>
        <Text4 style={mainStyle.label}>Amount</Text4>
        <Row center spaceBetween style={mainStyle.inputContainer}>
          <BaseTextInput
            style={[mainStyle.input, {color: 'red'}]}
            placeholder="0"
            editable={false}
            value={displayFullTotalRewardsNonLock}
            keyboardType="decimal-pad"
          />
          <Text style={mainStyle.symbol}>{coin.symbol}</Text>
        </Row>
        <Line />
        <Text style={mainStyle.error} numberOfLines={2}>{error}</Text>
        <RoundCornerButton
          title="Withdraw rewards"
          style={[mainStyle.button, styles.button, {marginTop: 0}]}
          disabled={!!error || disable}
          onPress={onConfirm}
        />
        <Text style={[mainStyle.coinExtraSmall]}>
          {'Please wait a couple of minutes for your main balance to update.\n\nIf you have any rewards accrued from fixed term staking, you will be able to withdraw them along with your stake when the term ends.'}
        </Text>
      </View>
      <Loading open={withdrawing} />
    </>
  );
};

Provide.propTypes = {
  displayFullTotalRewardsNonLock: PropTypes.string.isRequired,
  onConfirm: PropTypes.func.isRequired,
  withdrawing: PropTypes.bool,
  error: PropTypes.string,
  disable: PropTypes.bool.isRequired,
};

Provide.defaultProps = {
  error: '',
  withdrawing: false,
};

export default compose(
  withLayout_2,
  withDefaultAccount,
  withRewards,
  withSuccess,
  withConfirm,
)(Provide);

