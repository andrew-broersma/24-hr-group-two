import React, { useState, useEffect } from "react";
import NASA from "./NASA";
import Weather from "./Weather";
import Ticketmaster from "./Ticketmaster";

const DisplayApis = (props) => {

    return(
        <div>
            <NASA  lat={props.lat} lon={props.lon}/>
            <Weather lat={props.lat} lon={props.lon}/>
            <Ticketmaster lat={props.lat} lon={props.lon}/>


    return(
        <div>
            <NASA location={props.location} />
            <Weather lat={props.lat} lon={props.lon} />
            <Ticketmaster location={props.location} />
        </div>
    )
}

export default DisplayApis;