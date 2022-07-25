import { createReducer, on } from "@ngrx/store";
import { User } from "../../models";
import { requestCurrentUserFail, requestCurrentUserSuccess } from "./user.actions";

export const userFeatureKey = "user"

const initialState: User = {
  isAdmin: false,
  name: ''
}

const reducer = createReducer(
  initialState,
  on(requestCurrentUserSuccess, (state, {user}) => ({...user})),
  on(requestCurrentUserFail, (state) => ({isAdmin: false, name: ''}) ),
);

export const userReducer = (state: User, action: any): User => reducer(state, action);
