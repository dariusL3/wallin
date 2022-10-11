import { CONSTANT_COMMONS } from '@src/constants';
import {isIOS} from '@utils/platform';

export const detectToken = {
  ispETH: tokenId => tokenId === CONSTANT_COMMONS.TOKEN_ID.pETH,
  ispBTC: tokenId => tokenId === CONSTANT_COMMONS.TOKEN_ID.pBTC,
  ispBNB: tokenId => tokenId === CONSTANT_COMMONS.TOKEN_ID.pBNB,
  ispNEO: tokenId => tokenId === CONSTANT_COMMONS.TOKEN_ID.pNEO,
};

export const generateTestId = (id) => {
  return { accessibilityLabel: id, testID: id };
};
