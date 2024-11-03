import http from "./http"
export const HOST = process.env.REACT_APP_API_URL
export const GET_REPORT = `${HOST}/api/report`

export const getTrasactionReport = async () => {
    return await http.get(GET_REPORT);
} 

