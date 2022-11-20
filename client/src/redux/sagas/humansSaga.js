/* eslint-disable import/prefer-default-export */
import {
  // eslint-disable-next-line no-unused-vars
  call, put, takeEvery, takeLatest, throttle, delay,
} from 'redux-saga/effects';
import axios from 'axios';
import { setAllHumans } from '../reducers/humansReducer';
import { setFilteredHumans } from '../reducers/filteredHumansReducer';

// get all animals from db
const fetchHumans = (id) => axios(`/api/humans/${id}/without`);

function* fetchAllHumansSagaWorker(action) {
  try {
    const res = yield call(fetchHumans, action.payload);
    // console.log(res.data);
    yield put(setAllHumans(res.data));
    yield put(setFilteredHumans(res.data));
  } catch (e) {
    yield put({ type: 'FETCH_ALL_HUMANS_FAILED', message: e.message });
  }
}

function* fetchAllHumansSagaWatcher() {
  yield takeEvery('FETCH_ALL_HUMANS', fetchAllHumansSagaWorker);
}

// добавление babysitter
const addBabysitter = (input) => axios.post('api/humans/new', input);

function* addBabysitterSagaWorker(action) {
  try {
    yield call(addBabysitter, action.payload);
    // console.log(res.data);
    // yield put(addOneBabysitter(res.data));
  } catch (e) {
    yield put({ type: 'ADD_TO_BABYSITTERS_FAILED', message: e.message });
  }
}

function* addBabysitterSagaWatcher() {
  yield takeEvery('ADD_TO_BABYSITTERS', addBabysitterSagaWorker);
}

export {
  fetchAllHumansSagaWatcher, addBabysitterSagaWatcher,
};
