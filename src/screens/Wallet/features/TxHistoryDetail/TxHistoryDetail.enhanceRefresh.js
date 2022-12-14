import React from 'react';
import ErrorBoundary from '@components/ErrorBoundary';
import {
  actionRefreshHistoryDetail
} from '@screens/Wallet/features/TxHistoryDetail/TxHistoryDetail.actions';
import { useDispatch, useSelector } from 'react-redux';
import {
  txHistoryDetailRefreshSelector,
} from '@screens/Wallet/features/TxHistoryDetail/TxHistoryDetail.selector';

const enhance = WrappedComp => props => {
  const dispatch        = useDispatch();
  const isRefreshing    = useSelector(txHistoryDetailRefreshSelector);

  const onPullRefresh = ({ historyId, currencyType, decentralized }) => {
    if(historyId) {
      dispatch(actionRefreshHistoryDetail({ txID: historyId, currencyType, decentralized }));
    }
  };

  return (
    <ErrorBoundary>
      <WrappedComp
        {...{
          ...props,
          onPullRefresh,
          isRefresh: isRefreshing
        }}
      />
    </ErrorBoundary>
  );
};

export default enhance;
