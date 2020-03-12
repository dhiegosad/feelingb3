import api from '../../../services/api';
import { loadSuccess } from './action';
import { call, put, all, take, takeLatest } from 'redux-saga/effects';

export function* callapi() {
  const response = yield call(api.get, '');
  console.log('saga', response);

  yield put(loadSuccess(response.data));
}

export default all([takeLatest('@home/LOAD_REQUEST', callapi)]);
