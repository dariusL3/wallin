import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'recompose';
import { View, Text, RoundCornerButton, ScrollViewBorder } from '@components/core';
import ExtraInfo from '@screens/DexV2/components/ExtraInfo';
import { withLayout_2 } from '@components/Layout';
import Header from '@components/Header/index';
import Loading from '@screens/DexV2/components/Loading';
import withDefaultAccount from '@components/Hoc/withDefaultAccount';
import mainStyles from '@screens/PoolV2/style';
import { RefreshControl } from 'react-native';
import { useSelector } from 'react-redux';
import { colorsSelector } from '@src/theme';
import withSuccess from './success.enhance';
import withConfirm from './confirm.enhance';
import withData from './data.enhance';
import styles from './style';

const ConfirmMigration = ({
  coin,
  migrate,
  unlockTimeFormat,
  onConfirm,
  providing,
  error,
  disable,
  onRefresh,
  refreshing,
}) => {
  const colors = useSelector(colorsSelector);
  const renderRefreshControl = () => (
    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
  );
  return (
    <>
      <Header title="Confirmation" />
      <ScrollViewBorder refreshControl={renderRefreshControl()}>
        <View style={styles.mainInfo}>
          <Text style={styles.label}>Migrate</Text>
          <Text style={[styles.bigText, { color: colors.blue1 }]} numberOfLines={3}>
            {migrate} {coin.symbol}
          </Text>
        </View>
        <ExtraInfo
          left="Term ends"
          right={`${unlockTimeFormat}`}
          style={styles.extra}
          rightStyle={styles.extraRight}
        />
        <ExtraInfo
          left="Migrate"
          right={`${migrate} ${coin.symbol}`}
          style={styles.extra}
          rightStyle={styles.extraRight}
        />
        {!!error && <Text style={styles.error}>{error}</Text>}
        <RoundCornerButton
          style={[styles.button, mainStyles.button]}
          title="Confirm"
          onPress={onConfirm}
          disabled={!!error || disable}
        />
      </ScrollViewBorder>
      <Loading open={providing} />
    </>
  );
};

ConfirmMigration.propTypes = {
  coin: PropTypes.object,
  migrate: PropTypes.string,
  onConfirm: PropTypes.func.isRequired,

  unlockTimeFormat: PropTypes.string.isRequired,

  providing: PropTypes.bool.isRequired,

  error: PropTypes.string,
  disable: PropTypes.bool.isRequired,

  onRefresh: PropTypes.func.isRequired,
  refreshing: PropTypes.bool,
};

ConfirmMigration.defaultProps = {
  coin: null,
  migrate: '',
  error: '',
  refreshing: false,
};

export default compose(
  withLayout_2,
  withData,
  withSuccess,
  withDefaultAccount,
  withConfirm,
)(ConfirmMigration);
