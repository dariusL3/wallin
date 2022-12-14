import React, { memo } from 'react';
import { Text, View, TouchableOpacity, Button } from '@components/core';
import PropTypes from 'prop-types';
import BtnStatus from '@src/components/Button/BtnStatus';
import routeNames from '@src/router/routeNames';
import BtnWithBlur from '@src/components/Button/BtnWithBlur';
import PRVRewards from '@screens/Node/components/PRVRewards';
import { ActivityIndicator } from 'react-native';
import { useNavigation } from 'react-navigation-hooks';
import { useDispatch } from 'react-redux';
import { actionLogEvent } from '@screens/Performance';
import styles, { nodeItemStyle } from './style';

const VNode = memo((props) => {
  const navigation = useNavigation();

  const {
    item,
    onImportAccount,
    onStake,
    onUnstake,
    onWithdraw,
    withdrawTxs,
    isFetching,
  } = props;

  const dispatch    = useDispatch();
  const labelName   = item?.Name;
  const colorStatus = item?.StatusColor;
  const hasStaked   = item?.IsStaked;
  const hasAccount  = item?.AccountName;

  const renderStatusView = () => {
    if (isFetching) {
      return (
        <View style={[nodeItemStyle.btnStyle, nodeItemStyle.wrapperLoading]}>
          <ActivityIndicator size='small' />
        </View>
      );
    }
    return (<BtnStatus backgroundColor={colorStatus} />);
  };

  // If Fetching not show
  const renderItemRight = () => (
    <View style={styles.itemRight}>
      {!hasAccount
        ? <Button title='Import' onPress={onImportAccount} style={styles.actionButton} />
        : !hasStaked
          ? <Button title='Stake' onPress={() => onStake(item)} style={styles.actionButton} />
          : null}
    </View>
  );

  const onVNodePress = () => {
    dispatch(
      actionLogEvent({
        desc: JSON.stringify({
          WithdrawTxs: JSON.stringify(withdrawTxs || {}),
          BLSKey: item?.PublicKeyMining,
          PublicKey: item?.PublicKey,
          Account: JSON.stringify(item?.Account || {})
        })
      }),
    );
    navigation.navigate(routeNames.NodeItemDetail,
      {
        onUnstake: onUnstake,
        onWithdraw: onWithdraw,
        onStake: onStake,
        onImport: onImportAccount,
        withdrawTxs,
        productId: item?.ProductId
      });
  };

  return (
    <View>
      <TouchableOpacity
        style={styles.row}
        onPress={onVNodePress}
      >
        <View>
          <View style={nodeItemStyle.wrapperRaw}>
            {renderStatusView()}
            <Text style={styles.itemLeft} numberOfLines={1}>
              {labelName || '-'}
            </Text>
          </View>
          <View style={{ marginLeft: 30 }}>
            <PRVRewards isDefault item={item} rewards={item.Rewards} />
          </View>
        </View>
        {!isFetching && renderItemRight()}
      </TouchableOpacity>
    </View>
  );

});

VNode.propTypes = {
  item: PropTypes.object.isRequired,
  onImportAccount: PropTypes.func.isRequired,
  onStake: PropTypes.func.isRequired,
  onWithdraw: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired,
  onUnstake: PropTypes.func.isRequired,
  withdrawTxs: PropTypes.object.isRequired,
};

export default VNode;

