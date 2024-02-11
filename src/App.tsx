import React, { Fragment, useState, useEffect, useCallback } from "react";
import AppRoutes from "./routes";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import AppNotification from "src/components/app-notifications";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@store/reducers";
import moment from "moment-timezone";
import image5 from "./assets/notificationSvgs/image5.svg";
import { getNotificationData } from "./utils";
import { NOTIFICATION_DATA } from "src/store/action-types/notification";

dayjs.extend(customParseFormat);

function App() {
  const [show, setShow] = useState<boolean>(false);
  const { notificationData } = useSelector((state: RootState) => state.notification);
  const { user } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();
  const getContent = () => (
    <div>{"Progress reports are a great way to sync with parents on your student’s learning journey"}</div>
  );

  const progressReport = getNotificationData({
    content: getContent,
    cancelText: "Not now",
    image: image5,
    title: "Time to update Student Progress Reports!",
    successText: "Update",
    handleSuccess: () => {
      window.location.pathname = "/packages";
    },
  });

  const reportPopup = useCallback(
    (day: number, month: string) => {
      localStorage.setItem("report-month", month);

      if (day === 23) {
        dispatch({ type: NOTIFICATION_DATA, payload: progressReport });
      } else if (day === 29) {
        dispatch({ type: NOTIFICATION_DATA, payload: progressReport });
      }
    },
    [dispatch, progressReport],
  );

  useEffect(() => {
    const today = moment();
    const month = moment().format("MMM");
    const getMonth = localStorage.getItem("report-month");

    const day = today.date();

    if (user) {
      if (getMonth !== null) {
        if (getMonth !== month) {
          reportPopup(day, month);
        }
      } else {
        reportPopup(day, month);
      }
    }
  }, [reportPopup, user]);

  useEffect(() => {
    if (notificationData) {
      setShow(true);
    }
  }, [notificationData]);

  return (
    <Fragment>
      <AppRoutes />

      <AppNotification show={show} setShow={setShow} />
    </Fragment>
  );
}

export default App;
