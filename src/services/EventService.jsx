import api from "./Api";


export const getEventos = async () => {
    try {
        const response = await api.get("/eventos");
        return response.data;
    } catch (error) {
        console.log("Error get clients")
    }
}

export const createEvento = async (data) => {
    console.log(data)
    try {
        const response = await api.post("/evento", data);
        return response.data;
    } catch (error) {
        console.log("Error save evento")
    }
}

export const deleteEventoById = async (id) => {
    try {
        const response = await api.delete(`/evento/${id}`);
        return response.data;
    } catch (error) {
        console.log("Error delete evento")
    }
}

export const updateEvento = async (id, data) => {
    try {
        const response = await api.put(`/evento/${id}`, data);
        return response.data;
    } catch (error) {
        console.log("Error update evento")
    }
}

export const getEventoById = async (id) => {
    try {
        const response = await api.get(`/evento/${id}`);
        return response.data;
    } catch (error) {
        console.log("Error get cliente by id")
    }
}