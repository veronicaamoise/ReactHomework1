import React from 'react';

class Event extends React.Component {
    constructor(props) {
        super(props);
        this.state = { ...this.defaultEventValues, ...props.eventInfo };
    }

    defaultEventValues = {
        name: "No name",
        organizer: "Organizer unknowm",
        numberOfParticipants: 0,
        date: "01-01-2000"
    };

    render() {
        return (
            <div className="event">
                <h3> {this.state.name}</h3>
                <div>
                    <p> Organized by : {this.state.organizer}</p>
                    <p> Attended by {this.state.numberOfParticipants} people</p>
                    <p> Occured on : {this.state.date}</p>
                </div>
            </div>
        );
    }
}

export default Event;