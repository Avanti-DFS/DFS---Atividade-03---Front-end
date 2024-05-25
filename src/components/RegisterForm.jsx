import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link  } from 'react-router-dom';
import { createClient, getClientById, updateClient } from "../services/ClientService";
import HeadHelper from '../helper/HeadHelper';

function RegisterForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isAdmin, setIsAdmin] = useState(false);
    const { id } = useParams();
    const navigate = useNavigate();
    
    useEffect(() => {
        async function setForm() {
            try {
                if(id) {
                    const client = await getClientById(id);
                    setName(client.name);
                    setEmail(client.email);
                    setPassword(client.password);
                    setIsAdmin(client.isAdmin);
                }
            } catch (error) {
                console.log("Error")
            }
        }

        setForm();
    }, [id]);
  
    const handle = async (e) => {
        e.preventDefault();
        const data = {nome: name, email, password, isAdmin};
        if(id){
            await updateClient(id, data);
        } else {
            await createClient(data);
        }
        navigate("/");   
    };
  
    return (
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <HeadHelper title="Registrar" />
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Crie sua conta
          </h1>
          <form onSubmit={handle} className="space-y-4 md:space-y-6" action="#">
          <div>
            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nome</label>
            <input type="text" name="name" id="name" value={name} onChange={e => setName(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Seu nome" required />
            </div>
            <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
            <input type="email" name="email" id="email" value={email} onChange={e => setEmail(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="exemplo@seuemail.com" required />
            </div>
            <div>
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Senha</label>
            <input type="password" name="password" id="password" placeholder="••••••••" value={password} onChange={e => setPassword(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
            </div>
            <div className="flex items-center mb-4">
                <input id="Admin-checkbox" type="checkbox" value={isAdmin} onChange={e => setIsAdmin(e.target.checked)} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                <label htmlFor="Admin-checkbox" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">É administrador?</label>
            </div>
          <div className="flex items-start">
          </div>
          <button type="submit" className="w-full text-black bg-[#f5ac3d] hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Cria uma conta</button>
        </form>
        <div className="mt-4 text-gray-600 text-sm text-center">
                        Já tem uma conta? <Link to="/entrar" className="text-primary-600 hover:underline text-[#4f3df5] ">Faça login aqui</Link>.
                    </div>
        </div>
      </div>
    </div>
        
      );
  }

export default RegisterForm