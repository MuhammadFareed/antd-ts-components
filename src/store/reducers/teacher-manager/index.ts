import {
  TEACHER_TIER_1,
  TEACHER_TIER_1_LOADING,
  TEACHER_TIER_2,
  TEACHER_TIER_2_LOADING,
  TeacherManagerActionTypes,
  TEACHER_EVALUATION_FORM,
} from "../../action-types/teacher-manager";
import { TeacherManager, EvaluationReportForm } from "@type/teacher-manager";
import { DefaultPagination } from "@type/index";

type TeacherManagerState = {
  teacherTier1: DefaultPagination<TeacherManager[]> | undefined;
  teacherTier2: DefaultPagination<TeacherManager[]> | undefined;
  teacherTier1Loading: boolean;
  teacherTier2Loading: boolean;
  evaluationReportForm: EvaluationReportForm[];
};

const initialState: TeacherManagerState = {
  teacherTier1: undefined,
  teacherTier2: undefined,
  teacherTier1Loading: false,
  teacherTier2Loading: false,
  evaluationReportForm: [],
};

const teacherManagerReducer = (
  state: TeacherManagerState = initialState,
  action: TeacherManagerActionTypes,
): TeacherManagerState => {
  switch (action.type) {
    case TEACHER_TIER_1: {
      return {
        ...state,
        teacherTier1: action.payload,
      };
    }

    case TEACHER_TIER_2: {
      return {
        ...state,
        teacherTier2: action.payload,
      };
    }

    case TEACHER_TIER_1_LOADING: {
      return {
        ...state,
        teacherTier1Loading: action.payload,
      };
    }

    case TEACHER_TIER_2_LOADING: {
      return {
        ...state,
        teacherTier2Loading: action.payload,
      };
    }

    case TEACHER_EVALUATION_FORM: {
      return {
        ...state,
        evaluationReportForm: action.payload,
      };
    }

    default: {
      return state;
    }
  }
};

export default teacherManagerReducer;
