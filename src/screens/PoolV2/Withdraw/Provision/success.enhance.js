import React from 'react';
import { useNavigation } from 'react-navigation-hooks';
import { SuccessModal } from '@src/components';
import ROUTE_NAMES from '@routers/routeNames';

const withSuccess = WrappedComp => (props) => {
  const [success, setSuccess] = React.useState(false);
  const navigation = useNavigation();

  const {
    inputText,
    coin,
    account,
  } = props;

  const closeSuccess = () => {
    setSuccess(false);
    navigation.navigate(ROUTE_NAMES.PoolV2);
  };

  return (
    <>
      <WrappedComp
        {...{
          ...props,
          onSuccess: setSuccess,
        }}
      />
      <SuccessModal
        closeSuccessDialog={closeSuccess}
        title="Withdrawal initiated."
        buttonTitle="Back to dashboard"
        description={`${inputText} ${coin.symbol} is being withdrawn to ${account.name}.`}
        extraInfo="You’ll receive a notification when your balance updates."
        visible={success}
      />
    </>
  );
};

export default withSuccess;
