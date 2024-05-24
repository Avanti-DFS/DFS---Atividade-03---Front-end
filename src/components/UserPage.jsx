import React from 'react'
import { UserStorage } from '../services/LoginService';

const UserPage = () => {
    const { userLogout } = UserStorage();
    const token = localStorage.getItem('token');

    const handleLogout = () => {
      userLogout();
    };

    if (!token) {
      return (
          <div className="w-[100vw] h-full justify-center items-center flex flex-col px-10 py-8 mt-8">
              <h1 className="text-3xl font-bold py-8 px-4 bg-[#f5ac3d] rounded">Faça login primeiro</h1>
          </div>
      );
  }
  
  return (
    <div className="flex justify-center items-center h-screen">
        <button onClick={handleLogout} className="bg-[#f5523d] hover:bg-gray-500 rounded-md font-medium px-6 py-3">Logout</button>
    </div>
);
}

export default UserPage