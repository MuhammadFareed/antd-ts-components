import { actionTypes } from "src/store/action-types";
import { ReducerAction, PersistedGeneralState } from "@type/index";
import { cloneDeep } from "lodash";

const INITIAL_STATE: PersistedGeneralState = {
  whatsNewData: [],
  domainParametersData: null,
  subjects: null,
  topPackages: null,
};

const persistedgeneralReducer = (
  state: PersistedGeneralState = INITIAL_STATE,
  action: ReducerAction,
): PersistedGeneralState => {
  switch (action.type) {
    case actionTypes.SET_WHATS_NEW_DATA: {
      return {
        ...state,
        whatsNewData: cloneDeep(action?.payload),
      };
    }
    case actionTypes.SET_ALL_DOMAIN_PARAMETERS: {
      return {
        ...state,
        domainParametersData: cloneDeep(action?.payload),
      };
    }
    case actionTypes.SET_ALL_SUBJECTS: {
      return {
        ...state,
        subjects: cloneDeep(action?.payload),
      };
    }
    case actionTypes.SET_TOP_PACKAGES: {
      return {
        ...state,
        topPackages: cloneDeep(action?.payload),
      };
    }
    case actionTypes.LOG_OUT: {
      return {
        ...state,
        whatsNewData: [],
        domainParametersData: null,
        subjects: null,
        topPackages: null,
      };
    }
    default: {
      return state;
    }
  }
};

export default persistedgeneralReducer;
