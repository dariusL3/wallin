import React, { memo } from 'react';
import { StyleSheet, View} from 'react-native';
import PropTypes from 'prop-types';
import withEnhance from '@screens/Node/UpdateFirmware/UpdateFirmware.enhance';
import withData from '@screens/Node/UpdateFirmware/UpdateFirware.enhanceData';
import { Header } from '@src/components';
import { Text4 } from '@components/core/Text';
import { compose } from 'recompose';
import { withLayout_2 } from '@components/Layout';
import styles from '@screens/Node/UpdateWifi/style';
import theme from '@src/styles/theme';
import {
  RoundCornerButton,
  Text,
  ScrollViewBorder
} from '@components/core';
import { MESSAGES } from '@src/constants';
import { isEmpty } from 'lodash';

const UpdateFirmware = memo(({
  error,
  updating,
  updateSuccess,
  onGoBack,
  onButtonPress,
}) => {

  const renderTitle = () => (
    <Text4 style={[theme.text.blackMedium, UpdateFirmwareStyles.title]}>
      { updateSuccess
        ? MESSAGES.UPDATE_FIRMWARE_NODE_DONE
        : MESSAGES.MAKE_UPDATE_FIRMWARE_NODE
      }
    </Text4>
  );

  const renderError = () => {
    if (isEmpty(error)) return null;
    return (<Text style={[styles.error, { marginBottom: 20 }  ]}>{error}</Text>);
  };

  return (
    <View style={{ flex: 1 }}>
      <Header title='Update Node' onGoBack={onGoBack} />
      <ScrollViewBorder>
        {renderTitle()}
        {renderError()}
        <RoundCornerButton
          disabled={updating}
          title={updateSuccess ? 'OK' : updating ? 'Updating' : 'Update now'}
          isLoading={updating}
          style={[styles.button, theme.BUTTON.NODE_BUTTON, { marginTop: 0 }]}
          onPress={onButtonPress}
        />
      </ScrollViewBorder>
    </View>
  );
});

UpdateFirmware.propTypes = {
  error: PropTypes.string,
  updating: PropTypes.bool.isRequired,
  updateSuccess: PropTypes.bool.isRequired,
  onGoBack: PropTypes.func.isRequired,
  onButtonPress: PropTypes.func.isRequired,
};

UpdateFirmware.defaultProps = {
  error: ''
};

const UpdateFirmwareStyles = StyleSheet.create({
  title: {
    lineHeight: 30,
    marginBottom: 50,
  }
});

export default compose(
  withLayout_2,
  withData,
  withEnhance
)(UpdateFirmware);