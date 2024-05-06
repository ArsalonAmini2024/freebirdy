import { Publisher, Subjects, TicketCreatedEvent } from '@arsalonamini/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  subject: Subjects.TicketCreated = Subjects.TicketCreated;
}
