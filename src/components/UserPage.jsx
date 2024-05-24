import React from 'react'
import { UserStorage } from '../services/LoginService';

const UserPage = () => {
    const { userLogout } = UserStorage();

    const handleLogout = () => {
      userLogout();
    };
  
    return <button onClick={handleLogout} className="bg-[#f5523d] hover:bg-gray-500 rounded-md font-medium px-6 py-3 mb-4 md:mb-0 md:mr-4">Logout</button>;
}

export default UserPage