import React, { useState, useEffect } from 'react';
import { useParams, useNavigate  } from 'react-router-dom';
import { createCategoria, getCategoriaById, updateCategoria } from '../services/CategoriaService';

function CategoriaForm() {
    const [categoria, setCategoria] = useState('');
    const { id } = useParams();
    const navigate = useNavigate();
    const token = localStorage.getItem('token');

    useEffect(() => {
        async function setForm() {
            try {
                if(id) {
                    const categoria = await getCategoriaById(id, token);
                    setCategoria(categoria.categoria);
                }
            } catch (error) {
                console.log("Error")
            }
        }

        setForm();
    }, [id]);
  
    const handle = async (e) => {
        e.preventDefault();
        const data = {categoria};
        if(id){
            await updateCategoria(id, data, token);
        } else {
            await createCategoria(data, token);
        }
        navigate("/");   
    };
  
    return (
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Crie uma Categoria
          </h1>
          <form onSubmit={handle} className="space-y-4 md:space-y-6" action="#">
          <div>
            <label htmlFor="categoria" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Categoria</label>
            <input type="text" name="categoria" id="categoria" value={categoria} onChange={e => setCategoria(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Nome da categoria" required />
            </div>
          <div className="flex items-start">
          </div>
          <button type="submit" className="w-full text-black bg-[#f5ac3d] hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Criar uma Categoria</button>
          <p className="text-sm font-light text-gray-500 dark:text-gray-400">
            Already have an account? <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</a>
          </p>
        </form>
        </div>
      </div>
    </div>
        
      );
  }

export default CategoriaForm;