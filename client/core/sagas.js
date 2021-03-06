import { reduce, times } from 'ramda';
import { random, image, internet, company } from 'faker';
import { takeLatest } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import Promise from 'bluebird';

const post = ({content}) => new Promise(resolve => resolve({content}));
function* createMessage({ payload }) {
  // try {
    yield put({
      type: "TOGGLE_COMPOSITION",
      payload: yield call(post, payload),
    });
  // } catch (error) {
  //   yield put({
  //     type: "MESSAGE_CREATION_FAILED",
  //     payload: { error, payload },
  //   });
  // }
}

export function* messageSaga() {
  yield takeLatest('SUBMIT_COMPOSITION', createMessage);
}

const generateStory = () => ({
  author: {
    image: image.avatar(),
    handle: internet.userName()
  },
  title: company.catchPhrase(),
});
const generateStories = () => times(generateStory, 12);

const get = frank => new Promise(resolve => resolve({
  ...frank,
  stories: generateStories()
}));

function* fetchFrank({ payload }) {
  // try {
    yield put({
      type: "FRANK_FETCH_SUCCESS",
      payload: yield call(get, payload),
    });
  // } catch (error) {
  //   yield put({
  //     type: "FRANK_FETCH_FAILURE",
  //     payload: { error, payload },
  //   });
  // }
}

export function* frankSaga() {
  yield takeLatest('PICK_FRANK', fetchFrank);
}
