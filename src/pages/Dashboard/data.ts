import { CustomerReview, Order, OrderStatus, PaymentMethod } from 'types';

export const orders: Order[] = [
  {
    id: 'order-1',
    customerName: 'John Doe',
    customerImageUrl:
      'https://gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=30',
    orderDate: new Date(),
    orderNumber: 5478,
    paymentMethod: PaymentMethod.CreditCard,
    status: OrderStatus.Completed,
    totalAmount: 950,
  },
  {
    id: 'order-1',
    customerName: 'John Doe',
    customerImageUrl:
      'https://gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=30',
    orderDate: new Date(),
    orderNumber: 5478,
    paymentMethod: PaymentMethod.CreditCard,
    status: OrderStatus.Processing,
    totalAmount: 950,
  },
  {
    id: 'order-2',
    customerName: 'John Doe',
    customerImageUrl:
      'https://gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=30',
    orderDate: new Date(),
    orderNumber: 5479,
    paymentMethod: PaymentMethod.Paypal,
    status: OrderStatus.Processing,
    totalAmount: 750,
  },
  {
    id: 'order-3',
    customerName: 'John Doe',
    customerImageUrl:
      'https://gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=30',
    orderDate: new Date(),
    orderNumber: 5480,
    paymentMethod: PaymentMethod.CreditCard,
    status: OrderStatus.Canceled,
    totalAmount: 905,
  },
  {
    id: 'order-4',
    customerName: 'John Doe',
    customerImageUrl:
      'https://gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=30',
    orderDate: new Date(),
    orderNumber: 5481,
    paymentMethod: PaymentMethod.Paypal,
    status: OrderStatus.Completed,
    totalAmount: 1050,
  },
  {
    id: 'order-5',
    customerName: 'John Doe',
    customerImageUrl:
      'https://gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=30',
    orderDate: new Date(),
    orderNumber: 5482,
    paymentMethod: PaymentMethod.CreditCard,
    status: OrderStatus.Canceled,
    totalAmount: 500,
  },
];

export const reviews: CustomerReview[] = [
  {
    id: 'review-1',
    author: 'John Doe',
    authorImageUrl:
      'https://gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=30',
    rating: 5,
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, eum.',
  },
  {
    id: 'review-2',
    author: 'John Doe',
    authorImageUrl:
      'https://gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=30',
    rating: 2,
    text: 'Lorem ipsum dolor sit amet consectetur ',
  },
  {
    id: 'review-3',
    author: 'John Doe',
    authorImageUrl:
      'https://gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=30',
    rating: 4,
    text: 'Consectetur adipisicing elit. Ipsam, eum.',
  },
  {
    id: 'review-4',
    author: 'John Doe',
    authorImageUrl:
      'https://gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=30',
    rating: 3,
    text: 'Lorem ipsum dolor ',
  },
  {
    id: 'review-5',
    author: 'John Doe',
    authorImageUrl:
      'https://gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=30',
    rating: 5,
    text: 'Ipsam, eum.',
  },
];
