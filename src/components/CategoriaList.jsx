import {React, useEffect, useState} from 'react'
import { getCategorias, deleteCategoriaById } from '../services/CategoriaService';
import { Link } from 'react-router-dom';

const CategoriaList = () => {
    const [categorias, setCategorias] = useState([]);
    const [categoriasRender, setCategoriasRender] = useState([]);
    const token = localStorage.getItem('token');

    async function getAllCategorias() {
        try {
            const data = await getCategorias(token);
            setCategorias(data);
            setCategoriasRender(data);
        } catch (error) {
            console.log("Error getCategorias: " + error);
        }
    }

    useEffect(() => {
        getAllCategorias();
    },[]);

    const deleteCategoria = async (id) => {
        try {
            await deleteCategoriaById(id, token);
            getAllCategorias();
        } catch {
            console.error("Error deleteClient")
        }
      }

      if (!token) {
        return (
            <div className="w-[100vw] h-full justify-center items-center flex flex-col px-10 py-8 mt-8">
                <h1 className="text-3xl font-bold py-8 px-4 bg-red-400 rounded">Unauthorized</h1>
            </div>
        );
    }

    return (
        <>
          <div className="w-[100vw] h-full justify-center items-center flex flex-col px-10 py-8 mt-8">
            <h1 className="text-3xl font-bold py-8 px-4 bg-orange-400 rounded">CATEGORIAS</h1>
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
                            Categoria
                          </th>
                        </tr>
                      </thead>
                      <tbody className="border-black border-b-2">
                        {categorias.map( (categoria, index) => (
                          <tr
                            key={categoria.id}
                            className="bg-white border-b-2 border-black"
                          >
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 ">
                              {index + 1}
                            </td>
                            <td className="text-xl text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">
                              {categoria.categoria}
                            </td>
                            <td className="text-sm flex justify-between  items-center text-gray-900 font-bold px-6 py-4 space-x-4 whitespace-nowrap">
                              <Link
                                to={`/criarcategoria/${categoria.id}`}
                                className="bg-blue-600 text-white px-6 py-2 rounded-lg"
                              >
                                Edit
                              </Link>
                              <Link
                                onClick={()=>deleteCategoria(categoria.id)}
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
          </div>
        </>
      );
}

export default CategoriaList