import { AppDispatch } from "../../reducers";
import { actionTypes } from "../../action-types";
import {
  DomainParameters,
  ExpressSubject,
  FormattedCreatePackageSubjects,
  PremiumSubject,
  Qualification,
  ShortCourseSubject,
  Subjects,
} from "@type/index";
import { generalServices, profileServices } from "src/services";
import { capitilizeFirstLetter } from "src/utils";

export const setActiveLearningMenu = (value: string[]) => {
  return (dispatch: AppDispatch) => {
    dispatch({
      type: actionTypes.SET_ACTIVE_LEARNING_MENU,
      payload: value,
    });
  };
};

export const setWhatsNewData = () => {
  return async (dispatch: AppDispatch) => {
    const data = await profileServices.getWhatsNewData();
    dispatch({
      type: actionTypes.SET_WHATS_NEW_DATA,
      payload: data,
    });
  };
};

export function setAllDomainParameters() {
  return async (dispatch: AppDispatch) => {
    const data: DomainParameters = await generalServices.fetchAllDomainParameters();
    const areas = data?.areas?.map((area: string, index: number) => {
      return {
        id: index,
        label: capitilizeFirstLetter(area),
        value: area,
      };
    });
    const cities = [];
    for (const key in data?.cities) {
      const item = data?.cities[key];
      cities.push({
        id: cities?.length,
        label: capitilizeFirstLetter(item),
        value: item,
      });
    }
    const countries = [];
    for (const key in data?.countries) {
      countries.push({
        id: countries?.length,
        label: capitilizeFirstLetter(key),
        value: key,
      });
    }
    const qualificationLevels = data?.qualification_levels?.map((qualificationLevel: Qualification) => {
      return {
        id: qualificationLevel?.id,
        label: capitilizeFirstLetter(qualificationLevel?.name),
        value: qualificationLevel?.id,
      };
    });
    const qualifications = data?.qualifications?.map((qualification: Qualification) => {
      return {
        id: qualification?.id,
        label: capitilizeFirstLetter(qualification?.name),
        value: qualification?.id,
      };
    });
    const subjects = data?.subjects?.map((subject: Subjects) => {
      return {
        id: subject?.id,
        label: capitilizeFirstLetter(subject?.subject),
        value: capitilizeFirstLetter(subject?.subject),
      };
    });
    const formattedData = {
      areas,
      cities,
      countries,
      qualificationLevels,
      qualifications,
      subjects,
    };
    dispatch({
      type: actionTypes.SET_ALL_DOMAIN_PARAMETERS,
      payload: formattedData,
    });
  };
}

export function setAllSubjects() {
  return async (dispatch: AppDispatch) => {
    const data = await generalServices.fetchAllSubjects();
    const expressSubjects = data?.express?.map((subject: ExpressSubject, index: number) => {
      return {
        id: index,
        label: subject?.subject,
        value: subject?.id,
      };
    });
    const premiumSubjects = data?.premium?.map((subject: PremiumSubject, index: number) => {
      return {
        id: index,
        label: subject?.subject,
        value: subject?.id,
      };
    });
    const shortCourseSubjects = data?.short_courses?.map((subject: ShortCourseSubject, index: number) => {
      return {
        id: index,
        label: subject?.title,
        value: subject?.id,
      };
    });
    const formattedSubjects: FormattedCreatePackageSubjects = {
      express: expressSubjects,
      premium: premiumSubjects,
      short_courses: shortCourseSubjects,
    };
    dispatch({
      type: actionTypes.SET_ALL_SUBJECTS,
      payload: formattedSubjects,
    });
  };
}
