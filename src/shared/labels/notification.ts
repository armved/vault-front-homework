import { NotificationTypes } from "../types/notification";

export const NotificationLabels: { [key in NotificationTypes]: string } = {
  [NotificationTypes.TRANSACTION_SENT]: "Sent",
  [NotificationTypes.TRANSACTION_RECEIVED]: "Received",
  [NotificationTypes.ACCOUNT_CREATED]: "Account Created",
};
