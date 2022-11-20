/* eslint-disable camelcase */
/* eslint-disable import/prefer-default-export */
import {
  // eslint-disable-next-line no-unused-vars
  call, put, takeEvery, takeLatest, throttle, delay,
} from 'redux-saga/effects';
import axios from 'axios';
import { changeOfferStatus, setOffer } from '../reducers/oneOfferRequcer';

const changeStatusAxios = ({ status, id }) => axios.patch(`/api/humans/offers/${id}/${status}`);

function* fetchUserRequestsSagaWorker(action) {
  try {
    const res = yield call(changeStatusAxios, action.payload);
    // console.log(res.data);
    if (res.data === 'OK') {
      yield put(changeOfferStatus(action.payload.status));
    }
  } catch (e) {
    yield put({ type: 'OFFER_CHANGE_STATUS_FETCH_FAILED', message: e.message });
  }
}

function* changeOfferStatusSagaWatcher() {
  yield takeEvery('OFFER_CHANGE_STATUS_FETCH', fetchUserRequestsSagaWorker);
}

const changeReplyAxios = ({ hunter_reply, id }) => axios.patch(`/api/humans/offers/${id}/${hunter_reply}/hunter_reply`);

function* fetchReplySagaWorker(action) {
  try {
    const res = yield call(changeReplyAxios, action.payload);
    // console.log(res.data);
    if (res.data === 'OK') {
      yield put(changeOfferStatus(action.payload.hunter_reply));
    }
  } catch (e) {
    yield put({ type: 'OFFER_CHANGE_REPLY_FETCH_FAILED', message: e.message });
  }
}

function* changeOfferSagaWatcher() {
  yield takeEvery('OFFER_CHANGE_REPLY_FETCH', fetchReplySagaWorker);
}

const getOffer = (id) => axios(`/api/humans/offers/one/${id}`);

function* getOfferSagaWorker(action) {
  try {
    const res = yield call(getOffer, action.payload);
    yield put(setOffer(res.data));
  } catch (e) {
    yield put({ type: 'GET_OFFER_FAILED', message: e.message });
  }
}

function* getOfferSagaWatcher() {
  yield takeEvery('GET_OFFER', getOfferSagaWorker);
}

export {
  changeOfferStatusSagaWatcher, changeOfferSagaWatcher, getOfferSagaWatcher,
};
