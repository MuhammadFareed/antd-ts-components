import { INotificationData } from "@type/notification";

export const NOTIFICATION_DATA = "NOTIFICATION_DATA";

interface NotificationDataAction {
  type: typeof NOTIFICATION_DATA;
  payload: INotificationData;
}

export type NotificationActionTypes = NotificationDataAction;
