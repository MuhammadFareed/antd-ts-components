import { Dispatch } from "redux";
import { demoServices } from "src/services";
import { ApiDefaultResponse } from "@type/index";
import {
  Children,
  IDemoSummary,
  IUpdateDemoStatusRequest,
  Package,
  TeacherDemos,
  IEnrolDemo,
  IRescheduledDemo,
  ITeacherSchedule,
} from "@type/demos";
import {
  DemoActionTypes,
  TEACHERS_DEMO,
  TEACHERS_DEMO_LOADING,
  PARENT_CHILDRENS,
  PARENT_CHILDREN_LOADING,
  TEACHER_PACKAGES_LOADING,
  TEACHER_PACKAGES,
  ENROL_DEMO_LOADING,
  DEMO_SUMMARY_LOADING,
  DEMO_SUMMARY,
  RELOAD,
  RESCHEDULED_DEMO_LOADING,
  TEACHER_SCHEDULE,
} from "../../action-types/demo";
import { convertObjToQueryString } from "src/utils";
import { message } from "antd";

interface IPackageData {
  data: Package[];
}

export const getTeacherDemos = (params?: object) => {
  return (dispatch: Dispatch<DemoActionTypes>) => {
    dispatch({ type: TEACHERS_DEMO_LOADING, payload: true });
    const query = convertObjToQueryString(params || {});

    void demoServices
      .getDemos(query)
      .then(response => {
        const apiResponse = response.data as ApiDefaultResponse<TeacherDemos[]>;

        dispatch({ type: TEACHERS_DEMO, payload: apiResponse.data });
        dispatch({ type: TEACHERS_DEMO_LOADING, payload: false });
      })
      .catch(() => {
        dispatch({ type: TEACHERS_DEMO_LOADING, payload: false });
      });
  };
};

export const updateDemoStatus = (data: IUpdateDemoStatusRequest) => {
  return (dispatch: Dispatch<DemoActionTypes>) => {
    dispatch({ type: TEACHERS_DEMO_LOADING, payload: true });

    void demoServices
      .updateDemoStatus(data)
      .then(() => {
        dispatch({ type: RELOAD, payload: "demoReload" });
      })
      .catch(() => {
        dispatch({ type: TEACHERS_DEMO_LOADING, payload: false });
      });
  };
};

export const getChildrens = (parentId: number) => {
  return (dispatch: Dispatch<DemoActionTypes>) => {
    dispatch({ type: PARENT_CHILDREN_LOADING, payload: true });

    void demoServices
      .getChildrens(parentId)
      .then(response => {
        dispatch({ type: PARENT_CHILDREN_LOADING, payload: false });

        const apiResponse = response.data as ApiDefaultResponse<Children[]>;
        dispatch({ type: PARENT_CHILDRENS, payload: apiResponse.data });
      })
      .catch(() => {
        dispatch({ type: PARENT_CHILDREN_LOADING, payload: false });
      });
  };
};

export const getTeacherPackages = () => {
  return (dispatch: Dispatch<DemoActionTypes>) => {
    dispatch({ type: TEACHER_PACKAGES_LOADING, payload: true });

    void demoServices
      .getTeacherPackages()
      .then(response => {
        dispatch({ type: TEACHER_PACKAGES_LOADING, payload: false });

        const apiResponse = response.data as ApiDefaultResponse<Package[]>;
        const data = apiResponse.data as unknown as IPackageData;
        dispatch({ type: TEACHER_PACKAGES, payload: data.data });
      })
      .catch(() => {
        dispatch({ type: TEACHER_PACKAGES_LOADING, payload: false });
      });
  };
};

export const getDemoSummary = () => {
  return (dispatch: Dispatch<DemoActionTypes>) => {
    dispatch({ type: DEMO_SUMMARY_LOADING, payload: true });

    void demoServices
      .getDemoSummary()
      .then(response => {
        dispatch({ type: DEMO_SUMMARY_LOADING, payload: false });
        const apiResponse = response.data as ApiDefaultResponse<IDemoSummary>;
        dispatch({ type: DEMO_SUMMARY, payload: apiResponse.data });
      })
      .catch(() => {
        dispatch({ type: DEMO_SUMMARY_LOADING, payload: false });
      });
  };
};

export const enrolDemo = (data: IEnrolDemo) => {
  return (dispatch: Dispatch<DemoActionTypes>) => {
    dispatch({ type: ENROL_DEMO_LOADING, payload: true });

    void demoServices
      .enrolDemo(data)
      .then(() => {
        dispatch({ type: ENROL_DEMO_LOADING, payload: false });
        dispatch({ type: RELOAD, payload: "demoEnroll" });
      })
      .catch(err => {
        message.error(err.response.data.message);
        dispatch({ type: ENROL_DEMO_LOADING, payload: false });
      });
  };
};

export const reScheduledDemo = (demoId: number, data: IRescheduledDemo) => {
  return (dispatch: Dispatch<DemoActionTypes>) => {
    dispatch({ type: RESCHEDULED_DEMO_LOADING, payload: true });

    void demoServices
      .rescheduledDemo(demoId, data)
      .then(() => {
        dispatch({ type: RESCHEDULED_DEMO_LOADING, payload: false });
        dispatch({ type: RELOAD, payload: "demoRescheduled" });
      })
      .catch(err => {
        message.error(err.response.data.message);
        dispatch({ type: RESCHEDULED_DEMO_LOADING, payload: false });
      });
  };
};

export const getTeacherSchedule = () => {
  return (dispatch: Dispatch<DemoActionTypes>) => {
    void demoServices
      .getSchedule()
      .then(response => {
        const apiResponse = response.data as ApiDefaultResponse<ITeacherSchedule>;
        // dispatch({
        //   type: TEACHER_SCHEDULE,
        //   payload: {
        //     schedule_demo: 0,
        //     upcomming_classes: [],
        //     upcomming_demo: [],
        //   },
        // });
        dispatch({ type: TEACHER_SCHEDULE, payload: apiResponse.data });
      })
      .catch(err => {
        message.error(err.response.data.message);
      });
  };
};
