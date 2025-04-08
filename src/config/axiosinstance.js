import axios from "axios";

const  axiosintance=axios.create();


axiosintance.defaults.baseURL=import.meta.VITE_BASE_URL;

axiosintance.defaults.withCredentials=true;
axios.defaults.timeout =import.meta.VITE_API_TIMEOUT
export default axiosintance;
