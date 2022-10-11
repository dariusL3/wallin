import React, { memo } from 'react';
import ExtraInfo from '@screens/DexV2/components/ExtraInfo';
import styles from '@screens/DexV2/components/ExchangeRate/style';
import { View, Text } from '@components/core';
import Help from '@components/Help';
import routeNames from '@routers/routeNames';
import helperConst from '@src/constants/helper';
import { useNavigation } from 'react-navigation-hooks';
import { calculateSizeImpact } from '@screens/DexV2/components/Trade/utils';
import stylesheet from '@screens/DexV2/components/ExtraInfo/style';
import { COLORS } from '@src/styles';
import PropTypes from 'prop-types';

const PriceImpact = (props) => {
  const {
    pair,
    inputToken,
    minimumAmount,
    outputToken,
    slippage,
  } = props;
  const navigation = useNavigation();

  let impactValue = null;
  let ImpactView = '';
  if (inputToken?.id && outputToken?.id) {
    const {
      impact,
      showWarning
    } = calculateSizeImpact(minimumAmount, outputToken, pair, slippage);
    impactValue = impact;
    if (impactValue !== null) {
      ImpactView = (
        <View style={{ alignItems: 'flex-end' }}>
          <Text style={[stylesheet.text, stylesheet.textLeft, { color: showWarning ? COLORS.orange : COLORS.green4, marginRight: 0 }]}>
            {`${impactValue}%`}
          </Text>
        </View>
      );
    }
  }

  const onHelpPress = () => {
    navigation.navigate(routeNames.Helper, helperConst.HELPER_CONSTANT.PRICE_IMPACT);
  };

  return (
    <>
      { impactValue !== null &&
      (
        <ExtraInfo
          left={(
            <View style={styles.row}>
              <Text style={styles.extra}>{helperConst.HELPER_CONSTANT.PRICE_IMPACT.title}</Text>
              <Help onPress={onHelpPress} />
            </View>
          )}
          right={ImpactView}
        />
      )
      }
    </>
  );
};

PriceImpact.propTypes = {
  inputToken: PropTypes.object.isRequired,
  outputToken: PropTypes.object.isRequired,
  minimumAmount: PropTypes.number,
  pair: PropTypes.object,
  slippage: PropTypes.number
};

PriceImpact.defaultProps = {
  minimumAmount: 0,
  pair: {},
  slippage: 0
};

export default memo(PriceImpact);