/* eslint-disable import/prefer-default-export */
import {
  // eslint-disable-next-line no-unused-vars
  call, put, takeEvery, takeLatest, throttle, delay,
} from 'redux-saga/effects';
import axios from 'axios';
import { deleteFromRequestsById, setUserRequests } from '../reducers/requestsReducer';
import { setOwnerRequests } from '../reducers/ownerRequestsReducer';

// get all hunter requests from db
const fetchRequests = (id) => axios(`/api/requests/${id}`);

function* fetchUserRequestsSagaWorker(action) {
  try {
    const res = yield call(fetchRequests, action.payload);
    // console.log(res.data);
    yield put(setUserRequests(res.data));
  } catch (e) {
    yield put({ type: 'FETCH_REQUESTS_FAILED', message: e.message });
  }
}

function* fetchUserRequestsSagaWatcher() {
  yield takeEvery('FETCH_USER_REQUESTS', fetchUserRequestsSagaWorker);
}

// создание заявки
const createRequest = (input) => axios.post('/api/requests/new', input);

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

function* createRequestSagaWatcher() {
  yield takeEvery('CREATE_REQUEST', createRequestSagaWorker);
}

// удалить заявку
const removeFromRequestsWithAxios = (input) => axios.post('/api/requests/delete', input);

function* removeFromRequestsSagaWorker(action) {
  try {
    const res = yield call(removeFromRequestsWithAxios, action.payload);
    if (res.data === 'OK') {
      yield put(deleteFromRequestsById(action.payload.animal_id));
    }
  } catch (e) {
    yield put({ type: 'REMOVE_FROM_REQUESTS_FAILED', message: e.message });
  }
}

function* removeFromRequestsSagaWatcher() {
  yield takeEvery('REMOVE_FROM_REQUESTS', removeFromRequestsSagaWorker);
}

// get all owner requests from db
const fetchOwnnerRequests = (id) => axios(`/api/requests/${id.animal_id}/animals`);

function* fetchOwnerRequestsSagaWorker(action) {
  try {
    const res = yield call(fetchOwnnerRequests, action.payload);
    // console.log(res.data);
    yield put(setOwnerRequests(res.data));
  } catch (e) {
    yield put({ type: 'FETCH_REQUESTS_BY_ANIMAL_FAILED', message: e.message });
  }
}

function* fetchOwnerRequestsSagaWatcher() {
  yield takeEvery('FETCH_REQUESTS_BY_ANIMAL', fetchOwnerRequestsSagaWorker);
}

export {
  fetchUserRequestsSagaWatcher, createRequestSagaWatcher, removeFromRequestsSagaWatcher, fetchOwnerRequestsSagaWatcher,
};
