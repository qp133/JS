import axios from "axios";

const axiosClient = axios.create({
    baseURL: 'https://localhost:8080/api/v1',
    headers: {'Content-Type': 'application.json'}
  });

export default axiosClient;