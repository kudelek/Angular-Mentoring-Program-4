import { createAction, props } from "@ngrx/store";
import { Course } from "src/app/models";

export const requestAllCourses = createAction('[Courses] getAllCourses');
export const requestAllCoursesSuccess = createAction('[Courses] getAllCoursesSuccess', props<{courses: Course[]}>());
export const requestAllCoursesFail = createAction('[Courses] getAllCoursesFail', props<{errorMessage: string}>());

export const requestSingleCourse = createAction('[Courses] getSingleCourse');
export const requestSingleCourseSuccess = createAction('[Courses] getSingleCourseSuccess', props<{course: Course}>());
export const requestSingleCourseFail = createAction('[Courses] getSingleCourseFail', props<{errorMessage: string}>());

export const requestFilteredCourses = createAction('[Courses] getFilteredCourses');
export const requestFilteredCoursesSuccess = createAction('[Courses] getFilteredCoursesSuccess', props<{courses: Course[]}>());

export const requestDeleteCourse = createAction('[Courses] deleteCourse');
export const requestDeleteCourseFail = createAction('[Courses] deleteCourseFail', props<{errorMessage: string}>());

export const requestEditCourse = createAction('[Courses] editCourse');
export const requestEditCourseSuccess = createAction('[Courses] editCourseSuccess', props<{course: Course}>());
export const requestEditCourseFail = createAction('[Courses] editCourseFail', props<{errorMessage: string}>());

export const requestCreateCourse = createAction('[Courses] createCourse');
export const requestCreateCourseSuccess = createAction('[Courses] createCourseSuccess', props<{course: Course}>());
export const requestCreateCourseFail = createAction('[Courses] createCourseFail', props<{errorMessage: string}>());
