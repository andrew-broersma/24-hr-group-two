import React from "react";

const TicketmasterDisplay = ({events}) => {
    return(
        <>
        {
            events.map((events, key) => {
                return(
                    <tbody>
                        <tr key={events.id}>
                            <th scope="row" >
                                {events.name}
                            </th>
                        </tr>
                    </tbody>
                )
            })
        }
        </>
    )
}

export default TicketmasterDisplay