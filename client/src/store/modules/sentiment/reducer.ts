import { Reducer } from 'redux';
import produce from 'immer';
import {
  SentimentState,
  SentimentsTypes,
  SentimentsActionTypes,
} from './types';

export const INITIAL_STATE: SentimentState = {
  data: [],
  loading: false,
};

const sentiment: Reducer<SentimentState, SentimentsActionTypes> = (
  state = INITIAL_STATE,
  action: SentimentsActionTypes
) => {
  return produce(state, draft => {
    switch (action.type) {
      case SentimentsTypes.LOAD_SENTIMENTS_REQUEST: {
        draft.loading = true;
        break;
      }
      case SentimentsTypes.LOAD_SENTIMENTS_SUCCESS: {
        draft.data = action.payload.data;
        draft.loading = false;
        break;
      }
      default:
    }
  });
};

export default sentiment;
