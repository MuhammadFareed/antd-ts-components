import { AppDispatch } from "../../reducers";
import { actionTypes } from "../../action-types";
import { learningServices } from "src/services";
import { LearningResources, PremiumResources } from "@type/index";

export const getPremiumResources = (queryObj?: Record<string, string | number>) => {
  return (dispatch: AppDispatch) => {
    dispatch({
      type: actionTypes.SET_PREMIUM_RESOURCES_LOADING,
      payload: { loadingPremiumResources: true },
    });
    learningServices
      .getPremiumResources(queryObj || {})
      .then((data: PremiumResources) => {
        dispatch({
          type: actionTypes.SET_PREMIUM_RESOURCES,
          payload: {
            loadingPremiumResources: false,
            premiumResources: data,
          },
        });
      })
      .catch(() => {
        dispatch({
          type: actionTypes.SET_PREMIUM_RESOURCES_LOADING,
          payload: { loadingPremiumResources: false },
        });
      });
  };
};

export const getLearningResources = () => {
  return (dispatch: AppDispatch) => {
    learningServices
      .getLearningResources()
      .then((data: LearningResources) => {
        dispatch({
          type: actionTypes.SET_LEARNING_RESOURCES,
          payload: {
            loadingLearningResouces: false,
            learningResouces: data,
          },
        });
      })
      .catch(() => {
        dispatch({
          type: actionTypes.SET_LEARNING_RESOURCES_LOADING,
          payload: { loadingLearningResouces: false },
        });
      });
  };
};
