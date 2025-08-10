import { initialTickets } from '@/data';
import { Ticket } from '../types';

export const getTickets = async (): Promise<Ticket[]> => {
  //Setting Artificial delay
  await new Promise((resolve) => setTimeout(resolve, 2000));

  //   throw new Error('Failed to fetch tickets');

  //return initialTickets;
  return new Promise((resolve) => {
    resolve(initialTickets);
  });
};
