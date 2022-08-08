import { all } from "redux-saga/effects";
// import  usersSaga  from "../WishList/userSagaFile";
import usersDataSaga  from "../CRUD-Saga/userDataSagaFile"; 

export function* rootSaga() {
    yield all([
        // usersSaga(),
        usersDataSaga()
    ])
}