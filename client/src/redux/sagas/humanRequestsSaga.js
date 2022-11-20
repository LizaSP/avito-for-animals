/* eslint-disable import/prefer-default-export */
import {
  // eslint-disable-next-line no-unused-vars
  call, put, takeEvery, takeLatest, throttle, delay,
} from 'redux-saga/effects';
import axios from 'axios';
import { deleteFromHumanRequestsById, setHumanRequests } from '../reducers/humanRequestsReducer';

// get all hunter requests from db
const fetchRequests = (id) => axios(`/api/humans/requests/${id}`);

function* fetchUserRequestsSagaWorker(action) {
  try {
    const res = yield call(fetchRequests, action.payload);
    // console.log(res.data);
    yield put(setHumanRequests(res.data));
  } catch (e) {
    yield put({ type: 'FETCH_REQUESTS_FAILED', message: e.message });
  }
}

function* fetchHumanRequestsSagaWatcher() {
  yield takeEvery('FETCH_REQUESTS_FOR_HUMANS', fetchUserRequestsSagaWorker);
}

// создание заявки
const createRequest = (input) => axios.post('/api/humans/requests/new', input);

function* createRequestSagaWorker(action) {
  try {
    // console.log(123456);
    yield call(createRequest, action.payload);
    // console.log(res.data);
    // yield put(addRequest(res.data));
  } catch (e) {
    yield put({ type: 'FETCH_REQUESTS_FAILED', message: e.message });
  }
}

function* createHumanRequestSagaWatcher() {
  yield takeEvery('CREATE_REQUEST_FOR_HUMAN', createRequestSagaWorker);
}

// удалить заявку
const removeFromRequestsWithAxios = (input) => axios.post('/api/humans/requests/delete', input);

function* removeFromHumanRequestsSagaWorker(action) {
  try {
    const res = yield call(removeFromRequestsWithAxios, action.payload);
    if (res.data === 'OK') {
      yield put(deleteFromHumanRequestsById(action.payload.id));
    }
  } catch (e) {
    yield put({ type: 'REMOVE_FROM_REQUESTS_FAILED', message: e.message });
  }
}

function* removeFromHumanRequestsSagaWatcher() {
  yield takeEvery('REMOVE_FROM_HUMAN_REQUESTS', removeFromHumanRequestsSagaWorker);
}

// // get all owner requests from db
// const fetchOwnnerRequests = (id) => axios(`/api/requests/${id.animal_id}/animals`);

// function* fetchOwnerRequestsSagaWorker(action) {
//   try {
//     const res = yield call(fetchOwnnerRequests, action.payload);
//     // console.log(res.data);
//     yield put(setOwnerRequests(res.data));
//   } catch (e) {
//     yield put({ type: 'FETCH_REQUESTS_BY_ANIMAL_FAILED', message: e.message });
//   }
// }

// function* fetchOwnerRequestsSagaWatcher() {
//   yield takeEvery('FETCH_REQUESTS_BY_ANIMAL', fetchOwnerRequestsSagaWorker);
// }

export {
  fetchHumanRequestsSagaWatcher, createHumanRequestSagaWatcher, removeFromHumanRequestsSagaWatcher,
};
