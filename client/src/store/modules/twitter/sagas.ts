import api from '../../../services/api';
import { loadTweetsSuccess } from './action';
import { call, put, all, take, takeLatest } from 'redux-saga/effects';
import { TwitterTypes } from './types';

export function* callapi({ payload }: any) {
  const { subject } = payload;

  const response = yield call(api.get, `/search`, {
    params: {
      key: subject,
    },
  });

  yield put(loadTweetsSuccess(response.data));
}

export default all([takeLatest(TwitterTypes.LOAD_TWEETS_REQUEST, callapi)]);
