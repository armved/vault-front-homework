export enum NotificationTypes {
  TRANSACTION_RECEIVED = "TRANSACTION_RECEIVED",
  TRANSACTION_SENT = "TRANSACTION_SENT",
  ACCOUNT_CREATED = "ACCOUNT_CREATED",
}

interface BaseNotification {
  id: number;
  type: NotificationTypes;
  data: {
    id: number;
  };
}

export type TransactionNotification = BaseNotification & {
  type:
    | NotificationTypes.TRANSACTION_SENT
    | NotificationTypes.TRANSACTION_RECEIVED;
  data: {
    amount: number;
    unit: string;
    from: string;
    to: string;
  };
};

export type AccountNotification = BaseNotification & {
  type: NotificationTypes.ACCOUNT_CREATED;
  data: {
    name: string;
    currency: string;
  };
};

export type Notification = TransactionNotification | AccountNotification;
