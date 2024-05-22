import React from 'react';
import logo from "../assets/logo.svg"
const Navbar = () => {
  return (
    <nav className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 bg-white-200 p-4">
      <h1 className='w-full max-w-16'><img src={logo} alt="" /></h1>
      <ul className='flex'>
        <li className='p-4 font-medium'>Home</li>
        <li className='p-4 font-medium'>Eventos</li>
        <li className='p-4 font-medium'>Sobre</li>
        <li className='p-4'><a href="#" className='bg-[#f5ac3d] w-[200px] rounded-md font-medium my-6 mx-auto py-3 px-6'>Login</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
