import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { takeLatest } from "redux-saga/effects";

export const actionTypes = {
  Login: "[Login] Action",
  Logout: "[Logout] Action",
  UserRequested: "[Request User] Action",
  UserLoaded: "[Load User] Auth API"
};

const initialAuthState = {
  user: undefined
};

export const reducer = persistReducer(
  { storage, key: "nz-hackathon-auth", whitelist: ["user"] },
  (state = initialAuthState, action) => {
    switch (action.type) {
      case actionTypes.Login: {
        const { user } = action.payload;
        return { user };
      }

      case actionTypes.Logout: {
        // TODO: Change this code. Actions in reducer aren't allowed.
        return initialAuthState;
      }

      default:
        return state;
    }
  }
);

export const actions = {
  login: user => ({ type: actionTypes.Login, payload: { user } }),
  logout: () => ({ type: actionTypes.Logout })
};

export function* saga() {
  yield takeLatest(actionTypes.Login, function* loginSaga() {
  });

}
