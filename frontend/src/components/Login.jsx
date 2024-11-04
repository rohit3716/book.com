import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { login } from '../services/operations/authApi';
import { useNavigate } from 'react-router-dom';

const Login = () => {


    const dispatch = useDispatch();
    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const {
        email,
        password
    } = formData;

    const handleOnChange = (e) => {
        setFormData((prevData) => ({
            ...prevData,
            [e.target.name]: e.target.value
        }))
        // console.log(formData);
    }

    const handleOnSubmit = async (e) => {
        e.preventDefault();
        dispatch(login(
            formData.email,
            formData.password,
            navigate))

        // console.log("sk")
    }

    const handleOnClick = () => {
        navigate('/signup');
    }
    return (
        <div>
            <section className="bg-gray-50 dark:bg-gray-900">
                <div
                    className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <div
                        className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1
                                className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Login
                            </h1>
                            <form className="space-y-4 md:space-y-6" action="#" onSubmit={handleOnSubmit}>

                                <div>
                                    <label
                                        htmlFor="email"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="name@company.com"
                                        required=""
                                        value={email}
                                        onChange={handleOnChange}
                                        autoComplete='true'
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="password"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                    <input
                                        type="password"
                                        name="password"
                                        id="password"
                                        placeholder="••••••••"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        required=""
                                        value={password}
                                        onChange={handleOnChange} />
                                </div>
                                <div className=' text-center'>
                                    <button
                                        type="submit"
                                        className=" text-green-700 bg-transparent hover:text-white focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg border border-green-500 text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Login</button>
                                    <h2 className=' my-2'>OR</h2>
                                    <button type="button" className=' text-center bg-transparent  text-green-700 font-semibold hover:text-white py-2 px-2 border border-green-500  rounded' onClick={handleOnClick}>Create an Account</button>
                                </div>
                            </form>
                            <div className=' text-center'>


                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Login