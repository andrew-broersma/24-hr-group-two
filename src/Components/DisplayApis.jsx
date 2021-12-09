import React, { useState, useEffect } from "react";
import NASA from './NASA'
import Weather from "./Weather";
import Ticketmaster from "./Ticketmaster";
import { Table } from 'reactstrap'

const DisplayApis = (props) => {


    return(
        <div>
            <NASA location={props.location} />
            <Weather lat={props.lat} lon={props.lon} />
            <Table
                bordered
                dark
                responsive
                striped
            >
                        <thead>
                            <tr>
                                <th>
                                    Event
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <Ticketmaster lat={props.lat} lon={props.lon} />
                        </tbody>
            </Table>
        </div>
    )
}

export default DisplayApis;