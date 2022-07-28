import { createReducer, on } from "@ngrx/store";
import { User } from "../../models";
import { requestCurrentUserFail, requestCurrentUserSuccess } from "./user.actions";

export const userFeatureKey = "user"

const initialState: User = {
  isAdmin: false,
  name: ''
}

export const userReducer = createReducer(
  initialState,
  on(requestCurrentUserSuccess, (state, {user}): User => {
    return {
      ...state,
      ...user
    }}),
  on(requestCurrentUserFail, (state) => {
    return {
      ...state,
      isAdmin: false,
      name: ''
    }
  }),
);
