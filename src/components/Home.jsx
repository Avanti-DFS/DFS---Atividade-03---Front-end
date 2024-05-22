import React from 'react';
import imagemIngresso from "../assets/ingresso.svg"
const Home = () => {
  return (
    <div className="min-h-screen bg-white-200 flex flex-col items-center justify-center">
      <div className="flex items-center justify-around w-full py-6">
        <div className='text-7xl font-bold break-words max-w-[400px]'>
          Procurando um evento
        </div>
        <div className='text-9xl font-bold absolute left-32'>?</div>
        <div className='max-w-[34rem]'> 
        <img src={imagemIngresso} alt="" />
        </div>
      </div>
      <p className="text-center max-w-xl">
        Explore uma variedade de eventos emocionantes que vão desde shows incríveis até experiências culturais inesquecíveis. Encontre o ingresso perfeito para sua próxima aventura e mergulhe em momentos que irão inspirar, emocionar e encantar.
      </p>
    </div>
  );
};

export default Home;
