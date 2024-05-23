import api from "./Api";


export const getEventos = async () => {
    try {
        const response = await api.get("/eventos");
        return response.data;
    } catch (error) {
        console.log("Error get clients")
    }
}