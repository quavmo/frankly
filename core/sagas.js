import { takeLatest } from 'redux-saga';

function* createMessage({ payload }) {
  try {
    yield put({
      type: act.MESSAGE_CREATION_SUCCEEDED,
      payload: yield call(post, payload),
    });
  } catch (error) {
    yield put({
      type: act.MESSAGE_CREATION_FAILED,
      payload: { error, payload },
    });
  }
}


export function* messageSaga() {
  yield takeLatest('POST_MESSAGE', createMessage);
}
