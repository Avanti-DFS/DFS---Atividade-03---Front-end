import { React, useEffect, useState } from 'react';
import { getLocais, deleteLocalById } from '../services/LocalService';
import { Link } from 'react-router-dom';
import HeadHelper from '../helper/HeadHelper';

const LocalList = () => {
    const [locais, setLocais] = useState([]);
    const [LocaisRender, setLocaisRender] = useState([]);

    const token = localStorage.getItem('token');

    async function getAllLocais() {
        try {
            const data = await getLocais(token);
            setLocais(data);
            setLocaisRender(data);
        } catch (error) {
            console.log("Error getCategorias: " + error);
        }
    }

    useEffect(() => {
        getAllLocais();
    }, []);

    const deleteLocal = async (id) => {
        try {
            await deleteLocalById(id, token);
            getAllLocais();
        } catch {
            console.error("Error deleteClient");
        }
    }

    if (!token) {
        return (
            <div className="w-[100vw] h-full justify-center items-center flex flex-col px-10 py-8 mt-8">
                <HeadHelper title="Locais" />
                <h1 className="text-3xl font-bold py-8 px-4 bg-red-400 rounded">Unauthorized</h1>
            </div>
        );
    }

    return (
        <>
            <div className="w-[100vw] h-full justify-center items-center flex flex-col px-10 py-8 mt-8">
            <HeadHelper title="Locais" />
                <h1 className="text-3xl font-bold py-8 px-4 bg-orange-400 rounded">LOCAIS</h1>
                <div className="flex flex-col">
                    <div className="overflow-x-auto mt-8 sm:-mx-6 items-center lg:-mx-8">
                        <div className="py-4 inline-block min-w-full sm:px-6 lg:px-8">
                            <div className="overflow-hidden">
                                <table className="min-w-full text-center">
                                    <thead className="border-b bg-gray-800">
                                        <tr>
                                            <th
                                                scope="col"
                                                className="text-sm font-medium text-white px-6 py-4"
                                            >
                                                #
                                            </th>
                                            <th
                                                scope="col"
                                                className="text-sm font-lg text-white px-6 py-4"
                                            >
                                                Local
                                            </th>
                                            <th
                                                scope="col"
                                                className="text-sm font-lg text-white px-6 py-4"
                                            >
                                                Endereço
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="border-black border-b-2">
                                        {locais.map((local, index) => (
                                            <tr
                                                key={local.id}
                                                className="bg-white border-b-2 border-black"
                                            >
                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 ">
                                                    {index + 1}
                                                </td>
                                                <td className="text-xl text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">
                                                    {local.nome}
                                                </td>
                                                <td className="text-xl text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">
                                                    {local.endereco}
                                                </td>
                                                <td className="text-sm flex justify-between  items-center text-gray-900 font-bold px-6 py-4 space-x-4 whitespace-nowrap">
                                                    <Link
                                                        to={`/criarlocal/${local.id}`}
                                                        className="bg-blue-600 text-white px-6 py-2 rounded-lg"
                                                    >
                                                        Edit
                                                    </Link>
                                                    <Link
                                                        onClick={() => deleteLocal(local.id)}
                                                        to={"#"}
                                                        className="bg-red-600 text-white px-6 py-2 rounded-lg"
                                                    >
                                                        Delete
                                                    </Link>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                </div>
                    <button className="w-60 text-black bg-[#f5ac3d] hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"><Link to="/criarlocal">Cadastrar um Local</Link></button>
            </div>
        </>
    );
}

export default LocalList;
