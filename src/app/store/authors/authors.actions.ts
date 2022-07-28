import { createAction, props } from "@ngrx/store";
import { Author } from "../../models";

export const requestAuthors = createAction('[Courses] getAuthor');
export const requestAuthorsSuccess = createAction('[Courses] getAuthorSuccess', props<{authors: Author[]}>());
export const requestAuthorsFail = createAction('[Courses] getAuthorFail');

export const requestAddAuthor = createAction('[Courses] addAuthor', props<{name: string}>());
export const requestAddAuthorSuccess = createAction('[Courses] addAuthorSuccess', props<{addedAuthor: Author}>());
export const requestAddAuthorFail = createAction('[Courses] addAuthorFail');

export const resetAddedAuthor = createAction('[Courses] resetAddedAuthor');
