import api from "./Api";


export const getEventos = async (token) => {
    try {
        const response = await api.get("/eventos", {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        return response.data;
    } catch (error) {
        console.log("Error get events:", error);
        throw error;
    }
}

export const createEvento = async (data, token) => {
    console.log(data);
    try {
        const response = await api.post("/evento", data, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        return response.data;
    } catch (error) {
        console.log("Error save evento:", error);
        throw error;
    }
}

export const deleteEventoById = async (id, token) => {
    try {
        const response = await api.delete(`/eventos/${id}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        return response.data;
    } catch (error) {
        console.log("Error delete evento:", error);
        throw error;
    }
}

export const updateEvento = async (id, data, token) => {
    try {
        const response = await api.put(`/eventos/${id}`, data, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        return response.data;
    } catch (error) {
        console.log("Error update evento:", error);
        throw error;
    }
}

export const getEventoById = async (id, token) => {
    try {
        const response = await api.get(`/evento/${id}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        return response.data;
    } catch (error) {
        console.log("Error get evento by id:", error);
        throw error;
    }
}