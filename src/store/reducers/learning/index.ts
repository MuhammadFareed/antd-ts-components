import { actionTypes } from "src/store/action-types";
import { cloneDeep } from "lodash";
import { LearningState, ReducerAction } from "@type/index";

const LEARNING_INITIAL_STATE: LearningState = {
  loadingLearningResouces: true,
  learningResouces: {
    codingResources: [],
    expressResources: [],
    expressResourceSubjects: [],
    outlineAssessments: [],
    outlineAssessmentSubjects: [],
    premiumResourceSubjects: [],
    trainingPhases: [],
  },
  loadingPremiumResources: true,
  premiumResources: {
    lesson: [],
    subjects: [],
    grades: [],
    lessonPack_option: {
      trial: "",
      standard: "",
      answer_scheme: "",
      topic_list: "",
      other: "",
      pehchaan: "",
    },
  },
};

const learningReducer = (state: LearningState = LEARNING_INITIAL_STATE, action: ReducerAction): LearningState => {
  switch (action?.type) {
    case actionTypes.SET_LEARNING_RESOURCES_LOADING: {
      return {
        ...state,
        loadingLearningResouces: action?.payload?.loadingLearningResouces,
      };
    }
    case actionTypes.SET_LEARNING_RESOURCES: {
      return {
        ...state,
        learningResouces: cloneDeep(action?.payload?.learningResouces),
        loadingLearningResouces: action?.payload?.loadingLearningResouces,
      };
    }
    case actionTypes.SET_PREMIUM_RESOURCES_LOADING: {
      return {
        ...state,
        loadingPremiumResources: action?.payload?.loadingPremiumResources,
      };
    }
    case actionTypes.SET_PREMIUM_RESOURCES: {
      return {
        ...state,
        premiumResources: cloneDeep(action?.payload?.premiumResources),
        loadingPremiumResources: action?.payload?.loadingPremiumResources,
      };
    }
    case actionTypes.LOG_OUT: {
      return {
        ...LEARNING_INITIAL_STATE,
      };
    }
    default: {
      return state;
    }
  }
};

export default learningReducer;
