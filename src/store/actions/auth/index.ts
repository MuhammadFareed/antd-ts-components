import { AppDispatch } from "../../reducers";
import { actionTypes } from "../../action-types";
import { LoggedInUser } from "@type/index";

export const setLoggedInUser = (data: LoggedInUser) => {
  return (dispatch: AppDispatch) => {
    dispatch({
      type: actionTypes.SET_LOGGED_IN_USER,
      payload: data,
    });
  };
};

export const logoutCurrentUser = () => {
  return (dispatch: AppDispatch) => {
    dispatch({
      type: actionTypes.LOG_OUT,
    });
  };
};
