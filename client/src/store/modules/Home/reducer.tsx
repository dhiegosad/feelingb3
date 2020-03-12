import { Reducer } from 'redux';
import produce from 'immer';

const INITIAL_STATE = { loading: false, data: [] };

const home: Reducer = (state = INITIAL_STATE, action) => {
  return produce((state, draft: any) => {
    switch (action.type) {
      case '@home/LOAD_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@home/LOAD_SUCCESS': {
        draft.loading = false;
        draft.data = action.payload.data;
        break;
      }
      default:
    }
  });
};

export default home;
