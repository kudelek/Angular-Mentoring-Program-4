import { createSelector } from "@ngrx/store";
import { User } from "../../models";

export const selectUser = (state: any) => state.user;

export const getName = createSelector(
  selectUser,
  (state: User) => state.name
);

export const isAdmin = createSelector(
  selectUser,
  (state: User) => state.isAdmin
)
