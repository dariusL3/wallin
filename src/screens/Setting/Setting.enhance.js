import React from 'react';
import ErrorBoundary from '@src/components/ErrorBoundary';
import { useDispatch, useSelector } from 'react-redux';
import { compose } from 'recompose';
import { actionFetchServers } from './Setting.actions';
import { settingSelector } from './Setting.selector';

const enhance = (WrappedComp) => (props) => {
  const dispatch = useDispatch();
  const { defaultServerId } = useSelector(settingSelector);
  React.useEffect(() => {
    dispatch(actionFetchServers());
  }, [defaultServerId]);
  return (
    <ErrorBoundary>
      <WrappedComp {...props} />
    </ErrorBoundary>
  );
};

export default compose(
  enhance,
);
