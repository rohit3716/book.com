import {apiConnector} from "../apiConnect"
import {api} from "../api";
import { setIsLoggedIn, setUser, setToken } from "../../redux/slices/UserSlice";
import { userBooks } from "./booksDataApi";
import toast from "react-hot-toast";


const {
    SIGNUP_API,
    LOGIN_API
}=api

export function signup(
    firstName,
    lastName,
    email,
    mobileNo,
    password,
    confirmPassword,
    navigate
)

{
    
    return async ()=>{
        
        // console.log({
        //   firstName,
        //   lastName,
        //   email,
        //   mobileNo,
        //   password,
        //   confirmPassword,
        // })
        try{
            // console.log("Shekhar")
            const response= await apiConnector("POST", SIGNUP_API, {
                firstName,
                lastName,
                email,
                phone: mobileNo,
                password,
                confirmPassword,
            })

            
            // console.log("Signup api resonse..................", response)
    
            if (!response.data.success) {
                throw new Error(response.data.message)
                }
                // console.log(response.data)
                toast.success('User Registered successfully');
                navigate('/login')
        }
        catch (error) {
            console.log("SIGNUP API ERROR............", error)
            toast.error("Signup Failed")
            }

            // dispatch(setLoading(false))
            // toast.dismiss(toastId)
        }
}


export function login(
    email,
    password,
    navigate
)

{
    
    return async (dispatch)=>{
        
        // console.log({
        //   email,
        //   password,
        // })
        try{
            // console.log("Shekhar")
            const response= await apiConnector("POST", LOGIN_API, {
                email,
                password,
            })
            // console.log("LOGIN api resonse..................", response)
    
            if (!response.data.success) {
                throw new Error(response.data.message)
                }
                // console.log(response.data)
            dispatch(setUser(response.data.user));
            dispatch(setIsLoggedIn(true));
            dispatch(setToken(response.data.token));
            dispatch(userBooks());
            toast.success("Logged In")
            navigate('/')
        }
        catch (error) {
            console.log("LOGIN API ERROR............", error)
            toast.error("LOGIN Failed")
            }
            // dispatch(setLoading(false))
            // toast.dismiss(toastId)
        }
}

// export function logout(navigate) {
//     return (dispatch) => {
//       dispatch(setToken(null))
//       dispatch(setUser(null))
//     //   dispatch(resetCart())
//       localStorage.removeItem("token")
//       localStorage.removeItem("user")
//     //   toast.success("Logged Out")
//       navigate("/")
//     }
//   }