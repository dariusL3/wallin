import messaging from '@react-native-firebase/messaging';
import analytics from '@react-native-firebase/analytics';
import _ from 'lodash';
import DeviceInfo from 'react-native-device-info';
import { v4 } from 'uuid';

const TAG = 'firebase';

export const logEvent = async (event, data = {}) => {
  if (!_.isEmpty(event)) {
    try {
      const deviceId = DeviceInfo.getUniqueId();
      const instance = analytics;
      const result = await instance.logEvent(event, {
        deviceId,
        ...data,
      });

      // console.debug('FIREBASE EVENT', event);
    } catch (error) {
      console.debug(TAG, 'logEvent error = ', error);
    }
  }
};

export const getToken = async () => {
  let firebaseToken = '';
  try {
    firebaseToken = await messaging.getToken();
  } catch {
    firebaseToken = v4();
  }
  console.log('FIREBASE TOKEN', firebaseToken);
  return firebaseToken;
};
