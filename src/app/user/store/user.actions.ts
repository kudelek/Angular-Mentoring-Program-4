import { createAction, props } from "@ngrx/store";
import { User } from "../../models";

export const requestCurrentUser = createAction('[Courses] currentUser');
export const requestCurrentUserSuccess = createAction('[Courses] currentUserSuccess', props<{user: User}>());
export const requestCurrentUserFail = createAction('[Courses] currentUserFail');

