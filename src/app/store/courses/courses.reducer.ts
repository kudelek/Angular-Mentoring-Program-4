import { createReducer, on } from "@ngrx/store";
import { Course } from "../../models";
import { requestAllCoursesFail, requestAllCoursesSuccess, requestDeleteCourseFail, requestEditCourseFail, requestEditCourseSuccess, requestFilteredCoursesSuccess, requestSingleCourseFail, requestSingleCourseSuccess } from "./courses.actions";

export const userFeatureKey = "authors"

export interface CoursesState {
  allCourses: Course[],
  courses: Course[],
  course: Course,
  isAllCoursesLoading: boolean,
  isSingleCourseLoading: boolean,
  isSearchState: boolean,
  errorMessage: string
}

const initialState: CoursesState = {
  allCourses: [],
  courses: [],
  course: {
    id: '',
    title: '',
    description: '',
    creationDate: '',
    authors: [],
    duration: '0',
  },
  isAllCoursesLoading: false,
  isSingleCourseLoading: false,
  isSearchState: false,
  errorMessage: ''
}

export const authorsReducer = createReducer(
  initialState,
  on(requestAllCoursesSuccess, (state, {courses}): CoursesState => {
    return {
      ...state,
      isAllCoursesLoading: false,
      allCourses: courses
    }
  }),
  on(requestAllCoursesFail, (state, {errorMessage}): CoursesState => {
    return {
      ...state,
      isAllCoursesLoading: false,
      errorMessage: errorMessage
    }
  }),
  on(requestSingleCourseSuccess, (state, {course}): CoursesState => {
    return {
      ...state,
      isSingleCourseLoading: false,
      course: course
    }
  }),
  on(requestSingleCourseFail, (state, {errorMessage}): CoursesState => {
    return {
      ...state,
      isSingleCourseLoading: false,
      errorMessage: errorMessage
    }
  }),
  on(requestFilteredCoursesSuccess, (state, {courses}): CoursesState => {
    return {
      ...state,
      isSearchState: false,
      courses: courses,
    }
  }),
  on(requestDeleteCourseFail, (state, {errorMessage}) => {
    return {
      ...state,
      errorMessage: errorMessage
    }
  }),
  on(requestEditCourseSuccess, (state, {course}) => {
    return {
      ...state,
      course: course
    }
  }),
  on(requestEditCourseFail, (state, {errorMessage}) => {
    return {
      ...state,
      errorMessage
    }
  }),
);
