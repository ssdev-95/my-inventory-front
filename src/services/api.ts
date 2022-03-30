import axios from "axios";

const baseURL = process.env.API_ENDPOINT as string;

const api = axios.create({ baseURL });

export { api };
