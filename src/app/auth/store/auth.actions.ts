import { createAction, props } from "@ngrx/store";

export const requestLogin = createAction('[Login Page] login');
export const requestLoginSuccess = createAction('[Login Page] loginSuccess', props<{token: string}>());
export const requestLoginFail = createAction('[Login Page] loginFail', props<{errorMessage: string}>());

export const requestRegister = createAction('[Registration Page] register');
export const requestRegisterSuccess = createAction('[Registration Page] registerSuccess');
export const requestRegisterFail = createAction('[Registration Page] registerFail', props<{errorMessage: string}>());

export const requestLogout = createAction('[Courses Page] logout');
export const requestLogoutSuccess = createAction('[Courses Page] logoutSuccess');
