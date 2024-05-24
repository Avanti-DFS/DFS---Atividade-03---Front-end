import api from "./Api";


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