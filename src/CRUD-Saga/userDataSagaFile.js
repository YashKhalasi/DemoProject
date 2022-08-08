import { takeEvery, call, put } from "redux-saga/effects";
import { userDataAction } from "./userDataSlice";
import * as api from "../store/api";

export function* getData({ payload }) {
  try {
    console.log("getData called...")
    const response = yield call(api.getUsers,payload);
    // if (response.success) {
      yield put(userDataAction.fetchSuccess({ data: response.data}));
      
    // }
  } catch (error) {
    yield put(userDataAction.fetchFailure({ error }));
  }
}

export function* addNewUser({ payload }) {
  try {
    localStorage.setItem('isLoggedIn',true );
    console.log("addNewUser..",payload)
    const response = yield call(api.addnewUser,payload);
    // if (response.success) {
      // yield put(userDataAction.fetchSuccess({ data: response.data}));
    // }
  } catch (error) {
    yield put(userDataAction.fetchFailure({ error }));
  }
}

export function* deleteUser({ payload }) {
  try {
    localStorage.setItem('isLoggedIn',true );
    console.log("delete user..",payload.userId)
    const response = yield call(api.deleteUser,payload.userId);
    // if (response.success) {
      // yield put(userDataAction.fetchSuccess({ data: response.data}));
    // }
  } catch (error) {
    yield put(userDataAction.fetchFailure({ error }));
  }
}

export function* updateUser({ payload }) {
  try {
    localStorage.setItem('isLoggedIn',true );
    console.log("Update user..",payload)
    const response = yield call(api.updateUser,payload.userDataList);
    
    // if (response.success) {
      // yield put(userDataAction.fetchSuccess({ data: response.data}));
    // }
  } catch (error) {
    yield put(userDataAction.fetchFailure({ error }));
  }
}

export default function* usersDataSaga() {
    yield takeEvery(userDataAction.getUserData, getData);
    yield takeEvery(userDataAction.addUser, addNewUser);
    yield takeEvery(userDataAction.removeuser, deleteUser);
    yield takeEvery(userDataAction.editUser, updateUser);
}