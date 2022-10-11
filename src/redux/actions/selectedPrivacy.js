import type from '@src/redux/types/selectedPrivacy';

export const setSelectedPrivacy = (privacyTokenId = throw new Error('Privacy coin ID is required')) => ({
  type: type.SET,
  data: privacyTokenId
});

export const clearSelectedPrivacy = () => ({
  type: type.CLEAR,
});
