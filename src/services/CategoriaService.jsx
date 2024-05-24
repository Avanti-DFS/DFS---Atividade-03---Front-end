import api from "./Api";


export const createCategoria = async (data) => {
    try {
        const response = await api.post("/categoria", data);        
        return response.data;
    } catch (error) {
        console.log("Error save categoria")
    }
}

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

export const updateCategoria = async (id, data) => {
    try {
        const response = await api.put(`/categoria/${id}`, data);
        return response.data;
    } catch (error) {
        console.log("Error update categoria")
    }
}

export const deleteCategoriaById = async (id) => {
    try {
        await api.delete(`/categoria/${id}`);
    } catch (error) {
        throw new Error('Failed to delete categoria');
    }
};