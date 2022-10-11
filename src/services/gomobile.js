// import { NativeModules } from 'react-native';
import { Wallet, sjcl, setPrivacyGoMethods, Incognitojs, wasmFuncs } from 'react-native-incognitojs';
import { ExHandler } from './exception';

const asyncMethods = [
  'createTransaction',
  'createConvertTx',
  'newKeySetFromPrivate',
  'decryptCoin',
  'createCoin',
  'generateBLSKeyPairFromSeed',
  'hybridEncrypt',
  'hybridDecrypt',
  'initPrivacyTx',
  'staking',
  'stopAutoStaking',
  'initPrivacyTokenTx',
  'initBurningRequestTx',
  'initWithdrawRewardTx',
  'generateKeyFromSeed',
  'scalarMultBase',
  'randomScalars',
  'getSignPublicKey',
  'signPoolWithdraw',
  'verifySign',
  'initPRVContributionTx',
  'initPTokenContributionTx',
  'initPRVTradeTx',
  'initPTokenTradeTx',
  'withdrawDexTx',
  'hybridEncryptionASM',
  'hybridDecryptionASM',
  'estimateTxSize',
  'setShardCount',
  'generateBTCMultisigAddress',
  'createOTAReceiver',
];

try {
  if (!setPrivacyGoMethods) throw 'WHAT';
  console.log('GO modules were loaded');
  console.log(Incognitojs);
  console.log(setPrivacyGoMethods);
  console.log(wasmFuncs);
} catch (e) {
  console.error('GO modules loading failed');
  new ExHandler(e).showErrorToast();
}
