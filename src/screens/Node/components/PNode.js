import React, { memo } from 'react';
import { Text, TouchableOpacity, View, Button } from '@components/core';
import PropTypes from 'prop-types';
import BtnStatus from '@src/components/Button/BtnStatus';
import BtnWithBlur from '@src/components/Button/BtnWithBlur';
import routeNames from '@src/router/routeNames';
import PRVRewards from '@screens/Node/components/PRVRewards';
import { useNavigation } from 'react-navigation-hooks';
import { ActivityIndicator } from 'react-native';
import { actionLogEvent } from '@screens/Performance';
import { useDispatch } from 'react-redux';
import styles, { nodeItemStyle } from './style';

const PNode = memo((props) => {
  const {
    item,
    isFetching,
    onImportAccount,
    onStake,
    onUnstake,
    onWithdraw,
  } = props;

  const navigation    = useNavigation();
  const dispatch      = useDispatch();
  const labelName     = item.Name;
  const unstakedPNode = item.IsFundedUnstaked;
  const hasStaked     = item.IsStaked;
  const hasAccount    = item?.AccountName;
  const colorStatus   = item.StatusColor;

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
        : (!hasStaked && unstakedPNode)
          ? <Button title='Stake' onPress={() => onStake(item)} style={styles.actionButton} />
          : null}
    </View>
  );

  const onPNodePress = () => {
    dispatch(
      actionLogEvent({
        desc: JSON.stringify({
          Account: item?.AccountName,
          QRCODE: item?.QRCode,
          IsFundedUnstaked: item.IsFundedUnstaked,
          IsStaked: item.IsStaked
        })
      }),
    );
    navigation.navigate(routeNames.NodeItemDetail, {
      onUnstake: onUnstake,
      onWithdraw: onWithdraw,
      onStake: onStake,
      onImport: onImportAccount,
      productId: item?.ProductId
    });
  };

  return (
    <View>
      <TouchableOpacity
        style={styles.row}
        onPress={onPNodePress}
      >
        <View>
          <View style={nodeItemStyle.wrapperRaw}>
            {renderStatusView()}
            <Text style={[styles.itemLeft]} numberOfLines={1}>{labelName || '-'}</Text>
          </View>
          <View style={{marginLeft: 30}}>
            <PRVRewards isDefault item={item} rewards={item.Rewards} />
          </View>
        </View>
        {!isFetching && renderItemRight()}
      </TouchableOpacity>
    </View>
  );
});

PNode.propTypes = {
  item: PropTypes.object.isRequired,
  onWithdraw: PropTypes.func.isRequired,
  onUnstake: PropTypes.func.isRequired,
  onImportAccount: PropTypes.func.isRequired,
  onStake: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired,
};

export default PNode;

