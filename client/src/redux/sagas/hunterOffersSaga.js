/* eslint-disable import/prefer-default-export */
import {
  // eslint-disable-next-line no-unused-vars
  call, put, takeEvery, takeLatest, throttle, delay,
} from 'redux-saga/effects';
import axios from 'axios';
import { setHunterOffersRequests } from '../reducers/hunterOffersReducer';

// все офферы хантера
const fetchOwnerOffers = (userId) => axios(`/api/humans/offers/${userId}`);

function* fetchOffersSagaWorker(action) {
  try {
    const res = yield call(fetchOwnerOffers, action.payload);
    console.log(res.data);
    yield put(setHunterOffersRequests(res.data));
  } catch (e) {
    yield put({ type: 'FETCH_OWNER_ANIMALS_FAILED', message: e.message });
  }
}

function* fetchHunterOffersSagaWatcher() {
  yield takeEvery('FETCH_OFFERS', fetchOffersSagaWorker);
}

export {
  fetchHunterOffersSagaWatcher,
};
