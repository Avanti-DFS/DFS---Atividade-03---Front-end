import React from 'react';
import closeIcon from "../assets/close.svg";

function formatarData(data) {
  const dataObj = new Date(data);
  return dataObj.toLocaleDateString('pt-BR');
}

export default function EventModal({ isOpen, onClose, event }) {
  
  if(isOpen && event) {
    return (
      <div className="fixed top-0 bottom-0 left-0 right-0 bg-black bg-opacity-70 z-50 flex items-center justify-center">
        <div className="bg-white rounded-lg p-20 relative w-3/4 h-auto flex flex-col">
          <div className="flex">
            <div className="pr-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">{event.nome}</h2>
              <p className="text-gray-600 font-medium">Data: {formatarData(event.data)}</p>
              <p className="text-gray-600 font-medium">Descrição: {event.descricao}</p>
            </div>
            <div className="border-l pl-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Detalhes do Evento</h3>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
            <button className="bg-[#f5ac3d] hover:bg-gray-500 rounded-md font-medium px-6 py-3">Inscreva-se</button>
            <button className="bg-[#f5523d] hover:bg-gray-500 rounded-md font-medium px-6 py-3 mb-4 md:mb-0 md:mr-4">Deletar Evento</button>
          </div>
          <img src={closeIcon} alt="Fechar" onClick={onClose} className="absolute top-0 right-0 -mt-4 -mr-4 cursor-pointer"/>
        </div>
      </div>
    )
  }  

  return null;
}
