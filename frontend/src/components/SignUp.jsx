import React from 'react'
import {useState} from 'react'
import { useDispatch } from 'react-redux';
import { signup } from '../services/operations/authApi';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';



const SignUp = () => {

    const dispatch=useDispatch();
    const navigate=useNavigate()

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        mobileNo: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    const {
        firstName,
        lastName,
        email,
        password,
        confirmPassword,
        mobileNo
    } = formData;

    const handleOnChange = (e) => {
        setFormData((prevData) => ({
            ...prevData,
            [e.target.name]: e.target.value
        }))
        // console.log(formData);
    }

    const handleOnSubmit=async (e)=>{
        e.preventDefault();
        if(password!==confirmPassword){
            toast.error("please enter same password")
            setFormData({password: "",  confirmPassword: "" });
            return;
        }
        // console.log("sk")
        dispatch(signup(
            formData.firstName,
            formData.lastName,
            formData.email,
            formData.mobileNo,
            formData.password,
            formData.confirmPassword, navigate))


        setFormData({
            firstName: '',
            lastName: '',
            mobileNo: '',
            email: '',
            password: '',
            confirmPassword: ''
        })

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
                                Create account
                            </h1>
                            <form className="space-y-4 md:space-y-6" action="#" onSubmit={handleOnSubmit} autoComplete='off'>
                                <div className='flex flex-wrap'>
                                    <div className='m-1'>
                                        <label
                                            htmlFor="firstName"
                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First Name</label>
                                        <input
                                            type="text"
                                            name="firstName"
                                            id="firstName"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            placeholder="Enter your First Name"
                                            required=""
                                            value={firstName}
                                            onChange={handleOnChange}/>
                                    </div>
                                    <div className='m-1'>
                                        <label
                                            htmlFor="LastName"
                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last Name.</label>
                                        <input
                                            type="text"
                                            name="lastName"
                                            id="lastName"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            placeholder="Enter your Last Name"
                                            required=""
                                            value={lastName}
                                            onChange={handleOnChange}/>
                                    </div>
                                </div>
                                <div>
                                    <label
                                        htmlFor="Mobile No"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mobile No.</label>
                                    <input
                                        type="text"
                                        name="mobileNo"
                                        id="mobileNo"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="Enter your Last Name"
                                        required=""
                                        value={mobileNo}
                                        onChange={handleOnChange}/>
                                </div>
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
                                        onChange={handleOnChange}/>
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
                                        onChange={handleOnChange}/>
                                </div>
                                <div>
                                    <label
                                        htmlFor="confirm-password"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
                                    <input
                                        type="password"
                                        name="confirmPassword"
                                        id="confirm-password"
                                        placeholder="••••••••"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        required=""
                                        value={confirmPassword}
                                        onChange={handleOnChange}/>
                                </div>

                                <button
                                    // type="submit"
                                    className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Create account</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default SignUp