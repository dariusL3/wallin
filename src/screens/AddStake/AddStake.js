import { ActivityIndicator, View, Text, Button, TouchableOpacity, ScrollViewBorder } from '@src/components/core';
import { Text4 } from '@src/components/core/Text';
import PropTypes from 'prop-types';
import React from 'react';
import BaseScreen from '@src/screens/BaseScreen';
import { CONSTANT_COMMONS, CONSTANT_CONFIGS } from '@src/constants';
import theme from '@src/styles/theme';
import formatUtils from '@src/utils/format';
import convert from '@src/utils/convert';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { COLORS } from '@src/styles';
import NavigationService from '@src/services/NavigationService';
import routeNames from '@src/router/routeNames';
import accountService from '@services/wallet/accountService';
import globalStyled from '@src/theme/theme.styled';
import styles from './styles';

const pDecimals = CONSTANT_COMMONS.DECIMALS.MAIN_CRYPTO_CURRENCY;
const symbol = CONSTANT_COMMONS.CRYPTO_SYMBOL.PRV;

class AddStake extends BaseScreen {
  constructor(props) {
    super(props);
    this.state = {
      blockStatus1: false,
      blockStatus2: false,
      staking: false,
    };
  }

  handleStake = async () => {
    const { onStake } = this.props;
    this.setState({ staking: true });
    await onStake();
    this.setState({ staking: false });
  };

  handleBuy = async () => {
    const { amount, fee, balance, onSwitchAccount, account, onSwitchMasterKey } = this.props;
    const outputValue = balance - (amount + fee);

    await onSwitchMasterKey(account.MasterKey.name);
    await onSwitchAccount(accountService.getAccountName(account));

    NavigationService.navigate(routeNames.Trade, {
      inputTokenId: CONSTANT_CONFIGS.USDT_TOKEN_ID,
      outputTokenId: CONSTANT_COMMONS.PRV.id,
      outputValue,
    });
  };

  renderStake() {
    const { staking } = this.state;
    const { amount } = this.props;
    const formatAmount = convert.toHumanAmount(amount, pDecimals) + ' ' + symbol;
    return (
      <View>
        <Button
          style={[styles.button, theme.BUTTON.BLACK_TYPE]}
          title={staking ? 'Staking in process' : `Stake ${formatAmount}`}
          onPress={this.handleStake}
          disabled={staking}
          isAsync={staking}
          isLoading={staking}
        />
      </View>
    );
  }

  renderBuy() {
    const { amount } = this.props;
    const formatAmount = formatUtils.amount(amount, pDecimals);
    return (
      <View style={styles.buy}>
        <Text4 style={[styles.desc, styles.firstLine]}>You need <Text style={[styles.desc, styles.firstLine]}>{formatAmount} PRV</Text>  to stake this node.</Text4>
        <Text4 style={styles.desc}>Please make sure you also have enough to cover the network fee.</Text4>
        <Button
          style={[styles.button, theme.BUTTON.BLACK_TYPE]}
          title="Buy PRV"
          onPress={this.handleBuy}
        />
      </View>
    );
  }

  renderStatusStakeOwnFund = (text, onPress, shouldDropDown) => {
    return (
      <View style={[{ flexDirection: 'row', justifyContent: 'space-between' }]}>
        <Text style={[theme.text.boldTextStyleMedium]}>{text}</Text>
        <TouchableOpacity
          style={[{ flexDirection: 'row' }, styles.balanceContainer]}
          onPress={onPress}
        >
          <Ionicons name={shouldDropDown ? 'ios-arrow-up' : 'ios-arrow-down'} size={25} color={COLORS.colorGreyBold} />
        </TouchableOpacity>
      </View>
    );
  };

  renderSelfStake() {
    const {
      fee,
      balance,
      account,
      amount,
    } = this.props;

    const isNotEnoughBalance = !balance || fee + amount > balance;

    return (
      <View style={{marginTop: 20, marginBottom: 20}}>
        <Text style={styles.title}>{account.AccountName}</Text>
        <View style={styles.row}>
          <Text4 style={styles.desc}>PRV balance</Text4>
          <Text style={styles.itemRight}>{formatUtils.amount(balance, pDecimals)} {symbol}</Text>
        </View>
        <View style={styles.row}>
          <Text4 style={styles.desc}>Fee</Text4>
          <Text style={styles.itemRight}>{formatUtils.amount(fee, pDecimals)} {symbol}</Text>
        </View>
        {isNotEnoughBalance ? this.renderBuy() : this.renderStake()}
      </View>
    );
  }

  render() {
    const {
      fee,
      balance,
      amount,
      isVNode,
    } = this.props;
    const {blockStatus1, blockStatus2} = this.state;

    if (amount === undefined || balance === undefined || fee === undefined) {
      return <ActivityIndicator size="small" />;
    }

    if (isVNode) {
      return this.renderSelfStake();
    }

    return (
      <ScrollViewBorder>
        {this.renderStatusStakeOwnFund('Stake with your own funds', ()=>this.setState({blockStatus1: !blockStatus1}), blockStatus1)}
        {blockStatus1 && this.renderSelfStake()}
      </ScrollViewBorder>
    );
  }
}

AddStake.propTypes = {
  account: PropTypes.object.isRequired,
  onStake: PropTypes.func.isRequired,
  isStaking: PropTypes.bool.isRequired,
  amount: PropTypes.number,
  fee: PropTypes.number,
  balance: PropTypes.number,
  estimateFeeData: PropTypes.object,
  isVNode: PropTypes.bool.isRequired,
  onSwitchAccount: PropTypes.func.isRequired,
};

export default AddStake;
