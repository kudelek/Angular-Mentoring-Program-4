import { createReducer, on } from "@ngrx/store";
import { requestLoginFail, requestLoginSuccess, requestRegisterFail } from "./auth.actions";


export const authFeatureKey = "auth";

export interface AuthState {
  isAuthorized: boolean,
  token: string,
  errorMessage: string
}

const initialState: AuthState = {
  isAuthorized: false,
  token: '',
  errorMessage: ''
}

const reducer = createReducer(
  initialState,
  on(requestLoginSuccess, (state, {token}) => ({ ...state, isAuthorized: true, token: token })),
  on(requestLoginFail, (state, {errorMessage}) => ({ ...state, errorMessage: errorMessage})),
  on(requestRegisterFail, (state, {errorMessage}) => ({ ...state, errorMessage: errorMessage})),
);

export const authReducer = (state: AuthState | undefined, action: any): AuthState => reducer(state, action);
