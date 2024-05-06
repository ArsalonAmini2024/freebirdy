import { Subjects, Publisher, OrderCancelledEvent } from '@arsalonamini/common';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}
