import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import animalOneReducer from './reducers/animalOneReducer';
import animalsReducer from './reducers/animalsReducer';
import favouritesReducer from './reducers/favouritesReducer';
import filteredAnimalsReducer from './reducers/filteredAnimalsReducer';
import filteredHumansReducer from './reducers/filteredHumansReducer';
import humanFavouritesReduser from './reducers/humanFavouritesReduser';
import humanRequestsReducer from './reducers/humanRequestsReducer';
import humansReducer from './reducers/humansReducer';
import hunterOffersReducer from './reducers/hunterOffersReducer';
import hunterRequestsReducer from './reducers/hunterRequestsReducer';
import modalCardReducer from './reducers/modalCardReducer';
import offerModalCardReducer from './reducers/offerModalCardReducer';
import oneOfferRequcer from './reducers/oneOfferRequcer';
import oneRequestRequcer from './reducers/oneRequestRequcer';
import ownerAnimalsReducer from './reducers/ownerAnimalsReducer';
import ownerRequestsReducer from './reducers/ownerRequestsReducer';
import requestsReducer from './reducers/requestsReducer';
import userReducer from './reducers/userReducer';

import { rootSaga } from './sagas/rootSaga';

const sagaMiddleware = createSagaMiddleware();

export default configureStore({
  reducer: {
    ani: animalOneReducer,
    user: userReducer,
    filteredAnimals: filteredAnimalsReducer,
    animals: animalsReducer,
    requests: requestsReducer,
    ownerAnimals: ownerAnimalsReducer,
    favourites: favouritesReducer,
    ownerRequests: ownerRequestsReducer,
    modal: modalCardReducer,
    offerModal: offerModalCardReducer,
    people: humansReducer,
    filteredPeople: filteredHumansReducer,
    humanFavourites: humanFavouritesReduser,
    humanRequests: humanRequestsReducer,
    hunterRequests: hunterRequestsReducer,
    hunterOffers: hunterOffersReducer,
    request: oneRequestRequcer,
    offer: oneOfferRequcer,
  },
  middleware: (mid) => [...mid({
    serializableCheck: false,
  }), sagaMiddleware],
});

sagaMiddleware.run(rootSaga);
