import {all} from "redux-saga/effects";
import {combineReducers} from "redux";

import * as auth from "../app/modules/Auth/_redux/authRedux";
import {microServicesSlice} from "../app/modules/MicroServices/_redux/microServicesSlice";

export const rootReducer = combineReducers({
  auth: auth.reducer,
  microservices: microServicesSlice.reducer
});

export function* rootSaga() {
  yield all([auth.saga()]);
}
