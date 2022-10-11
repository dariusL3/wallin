import React from 'react';
import { useNavigation } from 'react-navigation-hooks';
import { SuccessModal } from '@src/components';
import ROUTE_NAMES from '@routers/routeNames';

const withSuccess = WrappedComp => (props) => {
  const { coins } = props;
  const [success, setSuccess] = React.useState(false);
  const navigation = useNavigation();
  const {
    provide,
    coin,
  } = props;

  const closeSuccess = () => {
    setSuccess(false);
    navigation.navigate(ROUTE_NAMES.PoolV2History, { coins });
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
        title={`You provided ${provide} ${coin.symbol}`}
        buttonTitle="Sure thing"
        description='Thanks for helping people trade with freedom.'
        visible={success}
      />
    </>
  );
};

export default withSuccess;
