import { ActionReducerMap } from "@ngrx/store";
import { authReducer, AuthState } from "../auth/store/auth.reducer";
import { User } from "../models";
import { UserEffects } from "../user/store/user.effects";
import { userReducer } from "../user/store/user.reducer";

export interface Store {
  user: User,
  auth: AuthState,
}

export const reducers: ActionReducerMap<Store> = {
  user: userReducer,
  auth: authReducer
};

export const effects = [UserEffects];
