import React from "react";

const TicketmasterDisplay = (props) => {
    return(
        <>
        {
            props.events.map((events, key) => {
                return(
                    <tbody>
                        <tr >
                            <th scope="row" key={key}>
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