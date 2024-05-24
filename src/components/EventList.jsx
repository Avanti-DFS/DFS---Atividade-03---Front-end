import React, { useEffect, useState } from 'react';
import { getEventos } from '../services/EventService';
import EventCard from './EventCard';
import searchIcon from "../assets/search.svg";
import EventModal from './EventModal';
import { Link } from 'react-router-dom';

const EventList = ({ onEventClick }) => {
    const [eventos, setEventos] = useState([]);
    const [eventosRender, setEventosRender] = useState([]);
    const [search, setSearch] = useState("");
    const [selectedEvent, setSelectedEvent] = useState(null); 
    const [modalOpen, setModalOpen] = useState(false); 

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
    }, []);

    useEffect(() => {
        const filtered = eventos.filter((evento) =>
            Object.values(evento).some((value) =>
                value.toString().toLowerCase().includes(search.toLowerCase())
            )
        );
        setEventosRender(filtered);
    }, [search, eventos]);

    const handleSearchChange = (e) => {
        const value = e.target.value;
        setSearch(value);
        if (value === "") {
            setEventosRender(eventos);
        }
    };

    const handleEventClick = (event) => {
        setSelectedEvent(event);
        setModalOpen(true); 
    };

    const closeModal = () => {
        setModalOpen(false); 
    };

    const updateEventList = (deletedEventId) => {
        const updatedEventos = eventos.filter(event => event.id !== deletedEventId);
        setEventos(updatedEventos);
        setEventosRender(updatedEventos);
    };

    return (
        <>
            <div className="mb-3 ml-12 flex">
                <div style={{ width: '250px' }} className="relative flex">
                    <input
                        type="text"
                        className="block flex-auto rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
                        placeholder="Search..."
                        value={search}
                        onChange={handleSearchChange}
                    />
                    <span className='input-group-text flex items-center whitespace-nowrap rounded px-3 py-1.5 text-center text-base font-normal text-neutral-700 dark:text-neutral-200'>
                        <img src={searchIcon} alt="Search" className="w-5 h-5" />
                    </span>
                </div>
                <button
                  type="button"
                  className="ml-4 py-2 px-4 bg-green-500 text-white font-medium rounded-lg shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                  <Link to="/criarevento">Adicionar Evento</Link>
                </button>
            </div>
            <div className="grid grid-cols-2 gap-4">
                {eventosRender.map(event => (
                    <div key={event.id} className="flex justify-center">
                        <EventCard 
                            name={event.nome} 
                            date={formatarData(event.data)} 
                            onClick={() => handleEventClick(event)} 
                        />
                    </div>
                ))}
            </div>
            {/* Renderizar o modal apenas se estiver aberto */}
            <EventModal isOpen={modalOpen} onClose={closeModal} event={selectedEvent} onDelete={updateEventList} />
        </>
    );

}

export default EventList;
