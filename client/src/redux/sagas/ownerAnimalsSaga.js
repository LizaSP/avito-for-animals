/* eslint-disable import/prefer-default-export */
import {
  // eslint-disable-next-line no-unused-vars
  call, put, takeEvery, takeLatest, throttle, delay,
} from 'redux-saga/effects';
import axios from 'axios';
import { setOwnerAnimals, addOwnerAnimal, deleteById } from '../reducers/ownerAnimalsReducer';
import { setOwnerRequests } from '../reducers/ownerRequestsReducer';

// все животные владельца
const fetchOwnerAnimals = (userId) => axios(`/api/animals/${userId}`);

function* fetchOwnerAnimalsSagaWorker(action) {
  try {
    const res = yield call(fetchOwnerAnimals, action.payload);
    console.log(res.data);
    yield put(setOwnerAnimals(res.data.ownerAnimals));
    yield put(setOwnerRequests(res.data.requests));
  } catch (e) {
    yield put({ type: 'FETCH_OWNER_ANIMALS_FAILED', message: e.message });
  }
}

function* fetchOwnerAnimalsSagaWatcher() {
  yield takeEvery('FETCH_OWNER_ANIMALS', fetchOwnerAnimalsSagaWorker);
}

// добавление животного владельцем
const addOwnerAnimalWithAxios = (input) => axios.post('/api/animals/new', input);

function* addOwnerAnimalSagaWorker(action) {
  try {
    const res = yield call(addOwnerAnimalWithAxios, action.payload);
    yield put(addOwnerAnimal(res.data));
  } catch (e) {
    yield put({ type: 'ADD_OWNER_ANIMAL_FAILED', message: e.message });
  }
}

function* addOwnerAnimalSagaWatcher() {
  yield takeEvery('ADD_ANIMALS', addOwnerAnimalSagaWorker);
}

// добавление животного владельцем
const deleteOwnerAnimalWithAxios = (input) => axios.post('/api/animals/delete', input);

function* deleteOwnerAnimalSagaWorker(action) {
  try {
    const res = yield call(deleteOwnerAnimalWithAxios, action.payload);
    if (res.data === 'OK') {
      yield put(deleteById(action.payload.animal_id));
    }
  } catch (e) {
    yield put({ type: 'DELETE_OWNER_ANIMAL_BY_ID_FAILED', message: e.message });
  }
}

function* deleteOwnerAnimalSagaWatcher() {
  yield takeEvery('DELETE_OWNER_ANIMAL_BY_ID', deleteOwnerAnimalSagaWorker);
}

export {
  fetchOwnerAnimalsSagaWatcher, addOwnerAnimalSagaWatcher, deleteOwnerAnimalSagaWatcher,
};
