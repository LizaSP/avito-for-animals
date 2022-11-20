/* eslint-disable import/prefer-default-export */
import { all } from 'redux-saga/effects';
import { fetchAllAnimalsSagaWatcher, editOneAnimalsSagaWatcher } from './animalsSaga';
import { addOwnerAnimalSagaWatcher, deleteOwnerAnimalSagaWatcher, fetchOwnerAnimalsSagaWatcher } from './ownerAnimalsSaga';
import { createFavouritesSagaWatcher, fetchFavouritesSagaWatcher, removeFromFavouritesSagaWatcher } from './favouritesSaga';
import {
  createRequestSagaWatcher, fetchOwnerRequestsSagaWatcher, fetchUserRequestsSagaWatcher, removeFromRequestsSagaWatcher,
} from './requestsSaga';
import {
  checkUserSagaWatcher, loginUserSagaWatcher, signupUserSagaWatcher, logoutUserSagaWatcher, changeRoleSagaWatcher, editUserSagaWatcher,
} from './usersSaga';
import { getOneAnimalsSagaWatcher, addAnimalsSagaWatcher } from './animalOneSaga';
import { createHumanFavouritesSagaWatcher, fetchHumanFavouritesSagaWatcher, removeFromFavouritesHumansSagaWatcher } from './humanFavouritesSaga';
import { createHumanRequestSagaWatcher, fetchHumanRequestsSagaWatcher, removeFromHumanRequestsSagaWatcher } from './humanRequestsSaga';
import { addBabysitterSagaWatcher, fetchAllHumansSagaWatcher } from './humansSaga';
import { fetchHunterOffersSagaWatcher } from './hunterOffersSaga';
import { changeReplySagaWatcher, changeStatusSagaWatcher, getRequestSagaWatcher } from './oneRequestSaga';
import { changeOfferSagaWatcher, changeOfferStatusSagaWatcher, getOfferSagaWatcher } from './oneOfferSaga';

export function* rootSaga() {
  yield all([
    // user
    checkUserSagaWatcher(),
    loginUserSagaWatcher(),
    signupUserSagaWatcher(),
    logoutUserSagaWatcher(),
    changeRoleSagaWatcher(),
    editUserSagaWatcher(),
    // animals
    fetchAllAnimalsSagaWatcher(),
    fetchOwnerAnimalsSagaWatcher(),
    editOneAnimalsSagaWatcher(),
    addOwnerAnimalSagaWatcher(),
    deleteOwnerAnimalSagaWatcher(),
    // favourites - hunter
    createFavouritesSagaWatcher(),
    fetchFavouritesSagaWatcher(),
    removeFromFavouritesSagaWatcher(),
    // hunter requests
    fetchUserRequestsSagaWatcher(),
    createRequestSagaWatcher(),
    removeFromRequestsSagaWatcher(),
    // owner requests
    fetchOwnerRequestsSagaWatcher(),
    // ani
    getOneAnimalsSagaWatcher(),
    addAnimalsSagaWatcher(),
    // owner search
    fetchHumanFavouritesSagaWatcher(),
    fetchHumanRequestsSagaWatcher(),
    fetchAllHumansSagaWatcher(),
    createHumanRequestSagaWatcher(),
    createHumanFavouritesSagaWatcher(),
    removeFromFavouritesHumansSagaWatcher(),
    fetchHunterOffersSagaWatcher(),
    removeFromHumanRequestsSagaWatcher(),
    // one request page
    changeStatusSagaWatcher(),
    changeReplySagaWatcher(),
    getRequestSagaWatcher(),
    changeOfferStatusSagaWatcher(),
    changeOfferSagaWatcher(),
    getOfferSagaWatcher(),
    // babusitters
    addBabysitterSagaWatcher(),
  ]);
}
