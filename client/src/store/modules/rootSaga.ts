import { all, takeLatest } from 'redux-saga/effects';

import twitter from './twitter/sagas';
import sentiment from './sentiment/sagas';

export default function* rootSaga() {
  return yield all([twitter, sentiment]);
}
