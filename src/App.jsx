// App.js
import React, { useState } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import EventList from './components/EventList';
import { Routes, Route } from 'react-router-dom';
import RegisterForm from './components/RegisterForm';
import LoginForm from './components/LoginForm';
import EventModal from './components/EventModal';


function App() {
  const [openEventModal, setOpenEventModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleEventClick = (event) => {
    setSelectedEvent(event);
    setOpenEventModal(true);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-grow">
        <Routes>
          <Route path="eventos" element={<EventList onEventClick={handleEventClick} />} />
          <Route path="/" element={<Home onEventClick={handleEventClick} />} />
          <Route path="/registrar" element={<RegisterForm />} />
          <Route path="/entrar" element={<LoginForm />} />
        </Routes>
      </div>
      <EventModal  isOpen={openEventModal} setEventModalOpen={() => setOpenEventModal(!openEventModal)} >
        {selectedEvent && (
          <div>
            <h5 className="text-start mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{selectedEvent.name}</h5>
            <p className="text-start mb-3 font-normal text-gray-700 dark:text-gray-400">{selectedEvent.date}</p>
            <img className="object-cover w-full rounded-lg h-120 md:h-auto md:w-72 md:rounded-none md:rounded-l-lg" src="src\assets\nainoa-shizuru-NcdG9mK3PBY-unsplash.jpg" alt="" />
             {/* Adicione mais detalhes do evento conforme necessário */}
          </div>
         )}
       </EventModal>
      <Footer />
    </div>
  );
}

export default App;
