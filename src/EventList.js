import React from 'react';
import Event from './Event';

function EventList(props) {
    let fixedEvent = {
        name: "Fixed event",
        organizer: "The organizer",
        numberOfParticipants: 100,
        date: "31-01-2020"
    };
    
    return (
        <div className="event-list">
            <h1>Events this year</h1>
            <div>
            {[fixedEvent, ...props.eventList].map(event=> <Event eventInfo={event}></Event>)}
            </div>
        </div>
    );

}

export default EventList;