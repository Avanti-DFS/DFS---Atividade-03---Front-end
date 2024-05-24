import api from "./Api";


export const createCategoria = async (data, token) => {
    try {
        const response = await api.post("/categoria", data, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });        
        return response.data;
    } catch (error) {
        console.log("Error save categoria:", error);
        throw error;
    }
}

export const getCategorias = async (token) => {
    try {
        const response = await api.get("/categorias", {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        return response.data;
    } catch (error) {
        console.log("Error get categorias:", error);
        throw error;
    }
}

export const getCategoriaById = async (id, token) => {
    try {
        const response = await api.get(`/categoria/${id}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        return response.data;
    } catch (error) {
        console.log("Error get categoria by id:", error);
        throw error;
    }
}

export const updateCategoria = async (id, data, token) => {
    try {
        const response = await api.put(`/categoria/${id}`, data, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        return response.data;
    } catch (error) {
        console.log("Error update categoria:", error);
        throw error;
    }
}

export const deleteCategoriaById = async (id, token) => {
    try {
        await api.delete(`/categoria/${id}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
    } catch (error) {
        console.log("Error delete categoria:", error);
        throw error;
    }
};