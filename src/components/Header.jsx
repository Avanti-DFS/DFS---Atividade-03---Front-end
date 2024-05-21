import React from 'react';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 bg-white-200 p-4">
      <h1 className='w-full text-3xl font-bold'>Logo</h1>
      <ul className='flex'>
        <li className='p-4'>Home</li>
        <li className='p-4'>Eventos</li>
        <li className='p-4'>Sobre</li>
        <li className='p-4'><a href="#" className='bg-[#f5ac3d] w-[200px] rounded-md font-medium my-6 mx-auto py-3 px-6'>Login</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
