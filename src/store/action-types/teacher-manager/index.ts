import { DefaultPagination } from "@type/index";
import { TeacherManager, EvaluationReportForm } from "@type/teacher-manager";

export const TEACHER_TIER_1 = "TEACHER_TIER_1";
export const TEACHER_TIER_2 = "TEACHER_TIER_2";
export const TEACHER_TIER_1_LOADING = "TEACHER_TIER_1_LOADING";
export const TEACHER_TIER_2_LOADING = "TEACHER_TIER_2_LOADING";
export const TEACHER_EVALUATION_FORM = "TEACHER_EVALUATION_FORM";

interface TeacherTier1Action {
  type: typeof TEACHER_TIER_1;
  payload: DefaultPagination<TeacherManager[]>;
}

interface TeacherTier2Action {
  type: typeof TEACHER_TIER_2;
  payload: DefaultPagination<TeacherManager[]>;
}

interface TeacherTier1LoadingAction {
  type: typeof TEACHER_TIER_1_LOADING;
  payload: boolean;
}

interface TeacherTier2LoadingAction {
  type: typeof TEACHER_TIER_2_LOADING;
  payload: boolean;
}

interface TeacherEvaluationFormAction {
  type: typeof TEACHER_EVALUATION_FORM;
  payload: EvaluationReportForm[];
}

export type TeacherManagerActionTypes =
  | TeacherTier1Action
  | TeacherTier2Action
  | TeacherTier1LoadingAction
  | TeacherTier2LoadingAction
  | TeacherEvaluationFormAction;
