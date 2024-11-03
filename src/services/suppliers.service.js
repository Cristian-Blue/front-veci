import http from "./http"
export const HOST = process.env.REACT_APP_API_URL
export const GET_SUPPLIERS = `${HOST}/api/suppliers`

export const getSuppliers = async () => {
    return await http.get(GET_SUPPLIERS);
} 

