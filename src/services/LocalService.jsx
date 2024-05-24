import api from "./Api";


export const createLocal = async (data, token) => {
    try {
        const response = await api.post("/local", data, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });        
        return response.data;
    } catch (error) {
        console.log("Error save local:", error);
        throw error;
    }
}

export const getLocais = async (token) => {
    try {
        const response = await api.get("/locais", {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        return response.data;
    } catch (error) {
        console.log("Error get locais")
    }
}

export const getLocalById = async (id, token) => {
    try {
        const response = await api.get(`/local/${id}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        return response.data;
    } catch (error) {
        console.log("Error get local by id:", error);
        throw error;
    }
}

export const updateLocal = async (id, data, token) => {
    try {
        const response = await api.put(`/local/${id}`, data, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        return response.data;
    } catch (error) {
        console.log("Error update local:", error);
        throw error;
    }
}

export const deleteLocalById = async (id, token) => {
    try {
        await api.delete(`/local/${id}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
    } catch (error) {
        console.log("Error delete local:", error);
        throw error;
    }
};