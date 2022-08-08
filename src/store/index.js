import {configureStore } from "@reduxjs/toolkit";
import authReducer from './auth';
import movieReducer from './movieSlice';
import userReducer from  "../WishList/userSlice";
import userDataReducer from "../CRUD-Saga/userDataSlice";
import createSagaMiddleware from 'redux-saga'
import { rootSaga } from "../saga";

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
    reducer :{
        auth: authReducer,
        movies:movieReducer,
        userList:userReducer,
        userData:userDataReducer,
        // applyMiddleware(sagaMiddleware)
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false,}).concat(sagaMiddleware),
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware)
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    // middleware:()=>applyMiddleware(sagaMiddleware)
    // middleware:applyMiddleware(sagaMiddleware)
    // middleware: applyMiddleware((getDefaultMiddleware) => getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware))
})
sagaMiddleware.run(rootSaga)
export default store;