import { Publisher, OrderCreatedEvent, Subjects } from '@arsalonamini/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
