import './App.css'
import SignUp from './components/SignUp'
import Login from './components/Login'
import Navbar from './components/Navbar'
import {Route, Routes} from 'react-router-dom';
import Home from './components/Home';
import Details from './components/Details';
import Sell from './components/Sell';
import Profile from './components/Profile';
// import Footer from './components/Footer';
import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {booksData} from './services/operations/booksDataApi';
import UserBooks from './components/UserBooks';
import PrivateRoute from './components/auth/PrivateRoute';
import Error from './components/Error';
import Buy from './components/Buy';

function App() {

    const dispatch = useDispatch()

    

    useEffect(() => {
        dispatch(booksData());
        // console.log("asjkdhfkj");
    }, [dispatch])

    return (
        <div
            className='  scbar text-white dark:bg-gray-900 h-dvh overflow-scroll scbar '>
            <Navbar/>
            <Routes>
                <Route exact="exact" path="/signup" element={<SignUp/>}></Route>

                <Route exact="exact" path="/login" element={<Login/>}></Route>

                <Route exact="exact" path="/" element={<Home/>}></Route>
                <Route exact="exact" path="/details" element={<Details/>}></Route>
                <Route exact="exact" path="/buy" element={<Buy/>}></Route>
                <Route element={
                    <PrivateRoute>
                        <Sell/>
                    </PrivateRoute>
                }
                path='/sell'
                />    
                <Route element={
                    <PrivateRoute>
                        <Profile/>
                    </PrivateRoute>
                }
                path='/profile'
                />  
                 <Route element={
                    <PrivateRoute>
                        <UserBooks/>
                    </PrivateRoute>
                }
                path='/getUserBooks'
                /> 
                <Route element={
                    <PrivateRoute>
                        <Sell />
                    </PrivateRoute>
                }
                path='/editbook'
                />

                <Route path='*' element={<Error/>}/>
                
            </Routes>
        </div>
    )
}

export default App