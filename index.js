import 'react-native-gesture-handler';
import 'react-native-get-random-values';
import 'react-native-console-time-polyfill';
import '@src/services/polyfill';
import _ from 'lodash';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { name as appName } from './app.json';
import { AppRegistry } from 'react-native';
// import { App } from './App';


global.isMainnet = true;
console.disableYellowBox = true;

global.isDebug = () => {
  return __DEV__ || global.isDEV;
};

if (__DEV__) {
  import('./ReactotronConfig').then(() => console.log('Reactotron Configured'));
}

AppRegistry.registerRunnable(appName, async (initParams) => {
  const { default: serverService } = await import(
    '@src/services/wallet/Server'
  );
  const homeConfig = await AsyncStorage.getItem('home-config');
  const serverDefault =
    (await serverService.getDefaultIfNullGettingDefaulList()) ?? {};

  global.homeConfig = homeConfig;
  global.isMainnet =
    (_.isEmpty(serverDefault)
      ? global.isMainnet
      : serverService.isMainnet(serverDefault)) ?? true;
  global.severDefault = serverDefault;
  const { default: App } = await import('@src/App');
  console.log('GO_BRIDGE', global.__gobridge__);
  console.debug('GLOBAL', global.isMainnet, global.homeConfig);
  console.debug('crypto', global.crypto);

  AppRegistry.registerComponent(appName, () => App);
  AppRegistry.runApplication(appName, initParams);
});

// AppRegistry.registerComponent(appName, () => App);
