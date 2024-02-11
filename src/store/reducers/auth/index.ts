import { actionTypes } from "src/store/action-types";
import { AuthReducer, ReducerAction } from "@type/index";
import { cloneDeep } from "lodash";

const AUTH_INITIAL_STATE: AuthReducer = {
  user: null,
  isAuth: false,
};

const authReducer = (state: AuthReducer = AUTH_INITIAL_STATE, action: ReducerAction): AuthReducer => {
  switch (action.type) {
    case actionTypes.SET_LOGGED_IN_USER: {
      return {
        ...state,
        user: cloneDeep(action?.payload),
        isAuth: true,
      };
    }
    case actionTypes.LOG_OUT: {
      return {
        ...state,
        user: null,
        isAuth: false,
      };
    }
    default: {
      return state;
    }
  }
};

export default authReducer;
