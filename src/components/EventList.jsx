import React, { useEffect, useState } from 'react'
import { getEventos } from '../services/EventService';
import EventCard from './EventCard';


const EventList = () => {
    const [eventos, setEventos] = useState([]);
    const [eventosRender, setEventosRender] = useState([]);

    async function getAllEventos() {
        try {
            const data = await getEventos();
            setEventos(data);
            setEventosRender(data);
        } catch (error) {
            console.log("Error getEventos: " + error);
        }
    }

    useEffect(() => {
        getAllEventos();
    }, [])



    return (
        <div>
            <ul className="list-group">
                {eventosRender.map(event => (
                    <li key={event.id} className="list-group-item flex justify-between items-center">
                        <EventCard name={event.nome} date={event.data} />
                    </li>
                ))}
            </ul>
        </div>
    )
    }

export default EventList