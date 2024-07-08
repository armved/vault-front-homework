import { Notification, NotificationTypes } from "@shared/types/notification";
import {
  TransactionNotificationBlock,
  AccountNotificationBlock,
} from "@components";

export const NotificationBlock: React.FC<{ notification: Notification }> = ({
  notification,
}) => {
  switch (notification.type) {
    case NotificationTypes.TRANSACTION_SENT:
    case NotificationTypes.TRANSACTION_RECEIVED:
      return (
        <TransactionNotificationBlock
          notification={notification}
        ></TransactionNotificationBlock>
      );
    case NotificationTypes.ACCOUNT_CREATED:
      return (
        <AccountNotificationBlock
          notification={notification}
        ></AccountNotificationBlock>
      );
  }
};
