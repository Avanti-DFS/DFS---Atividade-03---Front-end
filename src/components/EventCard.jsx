import React from 'react';

const EventCard = ({ name, date, onClick }) => {
  return (
    <div onClick={onClick} className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700" style={{ minWidth: '576px', minHeight: '142px' }}>
      <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="src\assets\nainoa-shizuru-NcdG9mK3PBY-unsplash.jpg" alt="" />
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="text-start mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
        <p className="text-start mb-3 font-normal text-gray-700 dark:text-gray-400">{date}</p>
      </div>
    </div>
  );
};  

export default EventCard;
