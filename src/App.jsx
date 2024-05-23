// App.js
import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import EventList from './components/EventList';
import { Routes, Route } from 'react-router-dom';
import RegisterForm from './components/RegisterForm';
import LoginForm from './components/LoginForm';
function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-grow">
        <Routes>
          <Route path="eventos" element={<EventList />} />
          <Route path="/" element={<Home />} />
          <Route path="/registrar" element={<RegisterForm />} />
          <Route path="/entrar" element={<LoginForm />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
