import axios from "axios";
import { API_URL } from "constants/common";

export default (() => axios.create({ baseURL: API_URL }))();
