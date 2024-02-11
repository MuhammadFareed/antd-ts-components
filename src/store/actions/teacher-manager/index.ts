import { Dispatch } from "redux";
import { teacherManagerServices } from "src/services";
import { ApiDefaultResponse, DefaultPagination } from "@type/index";
import {
  TeacherManager,
  EvaluationReport,
  TeacherTier,
  EvaluationReportDetails,
  EvaluationReportForm,
  IReportData,
} from "@type/teacher-manager";
import {
  TeacherManagerActionTypes,
  TEACHER_TIER_1_LOADING,
  TEACHER_TIER_2_LOADING,
  TEACHER_TIER_1,
  TEACHER_TIER_2,
  TEACHER_EVALUATION_FORM,
} from "../../action-types/teacher-manager";

export const getTeacherManager = (tier: TeacherTier, obj?: object) => {
  return (dispatch: Dispatch<TeacherManagerActionTypes>) => {
    const teacherTierLoading = tier === "1" ? TEACHER_TIER_1_LOADING : TEACHER_TIER_2_LOADING;
    const teacherTierType = tier === "1" ? TEACHER_TIER_1 : TEACHER_TIER_2;
    dispatch({ type: teacherTierLoading, payload: true });

    const params = {
      tier,
      ...obj,
    };

    void teacherManagerServices
      .getTeacherManager(params)
      .then(response => {
        const apiResponse = response.data as ApiDefaultResponse<DefaultPagination<TeacherManager[]>>;
        dispatch({ type: teacherTierLoading, payload: false });
        dispatch({ type: teacherTierType, payload: apiResponse.data });
      })
      .catch(() => {
        dispatch({ type: teacherTierLoading, payload: false });
      });
  };
};

export const getTeacherEvaluationForm = () => {
  return (dispatch: Dispatch<TeacherManagerActionTypes>) => {
    void teacherManagerServices
      .getEvaluationReportForm()
      .then(response => {
        const apiResponse = response.data as ApiDefaultResponse<EvaluationReportForm[]>;

        dispatch({ type: TEACHER_EVALUATION_FORM, payload: apiResponse.data });
      })
      .catch(err => {
        console.error("🚀 ~ file: index.ts:55 ~ return ~ err:", err);
      });
  };
};

export const getTeacherEvaluation = (teacherId: number, page: number) => {
  return new Promise((resolve, reject) => {
    void teacherManagerServices
      .getTeacherEvaluation(teacherId, page)
      .then(response => {
        const apiResponse = response.data as ApiDefaultResponse<EvaluationReport[]>;
        resolve(apiResponse.data);
      })
      .catch(reject);
  });
};

export const getTeacherEvaluationDetails = (teacherId: number) => {
  return new Promise((resolve, reject) => {
    void teacherManagerServices
      .getTeacherEvaluationDetails(teacherId)
      .then(response => {
        const apiResponse = response.data as ApiDefaultResponse<EvaluationReportDetails>;
        resolve(apiResponse);
      })
      .catch(reject);
  });
};

export const getTeacherEvaluationReport = (reportId: number) => {
  return new Promise((resolve, reject) => {
    void teacherManagerServices
      .getEvaluationReport(reportId)
      .then(response => {
        const apiResponse = response.data as ApiDefaultResponse<EvaluationReportDetails>;
        resolve(apiResponse);
      })
      .catch(reject);
  });
};

export const createEvaluationReport = (data: IReportData) => {
  return new Promise((resolve, reject) => {
    void teacherManagerServices
      .createReport(data)
      .then(() => {
        resolve(true);
      })
      .catch(err => {
        // message.error(err.response.message)
        reject(err.response.message);
        console.error("🚀 ~ file: index.ts:55 ~ return ~ err:", err);
      });
  });
};
