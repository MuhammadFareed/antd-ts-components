import { Children, Package, TeacherDemos, IDemoSummary, ITeacherSchedule } from "@type/demos";

export const TEACHERS_DEMO = "TEACHERS_DEMO";
export const TEACHERS_DEMO_LOADING = "TEACHERS_DEMO_LOADING";
export const PARENT_CHILDRENS = "PARENT_CHILDRENS";
export const PARENT_CHILDREN_LOADING = "PARENT_CHILDREN_LOADING";
export const TEACHER_PACKAGES = "TEACHER_PACKAGES";
export const TEACHER_PACKAGES_LOADING = "TEACHER_PACKAGES_LOADING";
export const ENROL_DEMO_LOADING = "ENROL_DEMO_LOADING";
export const DEMO_SUMMARY = "DEMO_SUMMARY";
export const DEMO_SUMMARY_LOADING = "DEMO_SUMMARY_LOADING";
export const RELOAD = "RELOAD";
export const RESCHEDULED_DEMO_LOADING = "RESCHEDULED_DEMO_LOADING";
export const TEACHER_SCHEDULE = "TEACHER_SCHEDULE";

interface TeacherDemosAction {
  type: typeof TEACHERS_DEMO;
  payload: TeacherDemos[];
}

interface TeacherDemoLoadingAction {
  type: typeof TEACHERS_DEMO_LOADING;
  payload: boolean;
}

interface ParentChildrenAction {
  type: typeof PARENT_CHILDRENS;
  payload: Children[];
}

interface ParentChildrenLoadingAction {
  type: typeof PARENT_CHILDREN_LOADING;
  payload: boolean;
}

interface TeacherPackageAction {
  type: typeof TEACHER_PACKAGES;
  payload: Package[];
}

interface TeacherPackageLoadingAction {
  type: typeof TEACHER_PACKAGES_LOADING;
  payload: boolean;
}

interface EnrolDemoLoadingAction {
  type: typeof ENROL_DEMO_LOADING;
  payload: boolean;
}

interface DemoSummaryAction {
  type: typeof DEMO_SUMMARY;
  payload: IDemoSummary;
}

interface DemoSummaryLoadingAction {
  type: typeof DEMO_SUMMARY_LOADING;
  payload: boolean;
}

interface DemoRescheduledLoadingAction {
  type: typeof RESCHEDULED_DEMO_LOADING;
  payload: boolean;
}

interface teacherScheduleAction {
  type: typeof TEACHER_SCHEDULE;
  payload: ITeacherSchedule;
}

interface ReloadAction {
  type: typeof RELOAD;
  payload: string;
}

export type DemoActionTypes =
  | TeacherDemosAction
  | TeacherDemoLoadingAction
  | ParentChildrenAction
  | TeacherPackageAction
  | TeacherPackageLoadingAction
  | EnrolDemoLoadingAction
  | DemoSummaryAction
  | DemoSummaryLoadingAction
  | ReloadAction
  | teacherScheduleAction
  | DemoRescheduledLoadingAction
  | ParentChildrenLoadingAction;
