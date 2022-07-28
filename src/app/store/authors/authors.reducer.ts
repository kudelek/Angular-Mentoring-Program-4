import { createReducer, on } from "@ngrx/store";
import { Author } from "../../models";
import { requestAddAuthorFail, requestAddAuthorSuccess, requestAuthorsFail, requestAuthorsSuccess, resetAddedAuthor } from "./authors.actions";

export const authorsFeatureKey = "authors"

export interface AuthorsState {
  authors: Author[],
  addedAuthor: Author
}

const initialState: AuthorsState = {
  authors: [],
  addedAuthor: {
    id: '',
    name: ''
  }
}

export const authorsReducer = createReducer(
  initialState,
  on(requestAuthorsSuccess, (state, {authors}): AuthorsState => {
    return {
      ...state,
      authors: authors
    }}),
  on(requestAuthorsFail, (state) => {
    return {
      ...state,
      authors: []
    }}),
  on(requestAddAuthorSuccess, (state, {addedAuthor}): AuthorsState => {
    return {
      ...state,
      addedAuthor: addedAuthor
    }}),
  on(requestAddAuthorFail, (state) => {
    return {
      ...state,
      addedAuthor: {
        id: '',
        name: ''
      }
    }}),
  on(resetAddedAuthor, (state) => {
    return {
      ...state,
      addedAuthor: {
        id: '',
        name: ''
      }
    }
  })
);
