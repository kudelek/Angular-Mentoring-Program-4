import { createSelector } from "@ngrx/store";
import { AuthState } from "./auth.reducer";

export const selectAuth = (state: any) => state.auth;

export const isUserAuthorized = createSelector(
  selectAuth,
  (state: AuthState) => state.isAuthorized
)

export const getToken = createSelector(
  selectAuth,
  (state: AuthState) => state.token
);

export const getSpecificErrorMessage = createSelector(
  selectAuth,
  (state: AuthState) => state.errorMessage
)
