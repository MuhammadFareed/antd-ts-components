import React, { Dispatch, useEffect } from "react";

import ModalComponent from "src/components/notification-modal";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@store/reducers";
import { NOTIFICATION_DATA } from "src/store/action-types/notification";
import { onMessageListener, requestPermission } from "src/config/firebase";
import { showNotification } from "src/utils/notificationData";
import { Payload } from "@type/notification";
import { isSupported } from "firebase/messaging";

interface IAppNotification {
  show: boolean;
  setShow: Dispatch<React.SetStateAction<boolean>>;
}

const AppNotification = ({ show, setShow }: IAppNotification) => {
  const { notificationData } = useSelector((state: RootState) => state.notification);
  const { user } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();

  const getToken = async () => {
    const supported = await isSupported();

    if (supported) {
      requestPermission();
      const payload = await onMessageListener();
      const data = payload as Payload;

      return Promise.resolve(data);
    }

    return Promise.reject(supported);
  };

  useEffect(() => {
    if (user) {
      const unsubscribe = getToken()
        .then(data => {
          if (data) {
            dispatch(showNotification(data.data.notification_type, data.notification.body, data.fcmOptions.link));
          }
        })
        .catch(err => {
          console.log("🚀 ~ Notification not supported", err);
        });

      return () => {
        unsubscribe.catch(err => console.log("failed: ", err));
      };
    }
  }, [dispatch, user]);

  const handleClose = () => {
    setShow(false);
    dispatch({ type: NOTIFICATION_DATA, payload: null });
  };

  return (
    <>
      {show && (
        <ModalComponent
          show={show}
          image={notificationData?.image}
          handleCancel={handleClose}
          cancelText={notificationData?.cancelText}
          handleSuccess={() => {
            if (typeof notificationData?.handleSuccess === "function") {
              notificationData?.handleSuccess();
            }

            handleClose();
          }}
          type={notificationData?.type}
          title={notificationData?.title}
          disableCancel={notificationData?.disableCancel}
          successText={notificationData?.successText}
          content={typeof notificationData?.content === "function" ? notificationData.content : () => <div />}
          disableClose={notificationData?.disableClose}
        />
      )}
    </>
  );
};

export default AppNotification;
