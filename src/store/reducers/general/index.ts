import { actionTypes } from "src/store/action-types";
import { ReducerAction, GeneralStateType } from "@type/index";
import { cloneDeep } from "lodash";

const GENERAL_INITIAL_STATE: GeneralStateType = {
  activeLearningMenu: [],
};

const generalReducer = (state: GeneralStateType = GENERAL_INITIAL_STATE, action: ReducerAction): GeneralStateType => {
  switch (action.type) {
    case actionTypes.SET_ACTIVE_LEARNING_MENU: {
      return {
        ...state,
        activeLearningMenu: cloneDeep(action?.payload),
      };
    }
    default: {
      return state;
    }
  }
};

export default generalReducer;
