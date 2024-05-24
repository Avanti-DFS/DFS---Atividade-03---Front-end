import api from "./Api";


export const getCategorias = async () => {
    try {
        const response = await api.get("/categorias");
        return response.data;
    } catch (error) {
        console.log("Error get categorias")
    }
}

export const getCategoriaById = async (id) => {
    try {
        const response = await api.get(`/categoria/${id}`);
        return response.data;
    } catch (error) {
        console.log("Error get categoria by id")
    }
}