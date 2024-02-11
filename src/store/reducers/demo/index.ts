import { actionTypes } from "src/store/action-types";
import {
  DemoActionTypes,
  TEACHERS_DEMO,
  TEACHERS_DEMO_LOADING,
  PARENT_CHILDRENS,
  PARENT_CHILDREN_LOADING,
  TEACHER_PACKAGES,
  TEACHER_PACKAGES_LOADING,
  DEMO_SUMMARY,
  DEMO_SUMMARY_LOADING,
  RELOAD,
  ENROL_DEMO_LOADING,
  RESCHEDULED_DEMO_LOADING,
  TEACHER_SCHEDULE,
} from "../../action-types/demo";
import { Children, IDemoSummary, Package, TeacherDemos, ITeacherSchedule } from "@type/demos";

type DemoState = {
  teacherDemos: TeacherDemos[];
  teacherDemoLoading: boolean;
  parentChildren: Children[];
  parentChildrenLoading: boolean;
  teacherPackages: Package[];
  teacherPackagesLoading: boolean;
  demoSummary: IDemoSummary | undefined;
  demoSummaryLoading: boolean;
  reload: string;
  enrolDemoLoading: boolean;
  demoRescheduledLoading: boolean;
  teacherSchedule: ITeacherSchedule;
};

const initialState: DemoState = {
  teacherDemos: [],
  teacherDemoLoading: false,
  parentChildren: [],
  parentChildrenLoading: false,
  teacherPackages: [],
  teacherPackagesLoading: false,
  demoSummary: undefined,
  demoSummaryLoading: false,
  reload: "",
  enrolDemoLoading: false,
  demoRescheduledLoading: false,
  teacherSchedule: {
    schedule_demo: 0,
    upcomming_classes: [],
    upcomming_demo: [],
  },
};

const demoState: DemoState = {
  ...initialState,
};

const demoReducer = (state: DemoState = demoState, action: DemoActionTypes): DemoState => {
  switch (action.type) {
    case TEACHERS_DEMO: {
      return {
        ...state,
        teacherDemos: action.payload,
      };
    }

    case TEACHERS_DEMO_LOADING: {
      return {
        ...state,
        teacherDemoLoading: action.payload,
      };
    }

    case PARENT_CHILDRENS: {
      return {
        ...state,
        parentChildren: action.payload,
      };
    }

    case PARENT_CHILDREN_LOADING: {
      return {
        ...state,
        parentChildrenLoading: action.payload,
      };
    }

    case TEACHER_PACKAGES: {
      return {
        ...state,
        teacherPackages: action.payload,
      };
    }

    case TEACHER_PACKAGES_LOADING: {
      return {
        ...state,
        teacherPackagesLoading: action.payload,
      };
    }

    case DEMO_SUMMARY: {
      return {
        ...state,
        demoSummary: action.payload,
      };
    }

    case DEMO_SUMMARY_LOADING: {
      return {
        ...state,
        demoSummaryLoading: action.payload,
      };
    }

    case ENROL_DEMO_LOADING: {
      return {
        ...state,
        enrolDemoLoading: action.payload,
      };
    }

    case RELOAD: {
      return {
        ...state,
        reload: action.payload,
      };
    }

    case RESCHEDULED_DEMO_LOADING: {
      return {
        ...state,
        demoRescheduledLoading: action.payload,
      };
    }

    case TEACHER_SCHEDULE: {
      return {
        ...state,
        teacherSchedule: action.payload,
      };
    }

    case actionTypes.LOG_OUT: {
      return {
        ...state,
        ...initialState,
      };
    }

    default: {
      return state;
    }
  }
};

export default demoReducer;
