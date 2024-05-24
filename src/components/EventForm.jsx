import React, { useState, useEffect } from 'react';
import { getCategorias } from '../services/CategoriaService';
import { getLocais } from '../services/LocalService';
import { useParams, useNavigate } from 'react-router-dom';
import { createEvento, getEventoById, updateEvento } from '../services/EventService';
import EventModal from './EventModal';
import { getLocalById } from '../services/LocalService';
import { getCategoriaById } from '../services/CategoriaService';

const EventForm = () => {
    const [name, setName] = useState(''); 
    const [date, setDate] = useState(''); 
    const [description, setDescription] = useState('');
    const [categorias, setCategorias] = useState([]);
    const [locais, setLocais] = useState([]);   
    const { id } = useParams();
    const navigate = useNavigate();
    const [loadingCategorias, setLoadingCategorias] = useState(true);
    const [loadingLocais, setLoadingLocais] = useState(true);

    const token = localStorage.getItem('token');

    function formatarData(dataLocal) {
        const data = new Date(dataLocal);
        const dataUTC3 = new Date(data.getTime() - (data.getTimezoneOffset() * 60000));
        const dataFormatada = dataUTC3.toISOString().replace('Z', '-03:00');
      
        return dataFormatada;
    }

    useEffect(() => {
        async function setForm() {
            try {
                if(id) {
                    const evento = await getEventoById(id, token);
                    setName(evento.nome);
                    let data = new Date(evento.data);
                    let dataFormatada = data.toISOString().slice(0,16);
                    setDate(dataFormatada);
                    setDescription(evento.descricao);
                    const localData = await getLocalById(evento.local_id, token);
                    const categoriaData = await getCategoriaById(evento.categoria_id, token);
                    setCategorias([categoriaData]); 
                    setLocais([localData]); 
                }
            } catch (error) {
                console.log("Error")
            }
        }
        setForm();
    }, [id]);

    useEffect(() => {
        async function getAllCategorias() {
            try {
                const data = await getCategorias(token);
                setCategorias(data);
                setLoadingCategorias(false);
            } catch (error) {
                console.log("Error getCategorias: " + error);
            }
        }
      
        async function getAllLocais() {
            try {
                const data = await getLocais(token);
                setLocais(data);
                setLoadingLocais(false);
            } catch (error) {
                console.log("Error getLocais: " + error);
            }
        }

        getAllCategorias();
        getAllLocais();
    }, []);

    const handle = async (e) => {
        e.preventDefault();
        const selectedCategoria = e.target.elements.categoria.value;
        const selectedLocal = e.target.elements.local.value;
        const selectedDate = formatarData(date);

        const data = {nome: name, data: selectedDate, descricao: description, categoria_id: selectedCategoria, local_id: selectedLocal};
        if(id){
            await updateEvento(id, data, token);
        } else {
            await createEvento(data, token);
        }
        navigate("/eventos");   
    };

    if (!token) {
        return (
            <div className="w-[100vw] h-full justify-center items-center flex flex-col px-10 py-8 mt-8">
                <h1 className="text-3xl font-bold py-8 px-4 bg-red-400 rounded">Unauthorized</h1>
            </div>
        );
    }

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
                        {!loadingCategorias && (
                            <div>
                                <label htmlFor="categoria" className="block text-sm font-medium text-gray-900 dark:text-white">
                                    Escolha uma Categoria
                                </label>
                                <select id="categoria" name="categoria" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    {categorias.map(categoria => (
                                        <option key={categoria.id} value={categoria.id}>{categoria.categoria}</option>
                                    ))}
                                </select>
                            </div>
                        )}
                        {!loadingLocais && (
                            <div>
                                <label htmlFor="local" className="block text-sm font-medium text-gray-900 dark:text-white">
                                    Escolha um Local
                                </label>
                                <select id="local" name="local" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    {locais.map(local => (
                                        <option key={local.id} value={local.id}>{local.nome}</option>
                                    ))}
                                </select>
                            </div>
                        )}
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
