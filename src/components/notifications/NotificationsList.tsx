import React from "react";
import { Notification } from "@shared/types/notification";
import { NotificationBlock } from "@components";

export const NotificationsList: React.FC<{
  notifications: Notification[];
}> = ({ notifications }) => (
  <div className="flex flex-col gap-4">
    {notifications.map((notification) => (
      <NotificationBlock
        notification={notification}
        key={notification.id}
      ></NotificationBlock>
    ))}
  </div>
);
