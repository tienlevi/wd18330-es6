import axios from "axios";

const dataUrl = axios.create({ baseURL: "http://localhost:3000" });

export default dataUrl;
