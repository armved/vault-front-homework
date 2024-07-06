import { NotificationLabels } from "@shared/labels/notification";
import { AccountNotification } from "@shared/types/notification";

import { PlusCircleIcon } from "@heroicons/react/20/solid";

export const AccountNotificationBlock: React.FC<{
  notification: AccountNotification;
}> = ({ notification }) => {
  return (
    <div className="rounded-xl bg-white dark:bg-slate-700 border border-gray-200 dark:border-slate-900 shadow-sm p-4 flex gap-8 items-center justify-between">
      <div className="flex gap-2">
        <PlusCircleIcon className="w-6 h-6 text-green-500 dark:text-green-600"></PlusCircleIcon>

        <div className="text-sm font-medium leading-6 text-slate-900 dark:text-white">
          {NotificationLabels[notification.type]}
        </div>

        <span className="text-gray-500 dark:text-gray-400">
          ({notification.data.currency})
        </span>
      </div>

      <div className="text-gray-500 dark:text-gray-400 font-semibold">
        {notification.data.name}
      </div>
    </div>
  );
};
