import { AppDispatch } from "../../reducers";
import { actionTypes } from "../../action-types";
import { PackagesData, TransferRequest } from "@type/index";
import { packageServices } from "src/services";

export const fetchPackages = (queryObj: Record<string, string | number>) => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch({
        type: actionTypes.SET_PACKAGES,
        payload: {
          loadingPackages: true,
        },
      });
      const packagesData: PackagesData = await packageServices.getPackages(queryObj);
      dispatch({
        type: actionTypes.SET_PACKAGES,
        payload: packagesData,
      });
    } catch (e) {
      dispatch({
        type: actionTypes.SET_PACKAGES,
        payload: {
          loadingPackages: false,
        },
      });
    }
  };
};

export const fetchTopPackages = () => {
  return async (dispatch: AppDispatch) => {
    const data = await packageServices.fetchTopPackages();
    dispatch({
      type: actionTypes.SET_TOP_PACKAGES,
      payload: data,
    });
  };
};

export const getTeachers = (name?: string) => {
  return new Promise((resolve, reject) => {
    packageServices
      .getTeachers(name)
      .then(({ data }) => {
        resolve(data);
      })
      .catch(err => {
        reject(err);
      });
  });
};

export const getEnrolmentById = (enrolmentId: string) => {
  return new Promise((resolve, reject) => {
    packageServices
      .getEnrolmentById(enrolmentId)
      .then(({ data }) => {
        resolve(data);
      })
      .catch(err => {
        reject(err);
      });
  });
};

export const transferStudentRequest = (data: TransferRequest) => {
  return new Promise((resolve, reject) => {
    packageServices
      .postTransferRequest(data)
      .then(({ data }) => {
        resolve(data);
      })
      .catch(err => {
        reject(err);
      });
  });
};
