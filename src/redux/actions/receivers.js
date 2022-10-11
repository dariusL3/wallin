export const ACTION_CREATE = '[receivers] Action create receiver';
export const ACTION_UPDATE = '[receivers] Action update receiver';
export const ACTION_RESEARCH = '[receivers] Action research receiver';
export const ACTION_DELETE = '[receivers] Action delete receiver';
export const ACTION_UPDATE_RECENTLY =
  '[receivers] Action update recently receiver';
export const ACTION_DELETE_ALL = '[receivers] Action delete all receivers';
export const ACTION_SYNC_SUCCESS = '[receivers] Sync receivers success';
export const ACTION_MIGRATE_INCOGNITO_ADDRESS =
  '[receivers] Migrate incognito address success';
export const ACTION_SELECTED_RECEIVER = '[receivers] Selected receiver';
export const ACTION_REMOVE_SELECTED_RECEIVER =
  '[receivers] Remove selected receiver';

const initPayload = {
  keySave: '',
  receiver: {
    address: '',
    name: '',
    networkName: '',
  },
};

export const actionCreate = (payload = initPayload) => ({
  type: ACTION_CREATE,
  payload,
});

export const actionUpdate = (payload = initPayload) => ({
  type: ACTION_UPDATE,
  payload,
});

export const actionResearch = (payload = initPayload) => ({
  type: ACTION_RESEARCH,
  payload,
});

export const actionDelete = (payload = initPayload) => ({
  type: ACTION_DELETE,
  payload,
});

export const actionUpdateRecently = (payload = initPayload) => ({
  type: ACTION_UPDATE_RECENTLY,
  payload,
});

export const actionDeleteAll = (payload = initPayload) => ({
  type: ACTION_DELETE_ALL,
  payload,
});

export const actionSyncSuccess = (payload) => ({
  type: ACTION_SYNC_SUCCESS,
  payload,
});

export const actionMigrateIncognitoAddress = (payload) => ({
  type: ACTION_MIGRATE_INCOGNITO_ADDRESS,
  payload,
});

export const actionSelectedReceiver = (payload) => ({
  type: ACTION_SELECTED_RECEIVER,
  payload,
});

export const actionRemoveSelectedReceiver = () => ({
  type: ACTION_REMOVE_SELECTED_RECEIVER,
});
