import React from 'react';
import imagemIngresso from "../assets/ingresso.svg";
import EventCard from './EventCard';

const Home = ({ onEventClick }) => {
  return (
    <div className="min-h-screen bg-white-200 flex flex-col items-center justify-center">
      <div className="flex items-center justify-around w-full py-6">
        <div className='max-w-[34rem] relative'>
          <img src={imagemIngresso} alt="" style={{ width: '100%', height: '100%' }} />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-7xl font-bold break-words max-w-[400px]">
            Procurando um evento?
          </div>
        </div>
      </div>
      <p className="text-center text-2xl font-medium max-w-xl">
        Explore uma variedade de eventos emocionantes que vão desde shows incríveis até experiências culturais inesquecíveis. Encontre o ingresso perfeito para sua próxima aventura e mergulhe em momentos que irão inspirar, emocionar e encantar.
      </p>

      <EventCard 
        name="Conferência de Tecnologia" 
        date="15 de junho de 2024" 
        onClick={() => onEventClick({ name: "Conferência de Tecnologia", date: "15 de junho de 2024" })} 
      />
    </div>
  );
};

export default Home;
