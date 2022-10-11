import axios from "axios";

export const getAddressByCep = async (cep: string) => {
    try {
        const response = await axios({
            method: "get",
            url: `https://brasilapi.com.br/api/cep/v2/${cep}`,
            headers: { "Content-Type": "application/json" },
        });
        console.log(response.data)
        return response.data
    } catch (e: any) {
        return false
    }
}