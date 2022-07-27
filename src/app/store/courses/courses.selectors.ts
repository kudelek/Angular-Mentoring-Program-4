import { createSelector } from "@ngrx/store";
import { CoursesState } from "./courses.reducer";

export const selectCourses = (state: any) => state.author;

export const getAllCoursesSelector = createSelector(
  selectCourses,
  (state: CoursesState) => state.allCourses
);

export const getCoursesSelector = createSelector(
  selectCourses,
  (state: CoursesState) => state.courses
);

export const getCourseSelector = createSelector(
  selectCourses,
  (state: CoursesState) => state.course
);

export const isAllCoursesLoadingSelector = createSelector(
  selectCourses,
  (state: CoursesState) => state.isAllCoursesLoading
);

export const isSingleCourseLoadingSelector = createSelector(
  selectCourses,
  (state: CoursesState) => state.isSingleCourseLoading
);

export const isSearchStateSelector = createSelector(
  selectCourses,
  (state: CoursesState) => state.isSearchState
);
