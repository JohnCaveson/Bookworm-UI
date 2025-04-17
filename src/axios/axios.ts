import axios, { AxiosResponse } from "axios";
import { BookClubRequest, BookClubResponse } from '../interface/bookclub';

const createBookclub = async (request: BookClubRequest): Promise<BookClubResponse> => (await axios.post<BookClubResponse>(`http://localhost:5124/createBookClub`, 
    { 
        ...request 
    })).data

export { createBookclub }