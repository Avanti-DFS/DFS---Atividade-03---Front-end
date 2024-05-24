import api from "./Api";


export const createLocal = async (data) => {
    try {
        const response = await api.post("/local", data);        
        return response.data;
    } catch (error) {
        console.log("Error save local")
    }
}

export const getLocais = async () => {
    try {
        const response = await api.get("/locais");
        return response.data;
    } catch (error) {
        console.log("Error get locais")
    }
}

export const getLocalById = async (id) => {
    try {
        const response = await api.get(`/local/${id}`);
        return response.data;
    } catch (error) {
        console.log("Error get local by id")
    }
}

export const updateLocal = async (id, data) => {
    try {
        const response = await api.put(`/local/${id}`, data);
        return response.data;
    } catch (error) {
        console.log("Error update local")
    }
}

export const deleteLocalById = async (id) => {
    try {
        await api.delete(`/local/${id}`);
    } catch (error) {
        throw new Error('Failed to delete local');
    }
};