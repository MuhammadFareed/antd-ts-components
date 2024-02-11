import { NotificationActionTypes, NOTIFICATION_DATA } from "../../action-types/notification";
import { INotificationData } from "@type/notification";

type NotificationState = {
  notificationData: INotificationData | null;
};

const initialState: NotificationState = {
  notificationData: null,
};

const notificationReducer = (
  state: NotificationState = initialState,
  action: NotificationActionTypes,
): NotificationState => {
  switch (action.type) {
    case NOTIFICATION_DATA: {
      return {
        ...state,
        notificationData: action.payload,
      };
    }

    default: {
      return state;
    }
  }
};

export default notificationReducer;
