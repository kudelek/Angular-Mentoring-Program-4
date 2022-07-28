import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap, of, switchMap } from "rxjs";
import { AuthorsStoreService } from "../../services/authors-store.service";
import { requestAddAuthor, requestAddAuthorFail, requestAddAuthorSuccess, requestAuthors, requestAuthorsFail, requestAuthorsSuccess } from "./authors.actions";

@Injectable()
export class UserEffects {

  constructor(private actions$: Actions, private authorsService: AuthorsStoreService) {}

  getAuthors$ = createEffect(() => {
    return this.actions$.pipe(
        ofType(requestAuthors),
        mergeMap(() =>
          this.authorsService.getAll().pipe(
            map(res => requestAuthorsSuccess({ authors: res.result })),
            catchError(error => of(requestAuthorsFail())))
          ),
    );
  });

  addAuthor$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(requestAddAuthor),
      switchMap((action) =>
      this.authorsService.addAuthor(action.name).pipe(
        map(res => requestAddAuthorSuccess({ addedAuthor: res.result })),
        catchError(error => of(requestAddAuthorFail()))
      ))
    )
  })
}
