import { Reducer } from 'redux';
import produce from 'immer';
import { TwitterState, TwitterActionTypes, TwitterTypes } from './types';

export const INITIAL_STATE: TwitterState = {
  data: { statuses: [] },
};

const twitter: Reducer<TwitterState, TwitterActionTypes> = (
  state = INITIAL_STATE,
  action: TwitterActionTypes
) => {
  return produce(state, draft => {
    switch (action.type) {
      case TwitterTypes.LOAD_TWEETS_REQUEST: {
        break;
      }
      case TwitterTypes.LOAD_TWEETS_SUCCESS: {
        draft.data = action.payload.data;
        break;
      }
      default:
    }
  });
};

export default twitter;
