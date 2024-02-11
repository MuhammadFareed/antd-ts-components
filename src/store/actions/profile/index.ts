import { AppDispatch } from "../../reducers";
import { actionTypes } from "../../action-types";
import { profileServices, packageServices } from "src/services";
import { ApiDefaultResponse, Package } from "@type/index";

interface IPackageResponse {
  data: Package[];
}

export const setProfile = (teacherId?: number) => {
  return async (dispatch: AppDispatch) => {
    const data = await profileServices.getProfile(teacherId);
    dispatch({
      type: actionTypes.SET_PROFILE,
      payload: data,
    });
  };
};

export const setProgressTracker = () => {
  return async (dispatch: AppDispatch) => {
    const data = await profileServices.getProgressTracker();
    dispatch({
      type: actionTypes.SET_PROGRESS_TRACKER_DATA,
      payload: data,
    });
  };
};

export const setBankDetails = () => {
  return async (dispatch: AppDispatch) => {
    try {
      const data = await profileServices.getBankDetails();
      dispatch({
        type: actionTypes.SET_BANK_DETAILS,
        payload: data,
      });
    } catch (e) {
      //
    }
  };
};

export const getTeacherProfile = (teacherId?: number) => {
  return new Promise((resolve, reject) => {
    profileServices.getProfile(teacherId).then(resolve).catch(reject);
  });
};

export const getTeacherPackagesById = (teacherId: number) => {
  return new Promise((resolve, reject) => {
    packageServices
      .getTeacherPackages(teacherId)
      .then(response => {
        const apiResponse = response.data as ApiDefaultResponse<IPackageResponse>;
        resolve(apiResponse.data.data);
      })
      .catch(reject);
  });
};
