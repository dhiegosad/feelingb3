import api from '../../../services/api';
import { loadSentimentsSuccess } from './action';
import { call, put, all, take, takeLatest } from 'redux-saga/effects';
import { SentimentsTypes } from './types';

export function* callapi() {
  const response = yield call(api.get, `/sentiments`);
  yield put(loadSentimentsSuccess(response.data));
}

export default all([
  takeLatest(SentimentsTypes.LOAD_SENTIMENTS_REQUEST, callapi),
]);
