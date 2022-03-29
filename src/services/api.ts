import axios from "axios";

const baseURL = process.env.API_ENDPINT;

const api = axios.create({ baseURL });

export { api };
