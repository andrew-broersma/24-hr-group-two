import React, { useState, useEffect } from "react";
import NASA from "./NASA";
import Weather from "./Weather";
import Ticketmaster from "./Ticketmaster";

const DisplayApis = () => {

    return(
        <div>
            <NASA />
            <Weather />
            <Ticketmaster />
        </div>
    )
}

export default DisplayApis;