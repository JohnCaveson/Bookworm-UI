import Book from './book'
import Member from './member'
import Poll from './poll'

interface BookClubResponse {
    bookClubName: string
    poll?: Poll
    currentBook?: Book
    members: Member[]
}

interface BookClubRequest {
    bookClubName: string
    members: Member[]
}

export { BookClubResponse, BookClubRequest }