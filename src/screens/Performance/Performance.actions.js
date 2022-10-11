import { currentScreenSelector } from '@screens/Navigation';
import {
  ACTION_CLEAR_HISTORY,
  ACTION_LOG_EVENT,
  ACTION_TOGGLE,
} from './Performance.constant';
import { performanceSelector } from './Performance.selector';

export const actionLogEvent = (data) => async (dispatch, getState) => {
  try {
    const state = getState();
    const screen = currentScreenSelector(state);
    const performance = performanceSelector(state);
    const { desc, restart } = data;
    const time = restart ? new Date().getTime() : performance?.time;
    const currentTime = new Date().getTime();
    const lockTime = ((currentTime - time) / 1000).toFixed(2);
    await dispatch({
      type: ACTION_LOG_EVENT,
      payload: {
        title: `Screen: ${screen}`,
        desc: desc,
        time: `Time: ${lockTime}s`,
        timestamp: currentTime,
        restart: !!restart,
      },
    });
  } catch (e) {
    console.log(e);
  }
};

export const actionToggle = () => ({ type: ACTION_TOGGLE });
export const actionClearPerformance = () => ({ type: ACTION_CLEAR_HISTORY });
