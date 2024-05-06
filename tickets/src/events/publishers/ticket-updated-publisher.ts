import { Publisher, Subjects, TicketUpdatedEvent } from '@arsalonamini/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  subject: Subjects.TicketUpdated = Subjects.TicketUpdated;
}
