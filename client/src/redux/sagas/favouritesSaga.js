/* eslint-disable import/prefer-default-export */
import {
  // eslint-disable-next-line no-unused-vars
  call, put, takeEvery, takeLatest, throttle, delay,
} from 'redux-saga/effects';
import axios from 'axios';
import { setAllFavourites } from '../reducers/favouritesReducer';

// get all animals from db
const fetchFavourites = (id) => axios(`/api/favourites/${id}`);

function* fetchFavouritesSagaWorker(action) {
  try {
    console.log(action.payload);
    const res = yield call(fetchFavourites, action.payload);
    console.log(res.data);
    yield put(setAllFavourites(res.data));
  } catch (e) {
    yield put({ type: 'FETCH_FAVOURITES_FAILED', message: e.message });
  }
}

function* fetchFavouritesSagaWatcher() {
  yield takeEvery('FETCH_USER_FAVOURITES', fetchFavouritesSagaWorker);
}

// добавить животное в избранное
const addFavouritesWithAxios = (input) => axios.post('/api/favourites/new', input);

function* addFavouritesSagaWorker(action) {
  try {
    yield call(addFavouritesWithAxios, action.payload);
    // yield put(addFavourites(res.data));
  } catch (e) {
    yield put({ type: 'FETCH_FAVOURITES_FAILED', message: e.message });
  }
}

function* createFavouritesSagaWatcher() {
  yield takeEvery('ADD_TO_FAVOURITES', addFavouritesSagaWorker);
}

// убрать животное из избранного
const removeFromFavouritesWithAxios = (input) => axios.post('/api/favourites/delete', input);

function* removeFromFavouritesSagaWorker(action) {
  try {
    yield call(removeFromFavouritesWithAxios, action.payload);
  } catch (e) {
    yield put({ type: 'REMOVE_FAVOURITES_FAILED', message: e.message });
  }
}

function* removeFromFavouritesSagaWatcher() {
  yield takeEvery('REMOVE_FROM_FAVOURITES', removeFromFavouritesSagaWorker);
}

export {
  fetchFavouritesSagaWatcher, createFavouritesSagaWatcher, removeFromFavouritesSagaWatcher,
};
