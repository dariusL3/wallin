import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'recompose';
import {
  Image,
  TouchableOpacity,
  View,
  RoundCornerButton,
  Text,
  RefreshControl,
  ScrollView,
} from '@components/core';
import withFilter from '@screens/DexV2/components/Trade/filter.enhance';
import { Divider } from '@rneui/themed';
import downArrow from '@assets/images/icons/circle_arrow_down.png';
import withSwap from '@screens/DexV2/components/Trade/swap.enhance';
import Balance from '@screens/DexV2/components/Balance';
import withCalculateOutput from '@screens/DexV2/components/Trade/output.enhance';
import withValidate from '@screens/DexV2/components/Trade/validate.enhance';
import withEstimateFee from '@screens/DexV2/components/Trade/fee.enhance';
import ExtraInfo from '@screens/DexV2/components/ExtraInfo';
import withChangeInputToken from '@screens/DexV2/components/Trade/inputToken.enhance';
import { useNavigation } from 'react-navigation-hooks';
import ROUTE_NAMES from '@routers/routeNames';
import withHistories from '@screens/DexV2/components/histories.enhance';
import withParams from '@screens/DexV2/components/Trade/params.enhance';
import withAccount from '@screens/DexV2/components/account.enhance';
import withERC20 from '@screens/DexV2/components/Trade/with.erc20';
import PoolSize from '@screens/DexV2/components/PoolSize';
import { ArrowRightGreyIcon } from '@components/Icons';
import PDexFee from '@screens/DexV2/components/PDexFee';
import { PowerTrade } from '@screens/DexV2/components/Powered';
import PriceImpact from '@screens/DexV2/components/PriceImpact/PriceImpact';
import NewInput from '../NewInput';
import withPair from './pair.enhance';
import withChangeInput from './input.enhance';
import withBalanceLoader from './balance.enhance';
import styles from './style';
import ExchangeRate from '../ExchangeRate/ExchangeRateImpact';

const Trade = ({
  pairTokens,
  inputToken,
  inputValue,
  inputText,
  onChangeInputToken,
  onChangeInputText,
  onSwapTokens,
  onChangeOutputToken,
  outputList,
  outputToken,
  outputText,
  outputValue,
  minimumAmount,
  inputBalance,
  prvBalance,
  fee,
  feeToken,
  pair,
  histories,
  error,
  warning,
  quote,
  gettingQuote,
  isErc20,
  isLoading,
  onLoadPairs,
  inputBalanceText,
}) => {
  const navigation = useNavigation();
  const navigateTradeConfirm = () => {
    navigation.navigate(ROUTE_NAMES.TradeConfirm, {
      inputToken,
      inputValue,
      inputText,
      outputToken,
      outputValue,
      minimumAmount,
      fee,
      feeToken,
      pair,
      isErc20,
      inputBalance,
      prvBalance,
      quote,

      // Reload new rate after trading successfully
      onTradeSuccess: onLoadPairs
    });
  };
  const navigateHistory = () => {
    navigation.navigate(ROUTE_NAMES.TradeHistory);
  };

  const renderPoolSize = () => {
    if (pair && (!quote || (quote && !!quote?.crossTrade))) {
      return (
        <PoolSize
          outputToken={outputToken}
          inputToken={inputToken}
          pair={pair}
          hasPower
          network={isErc20 && quote?.network ? quote?.network : 'Incognito'}
        />
      );
    }
    return (
      <ExtraInfo
        left={<PowerTrade network={isErc20 ? quote?.network : 'Incognito'} />}
        right=''
      />
    );
  };

  const renderFee = () => (
    <PDexFee
      isErc20={isErc20}
      feeToken={feeToken}
      fee={fee}
      quote={quote}
      leftStyle={styles.textLeft}
    />
  );

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scrollContainer}
        refreshControl={
          <RefreshControl refreshing={isLoading} onRefresh={onLoadPairs} />
        }
        paddingBottom
      >
        <View style={styles.wrapper}>
          <NewInput
            tokens={pairTokens}
            onSelectToken={onChangeInputToken}
            onChange={onChangeInputText}
            token={inputToken}
            value={inputText}
            disabled={inputBalance === null}
            loading={inputBalance === null}
            placeholder="0"
            maxValue={inputBalanceText}
          />
          <Text style={styles.error}>{error}</Text>
          <View style={styles.arrowWrapper}>
            <Divider style={styles.divider} />
            <TouchableOpacity onPress={onSwapTokens}>
              <Image source={downArrow} style={styles.arrow} />
            </TouchableOpacity>
            <Divider style={styles.divider} />
          </View>
          <NewInput
            tokens={outputList}
            onSelectToken={onChangeOutputToken}
            token={outputToken}
            value={outputText}
            disabled={inputBalance === null}
            loading={gettingQuote}
          />
          <RoundCornerButton
            style={styles.button}
            title="Preview your order"
            disabled={
              !!error ||
              !inputBalance ||
              !inputValue ||
              !outputValue ||
              !minimumAmount ||
              !inputText ||
              !!gettingQuote
            }
            onPress={navigateTradeConfirm}
          />
          {!!(inputToken && outputToken) && (
            <View style={styles.extraInfo}>
              <Balance title='Balance' token={inputToken} balance={inputBalance} />
              <ExchangeRate
                inputValue={inputValue}
                outputValue={outputValue}
                minimumAmount={minimumAmount}
                inputToken={inputToken}
                outputToken={outputToken}
                quote={quote}
              />
              <PriceImpact
                inputValue={inputValue}
                outputValue={outputValue}
                minimumAmount={minimumAmount}
                inputToken={inputToken}
                outputToken={outputToken}
              />
              {renderFee()}
              {renderPoolSize()}
              <ExtraInfo left={warning} right="" style={styles.warning} />
            </View>
          )}
        </View>
      </ScrollView>
      <View style={styles.bottomBar}>
        {!!histories.length && (
          <TouchableOpacity
            onPress={navigateHistory}
            style={styles.bottomFloatBtn}
          >
            <Text style={styles.bottomText}>Order history</Text>
            <ArrowRightGreyIcon style={{ marginLeft: 10 }} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

Trade.propTypes = {
  pairTokens: PropTypes.array.isRequired,
  inputToken: PropTypes.object,
  inputValue: PropTypes.number,
  inputText: PropTypes.string,
  onChangeInputToken: PropTypes.func.isRequired,
  onChangeInputText: PropTypes.func.isRequired,
  onSwapTokens: PropTypes.func.isRequired,
  onChangeOutputToken: PropTypes.func.isRequired,
  outputList: PropTypes.array,
  outputToken: PropTypes.object,
  outputText: PropTypes.string,
  outputValue: PropTypes.number,
  minimumAmount: PropTypes.number,
  inputBalance: PropTypes.number,
  prvBalance: PropTypes.number,
  fee: PropTypes.number.isRequired,
  feeToken: PropTypes.object.isRequired,
  pair: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  histories: PropTypes.array,
  error: PropTypes.string,
  warning: PropTypes.string,
  gettingQuote: PropTypes.bool,
  quote: PropTypes.object,
  isErc20: PropTypes.bool,
  inputBalanceText: PropTypes.string,
  isLoading: PropTypes.bool.isRequired,
  onLoadPairs: PropTypes.func.isRequired,
};

export default compose(
  withAccount,
  withHistories,
  withChangeInputToken,
  withFilter,
  withERC20,
  withPair,
  withEstimateFee,
  withChangeInput,
  withBalanceLoader,
  withSwap,
  withCalculateOutput,
  withValidate,
  withParams,
)(Trade);

Trade.defaultProps = {
  inputToken: null,
  inputValue: null,
  inputText: '',
  outputList: [],
  outputToken: null,
  outputText: '',
  outputValue: null,
  minimumAmount: null,
  inputBalance: null,
  prvBalance: null,
  error: '',
  warning: '',
  pair: null,
  histories: null,
  gettingQuote: false,
  quote: null,
  isErc20: false,
  inputBalanceText: '',
};
