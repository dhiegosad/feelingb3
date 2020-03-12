import { all, takeLatest } from 'redux-saga/effects';

import Home from './Home/sagas';

export default function* rootSaga() {
  return yield all([Home]);
}
