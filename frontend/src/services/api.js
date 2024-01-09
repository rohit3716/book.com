const BASE_URL = "/api/v1"

export const api={
    SIGNUP_API: BASE_URL + "/signup",
    LOGIN_API: BASE_URL + "/login",
    CREATE_BOOK_API: BASE_URL + "/auth/createBook",
    UPDATE_BOOK_API: BASE_URL + "/auth/updateBook",
    DELETE_BOOK_API: BASE_URL + "/auth/deleteBook",
    GET_ALL_BOOKS_API: BASE_URL + "/getAllBooks",
    GET_BOOK_API: BASE_URL + "/book",
    GET_USER_BOOKS_API: BASE_URL + "/auth/getUserBooks"
}