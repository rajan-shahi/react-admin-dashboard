export enum ActiveNotificationFilter {
  All,
  Messages,
  Alerts,
}

export type NotificationFilters = {
  label: string;
  filter: ActiveNotificationFilter;
};

export enum NotificationType {
  Message,
  Alert,
}

export enum NotificationAlertType {
  NewOrder,
  NewReview,
}

export type Notification = { id: string } & (
  | {
      type: NotificationType.Alert;
      alertType: NotificationAlertType;
      username?: string;
      productName?: string;
    }
  | { type: NotificationType.Message; userFullName: string }
);
