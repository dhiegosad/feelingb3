import { all, takeLatest } from 'redux-saga/effects';

import twitter from './twitter/sagas';

export default function* rootSaga() {
  return yield all([twitter]);
}
