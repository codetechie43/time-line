import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Timeline from './Timeline';

const events = [
  { title: 'Event 1', description: 'Description for event 1', date: '2024-01-01', image: 'https://via.placeholder.com/200' },
  { title: 'Event 2', description: 'Description for event 2', date: '2024-02-01', image: 'https://via.placeholder.com/200' },
  { title: 'Event 3', description: 'Description for event 3', date: '2024-03-01', image: 'https://via.placeholder.com/200' },
];

test('renders Timeline component', () => {
  render(<Timeline events={events} />);
  events.forEach((event) => {
    expect(screen.getByText(event.title)).toBeInTheDocument();
    expect(screen.getByText(event.description)).toBeInTheDocument();
    expect(screen.getByText(event.date)).toBeInTheDocument();
  });
});

test('expands event details on click', () => {
  render(<Timeline events={events} />);
  
  const event1 = screen.getByText('Event 1');
  fireEvent.click(event1);

  const details = screen.getByText(/more details about event 1/i);
  expect(details).toBeInTheDocument();
});

test('collapses event details on second click', () => {
  render(<Timeline events={events} />);

  const event1 = screen.getByText('Event 1');
  fireEvent.click(event1);

  const details = screen.getByText(/more details about event 1/i);
  expect(details).toBeInTheDocument();

  fireEvent.click(event1);
  expect(details).not.toBeInTheDocument();
});
