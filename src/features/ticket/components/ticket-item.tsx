import { Ticket } from '@prisma/client';
import clsx from 'clsx';
import {
  LucidePencil,
  LucideSquareArrowOutUpRight,
  LucideTrash,
} from 'lucide-react';
import Link from 'next/link';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { deleteTicket } from '@/features/ticket/actions/delete-ticket';
import { TICKET_ICONS } from '@/features/ticket/constants';
import { ticketEditPath, ticketPath } from '@/paths';
import { Button } from '../../../components/ui/button';

type TicketItemProps = {
  ticket: Ticket;
  isDetail?: boolean;
};

const TicketItem = ({ ticket, isDetail }: TicketItemProps) => {
  const detailButton = (
    <Button variant={'outline'} size={'icon'} asChild>
      <Link prefetch href={ticketPath(ticket.id)} className="text-sm">
        <LucideSquareArrowOutUpRight className="h-4 w-4" />
      </Link>
    </Button>
  );

  const editButton = (
    <Button variant={'outline'} size={'icon'} asChild>
      <Link
        prefetch
        href={ticketEditPath(ticket.id)}
        className="text-sm"
      >
        <LucidePencil className="h-4 w-4" />
      </Link>
    </Button>
  );

  const deleteButton = (
    <form action={deleteTicket.bind(null, ticket.id)}>
      <Button variant={'outline'} size={'icon'}>
        <LucideTrash className="h-4 w-4" />
      </Button>
    </form>
  );

  return (
    <div
      className={clsx('w-full flex gap-x-1', {
        'max-w-[520px]': isDetail,
        'max-w-[420px]': !isDetail,
      })}
    >
      <Card key={ticket.id} className="w-full">
        <CardHeader>
          <CardTitle className="flex gap-x-2">
            <span>{TICKET_ICONS[ticket.status]}</span>
            <span className="truncate">{ticket.title}</span>
          </CardTitle>
        </CardHeader>

        <CardContent>
          {/* How to add Conditional Class Name using clsx library*/}
          <span
            className={clsx('whitespace-break-spaces', {
              'line-clamp-3': !isDetail,
            })}
            // className={clsx('text-sm text-slate-500 truncate', {
            //   'line-through': ticket.status === 'DONE',
            // })}
          >
            {ticket.content}
          </span>
        </CardContent>
      </Card>
      {
        <div className="flex flex-col gap-y-1">
          {isDetail ? (
            <>
              {editButton}
              {deleteButton}
            </>
          ) : (
            <>
              {detailButton}
              {editButton}
            </>
          )}
        </div>
      }
    </div>
  );
};

export { TicketItem };
