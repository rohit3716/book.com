import {apiConnector} from "../apiConnect"
import {api} from "../api";
import { setBooksData, setUserBooks, setLoading } from "../../redux/slices/BooksDataSlice";
import toast from "react-hot-toast";
// import {setBooksData} from "../../redux/slices/BooksDataSlice";

const {GET_ALL_BOOKS_API, GET_USER_BOOKS_API, DELETE_BOOK_API} = api;

export function booksData(){
    return async (dispatch)=>{
        try{
            const response= await apiConnector("GET", GET_ALL_BOOKS_API)

            // console.log("BOOK LISTED api resonse..................", response)


            if (!response.data.success) {
                throw new Error(response.data.message)
                }
            // dispatch(setLoading(true));
            // toast.loading("Loading....")
                // console.log(response.data)
                dispatch(setBooksData(response.data.data))
            // dispatch(setLoading(false));
        }
        catch(error){
            console.log("LISTING BOOK  API ERROR............", error)
        }
    }
}

export function userBooks(){
    return async (dispatch) =>{
        try {
            const response = await apiConnector("GET", GET_USER_BOOKS_API);
            // console.log(" All books of that USer: ", response);
            if( !response.data.success ){
                throw new Error(response.data.message)
            }

            // console.log(response.data);
            dispatch(setUserBooks(response.data.data));
        } catch (error) {
            console.log("All Books of that user Error, ", error);
        }
    }
}

export function deleteBook(bookId){
    return async (dispatch) =>{
        try {
            const response = await apiConnector("DELETE", DELETE_BOOK_API,{
                bookId
            });
            // console.log(" Book Deleted Response: ", response);
            if( !response.data.success ){
                throw new Error(response.data.message)
            }
            toast.success("Books deleted successfully")
            dispatch(booksData());
            dispatch(userBooks());
        } catch (error) {
            console.log("Book Deletion Errr, ", error);
            toast.error("Cannot delete books.")
        }
    }
}



