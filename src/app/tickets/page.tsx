import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { CardCompact } from '@/components/card-compact';
import { Heading } from '@/components/heading';
import { Placeholder } from '@/components/placeholder';
import { Spinner } from '@/components/spinner';
import { TicketList } from '@/features/ticket/components/ticket-list';
import { TicketUpsertForm } from '@/features/ticket/components/ticket-upsert-form';

// export const dynamic = 'force-dynamic';

const TicketsPage = () => {
  return (
    <div className="flex-1 flex flex-col gap-y-8">
      {/* Custom component */}
      <Heading
        title="Tickets"
        description="All your tickets at one place"
      />

      {/* Configuration over Composition */}
      <CardCompact
        title="Create Ticket"
        description="A new ticket will be created"
        className="w-full max-w-[420px] self-center"
        content={<TicketUpsertForm />}
      />

      {/* This is a suspense boundary, it will suspend the component until the data is fetched */}
      {/* If we don't use suspense, we will have to handle loading state manually */}
      {/* Suspend everything with in asnchronous operation*/}
      <ErrorBoundary
        fallback={<Placeholder label="Something went wrong!" />}
      >
        {/* Suspense is used to handle loading state automatically */}
        <Suspense fallback={<Spinner />}>
          <TicketList />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
};

export default TicketsPage;
