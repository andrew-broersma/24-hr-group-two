import React, { useState, useEffect } from "react";
import NASA from './NASA'
import Weather from "./Weather";
import Ticketmaster from "./Ticketmaster";
import { Accordion, AccordionHeader, AccordionItem, Table } from 'reactstrap'

const DisplayApis = (props) => {


    return(
        <div>
            <Accordion open="1" toggle={function noRefCheck(){}}>
                <AccordionItem>
                    <AccordionHeader targetId="1">
                        NASA api
                    </AccordionHeader>
                    <AccordionItem accordionId="1">
                        <NASA location={props.location} />
                    </AccordionItem>
                </AccordionItem>
                <AccordionItem>
                    <AccordionHeader targetId="2">
                        Weather api
                    </AccordionHeader>
                    <AccordionItem accordionId="2">
                        <Weather lat={props.lat} lon={props.lon} />
                    </AccordionItem>
                </AccordionItem>
                <AccordionItem>
                    <AccordionHeader targetId="3">
                        TicketMaster api
                    </AccordionHeader>
                    <AccordionItem accordionId="3">
                        <Table
                            bordered
                            responsive
                            size="sm"
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
                    </AccordionItem>
                </AccordionItem>
            </Accordion>
        </div>
    )
}

export default DisplayApis;
