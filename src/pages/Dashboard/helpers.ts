import { StatusType } from 'components';
import { OrderStatus, PaymentMethod } from 'types';

export const mapPaymentMethodWithLabel = (method: PaymentMethod): string => {
  switch (method) {
    case PaymentMethod.CreditCard:
      return 'Credit card';
    case PaymentMethod.Paypal:
      return 'Paypal';
    default:
      return '';
  }
};

export const mapOrderStatusWithStatusType = (
  status: OrderStatus
): StatusType => {
  switch (status) {
    case OrderStatus.Canceled:
      return 'danger';
    case OrderStatus.Completed:
      return 'success';
    case OrderStatus.Processing:
    default:
      return 'default';
  }
};
