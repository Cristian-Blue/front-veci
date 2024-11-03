import axios from "axios";
import { toast } from "react-toastify";

const http = axios.create({headers : {
    Authorization: localStorage.getItem("token"),
    "Content-Type": "application/json",
  }
});

http.interceptors.request.use(function (config) { 
    return config;
})

http.interceptors.response.use(function (response){
    return response.data
}, function (error){ 
    toast.error(error.response.data.message );
});

export default http;
