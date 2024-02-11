import { actionTypes } from "src/store/action-types";
import { PackagesStateType, PackagesReducerAction } from "@type/index";

const INITIAL_PACKAGE_DATA = {
  packages: [],
  currentPage: 1,
  perPage: 10,
  total: 0,
  loadingPackages: true,
};

const PACKAGES_INITIAL_STATE: PackagesStateType = {
  packagesData: { ...INITIAL_PACKAGE_DATA },
};

const profileReducer = (
  state: PackagesStateType = PACKAGES_INITIAL_STATE,
  action: PackagesReducerAction,
): PackagesStateType => {
  switch (action.type) {
    case actionTypes.SET_PACKAGES: {
      return {
        ...state,
        packagesData: { ...state.packagesData, ...action?.payload },
      };
    }
    case actionTypes.LOG_OUT: {
      return {
        ...state,
        packagesData: { ...INITIAL_PACKAGE_DATA },
      };
    }
    default: {
      return state;
    }
  }
};

export default profileReducer;
