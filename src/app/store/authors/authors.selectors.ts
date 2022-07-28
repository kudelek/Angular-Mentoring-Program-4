import { createSelector } from "@ngrx/store";
import { AuthorsState } from "./authors.reducer";

export const selectAuthor = (state: any) => state.author;

export const getAddedAuthor = createSelector(
  selectAuthor,
  (state: AuthorsState) => state.addedAuthor
);

export const getAuthors = createSelector(
  selectAuthor,
  (state: AuthorsState) => state.authors
)
