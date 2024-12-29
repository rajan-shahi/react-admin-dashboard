export enum Theme {
  Light = 'light',
  Dark = 'dark',
}

export type MenuItem = {
  label: string;
  icon: JSX.Element;
  path: string;
};

export enum PaymentMethod {
  CreditCard = 'creditCard',
  Paypal = 'paypal',
}

export enum OrderStatus {
  Processing = 'processing',
  Canceled = 'canceled',
  Completed = 'completed',
}

export type Order = {
  id: string;
  customerName: string;
  customerImageUrl: string;
  orderNumber: number;
  totalAmount: number;
  paymentMethod: PaymentMethod;
  orderDate: Date;
  status: OrderStatus;
};

export type CustomerReview = {
  id: string;
  author: string;
  authorImageUrl: string;
  rating: number;
  text: string;
};
