import React, { useEffect } from 'react';
import logo from "../assets/logo.svg"
import { Link, useNavigate } from "react-router-dom";
import { UserStorage, getUserName } from '../services/LoginService';


const Navbar = () => {
  const { userLogout } = UserStorage();
  const navigate = useNavigate();


    const userName = getUserName();

  return (
    <nav className="bg-white-200 p-4">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-24">
        <Link to="/" className='flex-shrink-0'>
          <img src={logo} alt="Logo" className='h-10' />
        </Link>
        <ul className='flex space-x-4'>
          <li><Link to="/" className='font-medium'>Home</Link></li>
          <li><Link to="/eventos" className='font-medium'>Eventos</Link></li>
          <li className='font-medium'>
            <Link to="/sobre">Sobre</Link></li>
          {userName ? (
            <li><Link to="/perfil" className='bg-[#f5ac3d] rounded-md font-medium px-6 py-3'>{JSON.parse(userName)}</Link></li>
          ) : (
            <li><Link to="/entrar" className='bg-[#f5ac3d] rounded-md font-medium px-6 py-3'>Login</Link></li>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
