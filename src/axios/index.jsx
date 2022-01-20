// Configurar axios

import axios from "axios";

// 1 : Instancia de axios

const axiosClient = axios.create({
    baseURL:'https://hp-api.herokuapp.com/api'
});


export default axiosClient;