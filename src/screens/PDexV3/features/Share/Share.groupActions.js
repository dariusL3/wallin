import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { ButtonChart } from '@src/components/Button';
import { Text, TouchableOpacity } from '@src/components/core';
import { Row } from '@src/components';
import { useNavigation } from 'react-navigation-hooks';
import routeNames from '@src/router/routeNames';
import { FONT } from '@src/styles';
import { ArrowGreyDown } from '@src/components/Icons';
import {
  poolSelectedDataSelector,
  rateDataSelector,
} from '@screens/PDexV3/features/OrderLimit';
import { colorsSelector } from '@src/theme';

const styled = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 16,
    paddingHorizontal: 24,
    paddingTop: 32,
  },
  top: {
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  block1: {
    marginRight: 15,
    flexDirection: 'row',
  },
  pool: {
    ...FONT.TEXT.incognitoH3,
  },
  rate: {
    ...FONT.TEXT.incognitoP1,
    marginRight: 8,
  },
  priceChange24hWrapper: {
    borderRadius: 4,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: 30,
    paddingHorizontal: 5,
  },
  priceChange24h: {
    ...FONT.TEXT.incognitoP1,
  },
  bottom: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
});

export const GroupActions = ({
  callback,
  onPressRefresh,
  hasChart = false,
  canSelectPool = true,
}) => {
  const navigation = useNavigation();
  const colors = useSelector(colorsSelector);
  const { poolId, poolStr, perChange24hToStr, perChange24hColor } = useSelector(
    poolSelectedDataSelector,
  );
  const { rateStr } = useSelector(rateDataSelector);
  const onPressChart = () =>
    navigation.navigate(routeNames.Chart, {
      poolId,
    });
  const handleSelectPool = () => {
    navigation.navigate(routeNames.PoolsTab, {
      onPressPool: (poolId) => {
        if (typeof callback === 'function') {
          callback(poolId);
        }
      },
    });
  };
  return (
    <View style={styled.container}>
      <Row style={styled.top}>
        <TouchableOpacity
          style={styled.block1}
          onPress={() => canSelectPool && handleSelectPool()}
        >
          <Text style={styled.pool}>{poolStr}</Text>
          {canSelectPool && <ArrowGreyDown />}
        </TouchableOpacity>
        {hasChart && (
          <Row style={styled.block2}>
            <ButtonChart style={{ marginRight: 10 }} onPress={onPressChart} />
          </Row>
        )}
      </Row>
      <Row style={styled.bottom}>
        <Text
          style={{ ...styled.rate, color: perChange24hColor || colors.subText }}
          numberOfLines={1}
          ellipsizeMode="tail"
        >
          {rateStr}
        </Text>
        <View
          style={{
            ...styled.priceChange24hWrapper,
          }}
        >
          <Text
            style={{
              ...styled.priceChange24h,
              color: perChange24hColor || colors.subText,
            }}
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            {perChange24hToStr}
          </Text>
        </View>
      </Row>
    </View>
  );
};

GroupActions.propTypes = {
  callback: PropTypes.func.isRequired,
  onPressRefresh: PropTypes.func,
  hasChart: PropTypes.bool,
  canSelectPool: PropTypes.bool,
};

export default React.memo(GroupActions);
