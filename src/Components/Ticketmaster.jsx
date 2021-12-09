import React, { useState, useEffect } from "react";
// import Geohash from 'latlon-geohash';
import TicketmasterDisplay from "./TicketmasterDisplay";

const Ticketmaster = ({ lat, lon }) => {

    const [events, setEvents] = useState([])

    useEffect(() => {

    const api_key = "r3QXcE7AnEFteohV2xAvWfZga1rD0bwF"
    const url = `https://app.ticketmaster.com/discovery/v2/events.json?apikey=${api_key}&latlon=${lat},${lon}`
    

    const fetchEvents = (url) => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => setEvents(data._embedded.events))
            .catch((err) => console.log(err))
        };
        fetchEvents(url);
    }, [lon]);

    console.log(events)
    return (
        <>
            <TicketmasterDisplay events={events}/>
        </>
    )
}

export default Ticketmaster;