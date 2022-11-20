/* eslint-disable import/prefer-default-export */
import {
  // eslint-disable-next-line no-unused-vars
  call, put, takeEvery, takeLatest, throttle, delay,
} from 'redux-saga/effects';
import axios from 'axios';
import { setAllAnimals, updateAnimal } from '../reducers/animalsReducer';
import { setFilteredAnimals } from '../reducers/filteredAnimalsReducer';

// get all animals from db
const fetchAnimals = (id) => axios(`/api/animals/${id}/without`);

function* fetchAllAnimalsSagaWorker(action) {
  try {
    const res = yield call(fetchAnimals, action.payload);
    // console.log(res.data);
    yield put(setAllAnimals(res.data));
    yield put(setFilteredAnimals(res.data));
  } catch (e) {
    yield put({ type: 'FETCH_ALL_ANIMALS_FAILED', message: e.message });
  }
}

// function* fetchAllAnimalsSagaWorker() {
//   try {
//     const res = yield fetchAnimals();
//     console.log(res.data);
//     yield put(setAllAnimals(res.data));
//     yield put(setFilteredAnimals(res.data));
//   } catch (e) {
//     yield put({ type: 'FETCH_ALL_ANIMALS_FAILED', message: e.message });
//   }
// }

function* fetchAllAnimalsSagaWatcher() {
  yield takeEvery('FETCH_ALL_ANIMALS', fetchAllAnimalsSagaWorker);
}

const editAnimal = ({ id, data }) => {
  axios.put(`api/animals/edit/${id}`, data);
  // axios.put('api/animals/edit/1', data);
  console.log(Object.fromEntries(data));
};

function* editOneAnimalsSagaWorker(action) {
  try {
    const res = yield call(editAnimal, action.payload);
    console.log(res.data);
    yield put(updateAnimal(res.data));
  } catch (e) {
    yield put({ type: 'ANIMALS_FAILED', message: e.message });
  }
}

function* editOneAnimalsSagaWatcher() {
  yield takeEvery('UPDATE_ANIMALS', editOneAnimalsSagaWorker);
}

export {
  fetchAllAnimalsSagaWatcher, editOneAnimalsSagaWatcher,
};
