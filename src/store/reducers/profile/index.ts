import { actionTypes } from "src/store/action-types";
import { ReducerAction, ProfileStateType } from "@type/index";
import { cloneDeep } from "lodash";

const GENERAL_INITIAL_STATE: ProfileStateType = {
  userProfile: null,
  progressTrackerData: null,
  bankDetails: null,
};

const profileReducer = (state: ProfileStateType = GENERAL_INITIAL_STATE, action: ReducerAction): ProfileStateType => {
  switch (action.type) {
    case actionTypes.SET_PROFILE: {
      return {
        ...state,
        userProfile: cloneDeep(action?.payload),
      };
    }
    case actionTypes.SET_PROGRESS_TRACKER_DATA: {
      return {
        ...state,
        progressTrackerData: cloneDeep(action?.payload),
      };
    }
    case actionTypes.SET_BANK_DETAILS: {
      return {
        ...state,
        bankDetails: cloneDeep(action?.payload),
      };
    }
    case actionTypes.LOG_OUT: {
      return {
        ...state,
        userProfile: null,
        progressTrackerData: null,
        bankDetails: null,
      };
    }
    default: {
      return state;
    }
  }
};

export default profileReducer;
