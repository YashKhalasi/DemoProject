import { takeEvery, call, put } from "redux-saga/effects";
import { userAction } from "./userSlice";
import * as api from "../store/api";

export function* getData({ payload }) {
  try {
    const response = yield call(api.getUsers,payload);
    // if (response.success) {
      yield put(userAction.fetchSuccess({ data: response.data}));
    // }
  } catch (error) {
    yield put(userAction.fetchFailure({ error }));
  }
}

export default function* usersSaga() {
    yield takeEvery(userAction.getData, getData);
}