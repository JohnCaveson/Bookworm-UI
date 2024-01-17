import axios from "axios";

const post = (title: string) => axios.post(`url`, { title });

export { post }