import { persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import autoMergeLevel1 from 'redux-persist/es/stateReconciler/autoMergeLevel1';
import {
  ACTION_FETCHING,
  ACTION_FETCHED,
  ACTION_FETCH_FAIL,
} from './Home.constant';

const initialState = {
  isFetching: false,
  isFetched: false,
  configs: {
    categories: [],
    headerTitle: null,
  },
  defaultConfigs: null,
  appVersion: {},
};

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
  case ACTION_FETCHING: {
    return {
      ...state,
      isFetching: true,
    };
  }
  case ACTION_FETCHED: {
    const { configs, appVersion } = action.payload;
    return {
      ...state,
      isFetching: false,
      isFetched: true,
      configs: { ...configs },
      defaultConfigs: { ...configs },
      appVersion: { ...appVersion },
    };
  }
  case ACTION_FETCH_FAIL: {
    return {
      ...state,
      isFetched: false,
      isFetching: false,
    };
  }
  default:
    return state;
  }
};

const persistConfig = {
  key: 'home',
  storage: AsyncStorage,
  whitelist: ['defaultConfigs'],
  stateReconciler: autoMergeLevel1,
};

export default persistReducer(persistConfig, homeReducer);
