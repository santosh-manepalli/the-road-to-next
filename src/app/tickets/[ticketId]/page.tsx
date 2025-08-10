import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Placeholder } from '@/components/placeholder';
import { TicketItem } from '@/components/ticket-item';
import { Button } from '@/components/ui/button';
import { getTicket } from '@/features/ticket/queries/get-ticket';
import { ticketPath, ticketsPath } from '@/paths';

type TicketPageProps = {
  params: {
    ticketId: string;
  };
};

const TicketPage = async ({ params }: TicketPageProps) => {
  const ticket = await getTicket(params.ticketId);

  if (!ticket) {
    notFound();
    // return (
    //   <div className="flex-1 flex">
    //     <Placeholder
    //       label="Ticket not found"
    //       button={
    //         <Button asChild variant={'outline'}>
    //           <Link href={ticketsPath()}>Go to Tickets </Link>
    //         </Button>
    //       }
    //     />

    //     <Placeholder label="Ticket not found" />
    //   </div>
    // );
  }

  return (
    <div className="flex justify-center animate-fade-from-top">
      {/* <h1 className="text-lg">{ticket.title}</h1>
      <h1 className="text-sm">{ticket.content}</h1> */}
      <TicketItem ticket={ticket} isDetail={true} />
    </div>
  );
};

export default TicketPage;
