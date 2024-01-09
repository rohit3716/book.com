import {apiConnector} from "../apiConnect"
import {api} from "../api";
import { booksData } from "./booksDataApi";
import { setEditBook } from "../../redux/slices/Onebook";
import toast from "react-hot-toast";
// import { setUserBooks } from "../../redux/slices/BooksDataSlice";

const {
    CREATE_BOOK_API,
    UPDATE_BOOK_API
}=api;

export function sell(
    name,
    image,
    author,
    publishYear,
    description,
    actualPrice,
    sellingPrice,
    bookCondition,
){
    return async (dispatch)=>{
        
        // console.log({
        //     name,
        //     image,
        //     author,
        //     publishYear,
        //     description,
        //     actualPrice,
        //     sellingPrice,
        //     bookCondition,
        // })
        try{
            // console.log("Shekhar")
            const response= await apiConnector("POST", CREATE_BOOK_API, {
                name,
                image,
                author,
                publishYear,
                description,
                actualPrice,
                sellingPrice,
                bookCondition,
            })
            // console.log("BOOK LISTED api resonse..................", response)
    
            if (!response.data.success) {
                throw new Error(response.data.message)
                }
                // console.log(response.data)
                toast.success("Books Published Successfully")
                dispatch(booksData())
        }
        catch (error) {
            console.log("LISTING BOOK  API ERROR............", error)
            toast.error("Book is not Published")
            }

            // dispatch(setLoading(false))
            // toast.dismiss(toastId)
        }
}

export function updateBook(
    _id,
    name,
    image,
    author,
    publishYear,
    description,
    actualPrice,
    sellingPrice,
    bookCondition,
){
    return async (dispatch)=>{
        
        // console.log({
        //     name,
        //     image,
        //     author,
        //     publishYear,
        //     description,
        //     actualPrice,
        //     sellingPrice,
        //     bookCondition,
        // })
        try{
            // console.log("Shekhar")
            const response= await apiConnector("PUT", UPDATE_BOOK_API, {
                bookId: _id,
                name,
                image,
                author,
                publishYear,
                description,
                actualPrice,
                sellingPrice,
                bookCondition,
            })
            // console.log("Book Updated data:..................", response)
    
            if (!response.data.success) {
                throw new Error(response.data.message)
                }
                // console.log(response.data)
                // toast.loading("Updating...")
                toast.success("Book Updated Successfully");
                // dispatch(setUserBooks());
                dispatch(setEditBook(null))
        }
        catch (error) {
            console.log("Book update ERROR............", error)
            toast.error("Book is not updated");
            }

            // dispatch(setLoading(false))
            // toast.dismiss(toastId)
        }
}