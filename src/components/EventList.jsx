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

    function formatarData(data) {
        const dataObj = new Date(data);
        return dataObj.toLocaleDateString('pt-BR');
    }


    useEffect(() => {
        getAllEventos();
    }, [])

    return (
        <div className="grid grid-cols-2 gap-4">
          {eventosRender.map(event => (
            <div key={event.id} className="flex justify-center">
              <EventCard name={event.nome} date={formatarData(event.data)} />
            </div>
          ))}
        </div>
      );
      
    }

export default EventList