import React from 'react';
import './App.css';
import EventList from './EventList.js';

function App() {
  return (
    <div className="App">      
      <EventList eventList={[{name: "Mastering web app with React", organizer: "SoC", numberOfParticipants: 15}]}></EventList>
    </div>
  );
}

export default App;
