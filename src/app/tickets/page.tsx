import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { Heading } from '@/components/heading';
import { Placeholder } from '@/components/placeholder';
import { Spinner } from '@/components/spinner';
import { TicketList } from '@/features/ticket/components/ticket-list';

const TicketsPage = () => {
  return (
    <div className="flex-1 flex flex-col gap-y-8">
      {/* Custom component */}
      <Heading
        title="Tickets"
        description="All your tickets at one place"
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
