import { NotificationLabels } from "@shared/labels/notification";
import {
  NotificationTypes,
  TransactionNotification,
} from "@shared/types/notification";

import {
  ArrowDownCircleIcon,
  ArrowUpCircleIcon,
} from "@heroicons/react/20/solid";

export const TransactionNotificationBlock: React.FC<{
  notification: TransactionNotification;
}> = ({ notification }) => {
  const { data, type } = notification;
  const isSent = type === NotificationTypes.TRANSACTION_SENT;
  const isReceived = type === NotificationTypes.TRANSACTION_RECEIVED;

  return (
    <div className="rounded-xl bg-white border border-gray-200 shadow-sm p-4 flex gap-8 items-center justify-between">
      <div className="flex gap-2">
        {isSent ? (
          <ArrowUpCircleIcon className="w-6 h-6 text-gray-500"></ArrowUpCircleIcon>
        ) : isReceived ? (
          <ArrowDownCircleIcon className="w-6 h-6 text-green-500"></ArrowDownCircleIcon>
        ) : null}

        <div className="text-sm font-medium leading-6 text-gray-900">
          {NotificationLabels[type]}
        </div>

        <span className="text-gray-500">
          ({isSent ? `to: ${data.to}` : isReceived ? `from: ${data.from}` : ""})
        </span>
      </div>

      <span
        className={`font-semibold ${isReceived ? "text-green-500" : "text-gray-500"}`}
      >
        {`${isSent ? "-" : isReceived ? "+" : ""}${data.amount} ${data.unit}`}
      </span>
    </div>
  );
};
