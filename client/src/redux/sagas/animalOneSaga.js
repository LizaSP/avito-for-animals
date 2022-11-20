/* eslint-disable import/prefer-default-export */
import {
  // eslint-disable-next-line no-unused-vars
  call, put, takeEvery, takeLatest, throttle, delay,
} from 'redux-saga/effects';
import axios from 'axios';
import { getOneAnimal, addAnimal } from '../reducers/animalOneReducer';

const fetchOneAnimal = (id) => axios(`api/animals/one/${id}`);

function* getOneAnimalsSagaWorker(action) {
  try {
    const res = yield call(fetchOneAnimal, action.payload);
    yield put(getOneAnimal(res.data));
  } catch (e) {
    yield put({ type: 'ANIMALS_FAILED', message: e.message });
  }
}

function* getOneAnimalsSagaWatcher() {
  yield takeEvery('GET_ANIMALS', getOneAnimalsSagaWorker);
}
const addnewAnimal = (input) => axios.post('/api/animal/addAnimal', input);

function* addAnimalsSagaWorker(action) {
  try {
    const res = yield call(addnewAnimal, action.payload);
    yield put(addAnimal(...res.data));
  } catch (e) {
    yield put({ type: 'ANIMALS_FAILED', message: e.message });
  }
}

function* addAnimalsSagaWatcher() {
  yield takeEvery('ADD_ANIMAL', addAnimalsSagaWorker);
}
export { getOneAnimalsSagaWatcher, addAnimalsSagaWatcher };
