/* eslint-disable camelcase */
/* eslint-disable import/prefer-default-export */
import {
  // eslint-disable-next-line no-unused-vars
  call, put, takeEvery, takeLatest, throttle, delay,
} from 'redux-saga/effects';
import axios from 'axios';
import { changeReplyStatus, changeStatus, setRequest } from '../reducers/oneRequestRequcer';

const changeStatusAxios = ({ status, id }) => axios.patch(`/api/requests/${id}/${status}`);

function* fetchUserRequestsSagaWorker(action) {
  try {
    const res = yield call(changeStatusAxios, action.payload);
    // console.log(res.data);
    if (res.data === 'OK') {
      yield put(changeStatus(action.payload.status));
    }
  } catch (e) {
    yield put({ type: 'CHANGE_STATUS_FETCH_FAILED', message: e.message });
  }
}

function* changeStatusSagaWatcher() {
  yield takeEvery('CHANGE_STATUS_FETCH', fetchUserRequestsSagaWorker);
}

const changeReplyAxios = ({ hunter_reply, id }) => axios.patch(`/api/requests/${id}/${hunter_reply}/hunter_reply`);

function* fetchReplySagaWorker(action) {
  try {
    const res = yield call(changeReplyAxios, action.payload);
    // console.log(res.data);
    if (res.data === 'OK') {
      yield put(changeReplyStatus(action.payload.hunter_reply));
    }
  } catch (e) {
    yield put({ type: 'CHANGE_REPLY_FETCH_FAILED', message: e.message });
  }
}

function* changeReplySagaWatcher() {
  yield takeEvery('CHANGE_REPLY_FETCH', fetchReplySagaWorker);
}

// удалить заявку
const getRequest = (id) => axios(`/api/requests/one/${id}`);

function* getRequestSagaWorker(action) {
  try {
    const res = yield call(getRequest, action.payload);
    yield put(setRequest(res.data));
  } catch (e) {
    yield put({ type: 'GET_REQUEST_FAILED', message: e.message });
  }
}

function* getRequestSagaWatcher() {
  yield takeEvery('GET_REQUEST', getRequestSagaWorker);
}

export {
  changeStatusSagaWatcher, changeReplySagaWatcher, getRequestSagaWatcher,
};
