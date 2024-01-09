import {Link, useNavigate, } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setToken, setUser } from '../redux/slices/UserSlice';
import { setUserBooks } from '../redux/slices/BooksDataSlice';
import toast from 'react-hot-toast';
// import { setEditBook } from '../redux/slices/Onebook';
// import {logout} from '../services/operations/authApi'

const Navbar = () => {

    const {token} = useSelector((state) => state.user);
    const navigate=useNavigate();

    // const {isLoggedIn} = useSelector((state) => state.user);
    const dispatch = useDispatch();
    // const navigate = useNavigate();
    const handleOnClick=(e)=>{
        e.preventDefault();
        // dispatch(logout(navigate))
        document.cookie = `token=${token}; expires=Thu, 01 Jan 1970 00:00:00 UTC; domain=localhost:5173; secure;`;
        dispatch(setToken(null));
        dispatch(setUser(null))
        dispatch(setUserBooks([]))
        toast.success("Logged Out");
        navigate("/login")

        
    }
    // console.log("2jdsf", isLoggedIn);
    return (
        <div
            className='navbar  dark:bg-gray-800 flex justify-evenly items-center font-bold shadow-md'>
            <div>
                <Link to="/" className=" hover:text-lg hover:shadow-sm">
                    book.com
                </Link>
            </div>
            <div>
                <ul className=" text-richblack-100 flex gap-x-6">
                    <li>
                        <Link to="/" className=" hover:text-lg hover:shadow-sm">
                            Home
                        </Link>
                    </li>
                    {!token &&  <li>
                        <Link to="/signup" className=" hover:text-lg hover:shadow-sm">
                            SignUp
                        </Link>
                    </li>}
                    {!token &&  <li>
                        <Link to="/login" className=" hover:text-lg hover:shadow-sm">
                            Login
                        </Link>
                    </li>}
                    {token &&<li>
                        <Link to="/sell" className=" hover:text-lg hover:shadow-sm">
                            Sell
                        </Link>
                    </li>}
                    {!token && <li>
                        <Link to="/login" className=" hover:text-lg hover:shadow-sm">
                            Sell
                        </Link>
                    </li>}
                    <li>
                        <Link to="/getUserBooks" className=" hover:text-lg hover:shadow-sm">
                            Books
                        </Link>
                    </li>
                </ul>
            </div>
            <div className=' text-richblack-100 flex gap-x-6'>
                {/* <Link to="/details" className=" hover:text-lg hover:shadow-sm">
                    Details
                </Link> */}
                { token && <Link to="/profile" className=" hover:text-lg hover:shadow-sm">
                    Profile
                </Link>}
            </div>
            <div className=' text-richblack-100 flex gap-x-6'>
                {/* <Link to="/details" className=" hover:text-lg hover:shadow-sm">
                    Details
                </Link> */}
                { token &&( <button className=" hover:text-lg hover:shadow-sm" onClick={handleOnClick} >
                    
                    Logout
                </button>)}
            </div>
            
        </div>
    )
}

export default Navbar