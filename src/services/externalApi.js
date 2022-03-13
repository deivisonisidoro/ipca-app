import axios from "axios";

const externalApi = axios.create({
  baseURL: process.env.REACT_APP_EXTERNAL_API_URL
});



export default externalApi;
