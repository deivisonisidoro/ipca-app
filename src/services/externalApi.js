import axios from "axios";
require("dotenv").config();

const externalApi = axios.create({
  baseURL: process.env.REACT_APP_EXTERNAL_API_URL
});



export default externalApi;
