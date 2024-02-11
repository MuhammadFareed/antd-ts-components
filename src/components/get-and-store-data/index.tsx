/* eslint-disable react-hooks/exhaustive-deps */
import { RootState } from "@store/reducers";
import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "src/store/actions";

const GetAndStoreData = () => {
  const dispatch = useDispatch();
  const action = bindActionCreators(actions, dispatch);
  const { auth } = useSelector((state: RootState) => state);
  const { isAuth } = auth;

  const fetchData = useCallback(() => {
    const teacherId = auth?.user?.user?.id;
    if (isAuth) {
      action.setProfile(teacherId);
      action.setAllSubjects();
      action.setAllDomainParameters();
      action.getTeacherSchedule();
    }
  }, [isAuth]);

  useEffect(() => {
    fetchData();
  }, [isAuth]);

  return <></>;
};

export default GetAndStoreData;
