import React, { useEffect, useState } from 'react';

const AllEvents = () => {
    const [events, setEvents] = useState([])

    useEffect(() => {
        fetch('https://mosque-management-server.vercel.app/events')
            .then(res => res.json())
            .then(data => setEvents(data))
    }, [])
    return [events, setEvents]
};

export default AllEvents;