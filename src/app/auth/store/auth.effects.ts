import { Injectable } from "@angular/core";
import { Actions, createEffect } from "@ngrx/effects";
import { AuthService } from "../services/auth.service";
import { requestLogin, requestLoginFail, requestLoginSuccess } from "./auth.actions";

@Injectable()
export class UserEffects {

  constructor(private actions$: Actions, private authService: AuthService) {}

  login$ = createEffect(
    () => this.actions$.pipe(
        ofType(requestLogin),
        mergeMap(() =>
        ///                           TO DO: FIX AUTH
          this.authService.authenticate('','').pipe(
            map(data => (requestLoginSuccess({token: data.result.token }))),
            catchError(error => of(requestLoginFail({ errorMessage: error }))))
          ),
    );
  );
}
