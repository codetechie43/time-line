import React from 'react';
import Timeline from './Timeline';

const events = [
  { title: 'Event 1', description: 'Description for event 1', date: '2024-01-01', image: 'https://via.placeholder.com/200' },
  { title: 'Event 2', description: 'Description for event 2', date: '2024-02-01', image: 'https://via.placeholder.com/200' },
  { title: 'Event 3', description: 'Description for event 3', date: '2024-03-01', image: 'https://via.placeholder.com/200' },
  { title: 'Event 1', description: 'Description for event 1', date: '2024-01-01', image: 'https://via.placeholder.com/200' },
  { title: 'Event 2', description: 'Description for event 2', date: '2024-02-01', image: 'https://via.placeholder.com/200' },
  { title: 'Event 3', description: 'Description for event 3', date: '2024-03-01', image: 'https://via.placeholder.com/200' },
  { title: 'Event 1', description: 'Description for event 1', date: '2024-01-01', image: 'https://via.placeholder.com/200' },
  { title: 'Event 2', description: 'Description for event 2', date: '2024-02-01', image: 'https://via.placeholder.com/200' },
  { title: 'Event 3', description: 'Description for event 3', date: '2024-03-01', image: 'https://via.placeholder.com/200' },
  { title: 'Event 1', description: 'Description for event 1', date: '2024-01-01', image: 'https://via.placeholder.com/200' },
  { title: 'Event 2', description: 'Description for event 2', date: '2024-02-01', image: 'https://via.placeholder.com/200' },
  { title: 'Event 3', description: 'Description for event 3', date: '2024-03-01', image: 'https://via.placeholder.com/200' },
];

function App() {
  return (
    <div className="App">
      <Timeline events={events} />
    </div>
  );
}

export default App;

