import api from "./Api"


export const createClient = async (data) => {
    try {
        const response = await api.post("/cliente", data);
        console.log('response aqui ------' + response)
        return response.data;
    } catch (error) {
        console.log("Error save cliente")
    }
}

export const getClientById = async (id) => {
    try {
        const response = await api.get(`/client/${id}`);
        return response.data;
    } catch (error) {
        console.log("Error get cliente by id")
    }
}

export const updateClient = async (id, data) => {
    try {
        const response = await api.put(`/client/${id}`, data);
        return response.data;
    } catch (error) {
        console.log("Error update cliente")
    }
}