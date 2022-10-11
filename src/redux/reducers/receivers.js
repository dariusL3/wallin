import {
  ACTION_CREATE,
  ACTION_DELETE,
  ACTION_UPDATE,
  ACTION_UPDATE_RECENTLY,
  ACTION_DELETE_ALL,
  ACTION_SYNC_SUCCESS,
  ACTION_MIGRATE_INCOGNITO_ADDRESS,
  ACTION_SELECTED_RECEIVER,
  ACTION_REMOVE_SELECTED_RECEIVER,
} from '@src/redux/actions/receivers';
import { isReceiverExist } from '@src/redux/utils/receivers';
import { CONSTANT_KEYS } from '@src/constants';
import { isEqual, toLower } from 'lodash';

const initialState = {
  [CONSTANT_KEYS.REDUX_STATE_RECEIVERS_IN_NETWORK]: {
    receivers: [],
    sync: false,
    migrateIncognitoAddress: false,
  },
  [CONSTANT_KEYS.REDUX_STATE_RECEIVERS_OUT_NETWORK]: {
    receivers: [],
  },
  selected: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
  case ACTION_CREATE: {
    const { keySave, receiver } = action.payload;
    const oldReceivers = state[keySave].receivers;
    const exist = isReceiverExist(oldReceivers, receiver);
    if (exist) {
      throw new Error('User exist!');
    }
    return {
      ...state,
      [keySave]: {
        ...state[keySave],
        receivers: [
          ...oldReceivers,
          {
            ...receiver,
            createdAt: new Date().getTime(),
            updatedAt: null,
          },
        ],
      },
    };
  }
  case ACTION_UPDATE: {
    const { keySave, receiver } = action.payload;
    const oldReceivers = state[keySave].receivers;
    const isNameExisted = oldReceivers
      .filter((item) => item?.address !== receiver?.address)
      .some((item) => isEqual(toLower(item?.name), toLower(receiver?.name)));
    if (isNameExisted) {
      throw new Error('Name is existed!');
    }
    return {
      ...state,
      [keySave]: {
        ...state[keySave],
        receivers: [
          ...oldReceivers.map((item) =>
            item.address === receiver.address
              ? {
                ...item,
                name: receiver?.name || item?.name,
                updatedAt: new Date().getTime(),
                rootNetworkName:
                      receiver?.rootNetworkName || item?.rootNetworkName,
              }
              : item,
          ),
        ],
      },
    };
  }
  case ACTION_DELETE: {
    const { keySave, receiver } = action.payload;
    const { address } = receiver;
    const oldReceivers = state[keySave].receivers;
    const exist = isReceiverExist(oldReceivers, receiver);
    if (!exist) {
      return state;
    }
    return {
      ...state,
      [keySave]: {
        ...state[keySave],
        receivers: [
          ...oldReceivers.filter((item) => item?.address !== address),
        ],
      },
    };
  }
  case ACTION_UPDATE_RECENTLY: {
    const { keySave, receiver } = action.payload;
    const oldReceivers = state[keySave].receivers;
    const exist = oldReceivers.some(
      (item) => item?.address === receiver.address,
    );
    if (!exist) {
      return state;
    }
    return {
      ...state,
      [keySave]: {
        ...state[keySave],
        receivers: [
          ...oldReceivers.map((item) =>
            item.address === receiver.address
              ? { ...item, recently: new Date().getTime() }
              : item,
          ),
        ],
      },
    };
  }
  case ACTION_DELETE_ALL: {
    const { keySave } = action.payload;
    return {
      ...state,
      [keySave]: {
        ...state[keySave],
        receivers: [],
      },
    };
  }
  case ACTION_SYNC_SUCCESS: {
    const keySave = action.payload;
    return {
      ...state,
      [keySave]: {
        ...state[keySave],
        sync: true,
      },
    };
  }
  case ACTION_MIGRATE_INCOGNITO_ADDRESS: {
    const keySave = CONSTANT_KEYS.REDUX_STATE_RECEIVERS_IN_NETWORK;
    return {
      ...state,
      [keySave]: {
        ...state[keySave],
        migrateIncognitoAddress: true,
      },
    };
  }
  case ACTION_SELECTED_RECEIVER: {
    const { address, keySave } = action.payload;
    const { receivers } = state[keySave];
    const selected = receivers?.find(
        (receiver) => receiver?.address === address,
      );
    return {
      ...state,
      selected: { ...selected, keySave },
    };
  }
  case ACTION_REMOVE_SELECTED_RECEIVER: {
    return {
      ...state,
      selected: null,
    };
  }
  default:
    return state;
  }
};
