/* eslint-disable import/prefer-default-export */
import {
  // eslint-disable-next-line no-unused-vars
  call, put, takeEvery, takeLatest, throttle, delay,
} from 'redux-saga/effects';
import axios from 'axios';
import { setAllHumanFavourites } from '../reducers/humanFavouritesReduser';

// get all animals from db
const fetchFavourites = (id) => axios(`/api/humans/favourites/${id}`);

function* fetchFavouritesSagaWorker(action) {
  try {
    // console.log(action.payload);
    const res = yield call(fetchFavourites, action.payload);
    // console.log(res.data);
    yield put(setAllHumanFavourites(res.data));
  } catch (e) {
    yield put({ type: 'FETCH_FAVOURITES_FAILED', message: e.message });
  }
}

function* fetchHumanFavouritesSagaWatcher() {
  yield takeEvery('FETCH_FAVOURITES_HUMANS', fetchFavouritesSagaWorker);
}

// добавить хантера в избранное
const addFavouritesWithAxios = (input) => axios.post('/api/humans/favourites/new', input);

function* addFavouritesSagaWorker(action) {
  try {
    yield call(addFavouritesWithAxios, action.payload);
  } catch (e) {
    yield put({ type: 'ADD_TO_FAVOURITES_HUMANS_FAILED', message: e.message });
  }
}

function* createHumanFavouritesSagaWatcher() {
  yield takeEvery('ADD_TO_FAVOURITES_HUMANS', addFavouritesSagaWorker);
}

// убрать из избранного
const removeFromFavouritesWithAxios = (input) => axios.post('/api/humans/favourites/delete', input);

function* removeFromFavouritesSagaWorker(action) {
  try {
    yield call(removeFromFavouritesWithAxios, action.payload);
  } catch (e) {
    yield put({ type: 'REMOVE_FROM_FAVOURITES_HUMANS_FAILED', message: e.message });
  }
}

function* removeFromFavouritesHumansSagaWatcher() {
  yield takeEvery('REMOVE_FROM_FAVOURITES_HUMANS', removeFromFavouritesSagaWorker);
}

export {
  fetchHumanFavouritesSagaWatcher, createHumanFavouritesSagaWatcher, removeFromFavouritesHumansSagaWatcher,
};
