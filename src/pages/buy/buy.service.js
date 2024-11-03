import http from "../../services/http"
export const HOST = process.env.REACT_APP_API_URL
export const POST_BUY = `${HOST}/api/buy`

export const postBuy = async (form) => {
    return await http.post(POST_BUY , form);
} 

