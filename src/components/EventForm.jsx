import React, { useState, useEffect } from 'react';
import { getCategorias } from '../services/CategoriaService';
import { getLocais } from '../services/LocalService';
import { useParams, useNavigate } from 'react-router-dom';
import { createEvento, getEventoById, updateEvento } from '../services/EventService';

const EventForm = () => {
    const [name, setName] = useState(''); 
    const [date, setDate] = useState(''); 
    const [description, setDescription] = useState('');
    const [categorias, setCategorias] = useState([]);
    const [categoriasRender, setCategoriasRender] = useState([]);
    const [locais, setLocais] = useState([]);   
    const [locaisRender, setLocaisRender] = useState([]);
    const { id } = useParams();
    const navigate = useNavigate();

    function formatarDataLocalParaUTC3(dataLocal) {
        // Obter data e hora local do campo datetime-local
        const data = new Date(dataLocal);
      
        // Converter para UTC-3
        const dataUTC3 = new Date(data.getTime() - (data.getTimezoneOffset() * 60000));
      
        // Formatar no formato ISO-8601 com fuso horário UTC-3
        const dataFormatada = dataUTC3.toISOString().replace('Z', '-03:00');
      
        return dataFormatada;
      }

    useEffect(() => {
        async function setForm() {
            try {
                if(id) {
                    const evento = await getEventoById(id);
                    setName(evento.nome);
                    setDate(evento.data);
                    setDescription(evento.descricao);
                    setCategorias(evento.categoria);
                    setLocais(evento.local);
                }
            } catch (error) {
                console.log("Error")
            }
        }
        setForm();
    }, [id]);

    const handle = async (e) => {
        e.preventDefault();
        const selectedCategoria = e.target.elements.categoria.value;
        const selectedLocal = e.target.elements.local.value;
        const selectedDate = formatarDataLocalParaUTC3(date);

        const data = {nome: name, data: selectedDate, descricao: description, categoria_id: selectedCategoria, local_id: selectedLocal};
        if(id){
            await updateEvento(id, data);
        } else {
            await createEvento(data);
        }
        navigate("/eventos");   
    };

    async function getAllCategorias() {
        try {
          const data = await getCategorias();
          setCategorias(data);
          setCategoriasRender(data);
        } catch (error) {
          console.log("Error getCategorias: " + error);
        }
      }

      async function getAllLocais() {
        try {
          const data = await getLocais();
          setLocais(data);
          setLocaisRender(data);
        } catch (error) {
          console.log("Error getLocais: " + error);
        }
      }

      useEffect(() => {
        getAllCategorias();
      }, []);

      useEffect(() => {
        getAllLocais();
      }, []);


    return (
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                        Crie um evento
                    </h1>
                    <form onSubmit={handle} className="space-y-4 md:space-y-6" action="#">
                        <div>
                            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nome</label>
                            <input type="text" name="name" id="name" value={name} onChange={e => setName(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Nome" required />
                        </div>
                        <div>
                            <label htmlFor="descricao" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Descrição</label>
                            <textarea type="text-area" name="description" id="description" placeholder="descrição do evento" value={description} onChange={e => setDescription(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                        </div>
                        <div>
                            <label htmlFor="date" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Data</label>
                            <input type="datetime-local" name="date" id="date" value={date} onChange={e => setDate(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                        </div>
                        <label htmlFor="categoria" className="block text-sm font-medium text-gray-900 dark:text-white">
                            Escolha uma Categoria
                        </label>
                        <select id="categoria" name="categoria" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            {categoriasRender.map(categoria => (
                                <option key={categoria.id} value={categoria.id}>{categoria.categoria}</option>
                            ))}
                        </select>
                        <label htmlFor="local" className="block text-sm font-medium text-gray-900 dark:text-white">
                            Escolha um Local
                        </label>
                        <select id="local" name="local" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            {locaisRender.map(local => (
                                <option key={local.id} value={local.id}>{local.nome}</option>
                            ))}
                        </select>
                        <div className="flex items-start">
                        </div>  
                        <button type="submit" className="w-full text-black bg-[#f5ac3d] hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Criar Evento</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default EventForm;
