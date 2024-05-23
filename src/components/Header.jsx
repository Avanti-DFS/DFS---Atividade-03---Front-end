import React from 'react';
import logo from "../assets/logo.svg"
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="bg-white-200 p-4">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-24">
        <Link to="/" className='flex-shrink-0'>
          <img src={logo} alt="Logo" className='h-10' />
        </Link>
        <ul className='flex space-x-4'>
          <li><Link to="/" className='font-medium'>Home</Link></li>
          <li><Link to="/eventos" className='font-medium'>Eventos</Link></li>
          <li className='font-medium'>Sobre</li>
          <li><a href="#" className='bg-[#f5ac3d] rounded-md font-medium px-6 py-3'>Login</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
