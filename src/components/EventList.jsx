import React, { useEffect, useState } from 'react'
import { getEventos } from '../services/EventService';
import EventCard from './EventCard';


const EventList = () => {
    const [eventos, setEventos] = useState([]);
    const [eventosRender, setEventosRender] = useState([]);
    const [search, setSearch] = useState("");

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

    useEffect(() => {
        const filtered = eventos.filter((evento) =>
          Object.values(evento).some((value) =>
            value.toString().toLowerCase().includes(search.toLowerCase())
          )
        );  
        setEventosRender(filtered)
      },[search])

      const handleSearchChange = (e) => {
        const value = e.target.value;
        setSearch(value);
        if (value === "") {
          getEventos
          setEventosRender(eventos)
        }
      };

    return (
        <>
            <div className="mb-3">
                <input
                    type="text"
                    className="border border-gray-300 rounded-md py-2 px-4 w-full"
                    placeholder="Search..."
                    value={search}
                    onChange={handleSearchChange}
                />
            </div>
            <div className="grid grid-cols-2 gap-4">
            {eventosRender.map(event => (
                <div key={event.id} className="flex justify-center">
                <EventCard name={event.nome} date={formatarData(event.data)} />
                </div>
            ))}
            </div>
        </>
        
      );
      
    }

export default EventList