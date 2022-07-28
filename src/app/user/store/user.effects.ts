import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap, of, tap } from "rxjs";
import { UserStoreService } from "../services/user-store.service";
import { requestCurrentUser, requestCurrentUserFail, requestCurrentUserSuccess } from "./user.actions";

@Injectable()
export class UserEffects {

  constructor(private actions$: Actions, private userService: UserStoreService) {}

  getCurrentUser$ = createEffect(
    () => this.actions$.pipe(
        tap(() => {console.log("getCurrentUser& effect")}),
        ofType(requestCurrentUser),
        mergeMap(() =>
          this.userService.getCurrentUser().pipe(
            map(res => (requestCurrentUserSuccess({user: res.result}))),
            catchError(error => (console.log(error), of(requestCurrentUserFail()))),
            tap(() => console.log("getCurrentUser effect finished"))
          )
    ))
  );
}
