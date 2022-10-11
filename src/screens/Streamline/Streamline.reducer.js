import AsyncStorage from '@react-native-async-storage/async-storage';
import { CONSTANT_KEYS } from '@src/constants';
import { persistReducer } from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/es/stateReconciler/autoMergeLevel2';
import {
  ACTION_FETCHING,
  ACTION_FETCHED,
  ACTION_INIT_PROCCESS,
  ACTION_FETCHED_ALL_TXS,
  ACTION_TOGGLE_PENDING,
  ACTION_REMOVE_LOCAL_UTXOS,
  ACTION_FETCHED_UTXO,
  ACTION_CLEAR_STREAM_LINE,
  ACTION_FETCHING_UTXO,
} from './Streamline.actionsName';

const initialState = {
  consolidated: 0,
  times: 1,
  isFetching: false,
  isFetched: false,
  isPending: false,
  UTXOS: [],
  isFetchingUTXOS: false,
  storage: {
    [CONSTANT_KEYS.UTXOS_DATA]: {
      data: {},
    },
  },
};

const streamlineReducer = (state = initialState, action) => {
  switch (action.type) {
  case ACTION_FETCHING: {
    return {
      ...state,
      isFetching: true,
    };
  }
  case ACTION_FETCHED: {
    const keySave = CONSTANT_KEYS.UTXOS_DATA;
    const storage = state?.storage;
    const { address, utxos } = action.payload;
    const data = storage[keySave]?.data || {};
    const addressData = data[address] || [];
    const newData = { ...data, [address]: [...addressData, ...utxos] };
    return {
      ...state,
      storage: {
        ...storage,
        [keySave]: {
          ...storage[keySave],
          data: newData,
        },
      },
      consolidated: state.consolidated + 1,
      isPending: true,
    };
  }
  case ACTION_FETCHED_ALL_TXS: {
    return {
      ...state,
      isFetching: false,
      isFetched: true,
    };
  }
  case ACTION_INIT_PROCCESS: {
    const { times } = action.payload;
    return {
      ...state,
      consolidated: 0,
      times,
    };
  }
  case ACTION_TOGGLE_PENDING: {
    return {
      ...state,
      isPending: action.payload,
    };
  }
  case ACTION_REMOVE_LOCAL_UTXOS: {
    const keySave = CONSTANT_KEYS.UTXOS_DATA;
    const storage = state?.storage;
    const { address } = action.payload;
    const data = storage[keySave]?.data || {};
    const newData = { ...data, [address]: [] };
    return {
      ...state,
      storage: {
        ...storage,
        [keySave]: {
          ...storage[keySave],
          data: newData,
        },
      },
    };
  }
  case ACTION_FETCHED_UTXO: {
    return {
      ...state,
      UTXOS: action.payload,
    };
  }
  case ACTION_CLEAR_STREAM_LINE: {
    return {
      ...state,
      consolidated: 0,
      times: 1,
      isFetching: false,
      isFetched: false,
      isPending: false,
      UTXOS: [],
    };
  }
  case ACTION_FETCHING_UTXO: {
    return {
      ...state,
      isFetchingUTXOS: action.payload
    };
  }
  default:
    return state;
  }
};

const persistConfig = {
  key: 'streamline',
  storage: AsyncStorage,
  whitelist: ['storage'],
  stateReconciler: autoMergeLevel2,
};

export default persistReducer(persistConfig, streamlineReducer);
