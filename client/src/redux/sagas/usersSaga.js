import {
  // eslint-disable-next-line no-unused-vars
  call, put, takeEvery, takeLatest, throttle, delay,
} from 'redux-saga/effects';
import axios from 'axios';
import { setAuthUser, logoutUser, updateUser } from '../reducers/userReducer';

// check user
// const checkAuth = () => axios.post('/user/check');
const checkAuth = () => axios.post('/api/user/check');

function* checkUserSagaWorker() {
  try {
    const res = yield checkAuth();
    yield put(setAuthUser({ ...res.data, loading: false }));
  } catch (e) {
    yield put(setAuthUser({ loading: false }));
    yield put({ type: 'USER_FETCH_FAILED', message: e.message });
  }
}

function* checkUserSagaWatcher() {
  yield takeEvery('CHECK_USER', checkUserSagaWorker);
}

// login user
const loginUser = (input) => axios.post('/api/user/login', input);

function* loginUserSagaWorker(action) {
  try {
    const res = yield call(loginUser, action.payload);
    // yield put(setAuthUser(res.data));
    yield put(setAuthUser({ ...res.data, loading: false }));
  } catch (e) {
    yield put(setAuthUser({ loading: false }));
    yield put({ type: 'USER_FETCH_FAILED', message: e.message });
  }
}

function* loginUserSagaWatcher() {
  yield takeEvery('LOGIN_USER', loginUserSagaWorker);
}

// signup user
// const signupUser = (input) => axios.post('/user/signup', input);
const signupUser = (input) => axios.post('/api/user/signup', input);

function* signupUserSagaWorker(action) {
  try {
    const res = yield call(signupUser, action.payload);
    // yield put(setAuthUser(res.data));
    yield put(setAuthUser({ ...res.data, loading: false }));
  } catch (e) {
    yield put(setAuthUser({ loading: false }));
    yield put({ type: 'USER_FETCH_FAILED', message: e.message });
  }
}

function* signupUserSagaWatcher() {
  yield takeEvery('SIGNUP_USER', signupUserSagaWorker);
}

// logout user
const logoutUserAsync = () => axios('/api/user/logout');

function* logoutUserSagaWorker() {
  try {
    yield logoutUserAsync();
    yield put(logoutUser());
  } catch (e) {
    yield put({ type: 'USER_FETCH_FAILED', message: e.message });
  }
}

function* logoutUserSagaWatcher() {
  yield takeEvery('LOGOUT_USER', logoutUserSagaWorker);
}

// signup user
// const signupUser = (input) => axios.post('/user/signup', input);
const changeRoleInDB = (input) => axios.patch('/api/user/roleChange', input);

function* changeRoleSagaWorker(action) {
  try {
    const res = yield call(changeRoleInDB, action.payload);
    yield put(setAuthUser({ ...res.data, loading: false }));
  } catch (e) {
    yield put({ type: 'CHANGE_ROLE_FAILED', message: e.message });
  }
}

function* changeRoleSagaWatcher() {
  yield takeEvery('CHANGE_ROLE', changeRoleSagaWorker);
}
const editUser = (data) => axios.patch('usery/profile/edit', data);

function* editUserSagaWorker(action) {
  try {
    const res = yield call(editUser, action.payload);
    console.log(res.data);
    yield put(updateUser(res.data));
  } catch (e) {
    yield put({ type: 'USERS_FAILED', message: e.message });
  }
}

function* editUserSagaWatcher() {
  yield takeEvery('EDIT_USER', editUserSagaWorker);
}

export {
  checkUserSagaWatcher, loginUserSagaWatcher, signupUserSagaWatcher, logoutUserSagaWatcher, changeRoleSagaWatcher, editUserSagaWatcher,
};
