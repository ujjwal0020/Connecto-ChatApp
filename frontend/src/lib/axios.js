import axios from "axios";

export const axiosInstance=axios.create({
    baseURL: import.meta.env.MODE==="developement" ?"http://localhost:5001/api": "https://connecto-chatapp-1.onrender.com",
    withCredentials:true,
    
})