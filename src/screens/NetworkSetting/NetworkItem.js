/* eslint-disable import/no-cycle */
import { Text, TouchableOpacity, View } from '@src/components/core';
import { View4 } from '@src/components/core/View';
import { Text4 } from '@src/components/core/Text';
import PropTypes from 'prop-types';
import React from 'react';
import isEqual from 'lodash/isEqual';
import { networkItemStyle } from './NetworkSetting.styled';

const NetworkItem = ({ active, network, onActive }) => {
  const [clickTime, setClickTime] = React.useState(0);
  return (
    <TouchableOpacity
      onPress={() => {
        const currClickTime = clickTime + 1;
        setClickTime(currClickTime);
        if (currClickTime === 7) {
          global.isDEV = true;
        } else if (
          (__DEV__ || !!global.isDEV) &&
          !isEqual(network?.id, 'local')
        ) {
          onActive();
        }
      }}
    >
      <View
        style={[
          networkItemStyle.container,
          active && networkItemStyle.activeItem,
        ]}
      >
        <View4 style={networkItemStyle.circle} />
        <View style={networkItemStyle.textInfoContainer}>
          <Text
            style={networkItemStyle.networkName}
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            {network?.name}
          </Text>
          <Text4
            style={networkItemStyle.networkAddr}
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            {network?.address}
          </Text4>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export const networkItemShape = PropTypes.shape({
  id: PropTypes.string,
  default: PropTypes.bool,
  name: PropTypes.string,
  address: PropTypes.string,
  username: PropTypes.string,
  password: PropTypes.string,
});

NetworkItem.defaultProps = {
  active: false,
  expanded: false,
  onActive: undefined,
  onExpand: undefined,
};

NetworkItem.propTypes = {
  network: networkItemShape.isRequired,
  active: PropTypes.bool,
  expanded: PropTypes.bool,
  onActive: PropTypes.func,
  onExpand: PropTypes.func,
};

export default NetworkItem;
