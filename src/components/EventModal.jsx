import React from 'react';
import closeIcon from "../assets/close.svg";

export default function EventModal({ isOpen, setEventModalOpen, children }) {
  
  if(isOpen) {
    return (
      <div className="fixed top-0 bottom-0 left-0 right-0 bg-black bg-opacity-70 z-50 flex items-center justify-center">
        <div className="bg-white rounded-lg p-20 relative w-3/4 h-auto flex flex-col">
          <div className="flex">
            <div className="pr-6">
              {children}
            </div>
            <div className="border-l pl-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Detalhes do Evento</h3>
              <p className="text-gray-600">{/* Adicione detalhes do evento aqui, se necessário */}</p>
            </div>
          </div>
          <div className="flex justify-end mt-4">
            <button className="bg-[#f5ac3d] hover:bg-gray-500 rounded-md font-medium px-6 py-3">Inscreva-se</button>
          </div>
          <img src={closeIcon} alt="Fechar" onClick={setEventModalOpen} className="absolute top-0 right-0 -mt-4 -mr-4 cursor-pointer"/>
        </div>
      </div>
    )
  }  

  return null;
}
