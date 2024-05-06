import { Subjects, Publisher, PaymentCreatedEvent } from '@arsalonamini/common';

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  subject: Subjects.PaymentCreated = Subjects.PaymentCreated;
}
