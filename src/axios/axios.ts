import axios from "axios";

const post = async (bookClubName: string) => axios.post(`https://localhost:7253/createBookClub`, { bookClubName });

export { post }