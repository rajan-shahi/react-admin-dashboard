import { useState, useMemo } from 'react';
import { HiOutlineBell, HiOutlineMail } from 'react-icons/hi';

import { DropdownWrapper } from 'components';
import { cn } from 'helpers';
import { useGlobalProvider } from 'hooks';
import {
  ActiveNotificationFilter,
  NotificationAlertType,
  NotificationFilters,
  NotificationType,
  Notification,
} from './types';
import { notificationsData } from './data';

export const Notifications = () => {
  const [activeFilter, setActiveFilter] = useState<ActiveNotificationFilter>(
    ActiveNotificationFilter.All
  );
  const [notifications, setNotifications] =
    useState<Notification[]>(notificationsData);
  const { isDarkTheme } = useGlobalProvider();

  const notificationFilters = useMemo<NotificationFilters[]>(
    () => [
      { label: 'All', filter: ActiveNotificationFilter.All },
      { label: 'Messages', filter: ActiveNotificationFilter.Messages },
      { label: 'Alerts', filter: ActiveNotificationFilter.Alerts },
    ],
    []
  );

  const onActiveFilterChange = (filter: ActiveNotificationFilter) => {
    setActiveFilter(filter);
    if (filter === ActiveNotificationFilter.Alerts) {
      setNotifications(
        [...notificationsData].filter((n) => n.type === NotificationType.Alert)
      );
    } else if (filter === ActiveNotificationFilter.Messages) {
      setNotifications(
        [...notificationsData].filter(
          (n) => n.type === NotificationType.Message
        )
      );
    } else {
      setNotifications([...notificationsData]);
    }
  };

  return (
    <DropdownWrapper
      buttonContent={<HiOutlineBell />}
      buttonClassName="block"
      dropdownClassName={cn(
        'bg-secondary border-2 border-primary rounded-[10px] w-[200px] mt-3 overflow-hidden shadow-md',
        { 'bg-dark': isDarkTheme }
      )}
      dropdownPlacement="bottom"
    >
      <header className="bg-primary">
        <p className="uppercase px-2 py-2.5 text-sm font-inika text-white">
          Notifications
        </p>
        <div className="flex items-center gap-1 text-xs">
          {notificationFilters.map(({ label, filter }) => (
            <button
              key={filter}
              className={cn('rounded-t px-2 py-1 uppercase text-white', {
                'bg-secondary text-dark':
                  !isDarkTheme && filter === activeFilter,
                'bg-dark': isDarkTheme && filter === activeFilter,
              })}
              onClick={() => onActiveFilterChange(filter)}
            >
              {label}
            </button>
          ))}
        </div>
      </header>
      <div className="p-2">
        <ul className="divide-y divide-primary/50 max-h-[300px] overflow-y-auto">
          {notifications.map((notification) => {
            return (
              <li key={notification.id} className="text-xs">
                <div className="flex gap-2 py-2">
                  {notification.type === NotificationType.Alert ? (
                    <HiOutlineBell className="text-base shrink-0" />
                  ) : (
                    <HiOutlineMail className="text-base shrink-0" />
                  )}
                  {notification.type === NotificationType.Message && (
                    <p>
                      You have 1 new message from {notification.userFullName}
                    </p>
                  )}
                  {notification.type === NotificationType.Alert &&
                    notification.alertType ===
                      NotificationAlertType.NewOrder && (
                      <p>A new order has been placed.</p>
                    )}
                  {notification.type === NotificationType.Alert &&
                    notification.alertType ===
                      NotificationAlertType.NewReview && (
                      <p>
                        {notification.username} left a new review on{' '}
                        {notification.productName}
                      </p>
                    )}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </DropdownWrapper>
  );
};
