import { faker } from '@faker-js/faker';

const statuses = ['Completed', 'In Progress'];

export const generateRandomEvents = (numEvents: number) => {
  const events = [];

  for (let i = 0; i < numEvents; i++) {
    events.push({
      eventName: faker.company.catchPhrase(),
      date: faker.date.future().toISOString().split('T')[0], // Format date as YYYY-MM-DD
      speaker: faker.name.fullName(),
      status: statuses[Math.floor(Math.random() * statuses.length)],
    });
  }

  return events;
};

export interface DataProps {
  eventName: string;
  date: string;
  speaker: string;
  status: string;
}

type DataPropsKeys = keyof DataProps;

interface UniqueProps {
  data: DataProps[];
  type: keyof DataProps;
}

export const getUniqueValue = ({ data, type }: UniqueProps) => {
  // Extract the unique values based on the specified key (type)
  const unique = data.map((val) => val[type]);

  // Return an array with 'all' and the unique values
  return [...new Set(unique)];
};
