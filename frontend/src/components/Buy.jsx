import React from 'react'
import { useNavigate } from 'react-router-dom'

const Buy = () => {
    const navigate=useNavigate();
    return (
        <div className='text-gray-900'>
            <div className="w-full md:w-96 md:max-w-full mx-auto mt-4">
                <div className="p-6 border border-gray-300 sm:rounded-md bg-gray-700">
                    <form method="#" onSubmit={(e)=>{e.preventDefault(); navigate("/"); }}>
                        <label className="block mb-6">
                            <span className="text-white">Your name</span>
                            <input
                                name="name"
                                type="text"
                                className="
            block
            w-full
            mt-1
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
                                placeholder="Your Name"/>
                        </label>
                        <label className="block mb-6">
                            <span className="text-white">Address line 1</span>
                            <input
                                name="address1"
                                type="text"
                                className="
            block
            w-full
            mt-1
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
                                placeholder=" Your Address"/>
                        </label>
                        <label className="block mb-6">
                            <span className="text-white">City</span>
                            <input
                                name="city"
                                type="text"
                                className="
            block
            w-full
            mt-1
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
                                placeholder=""/>
                        </label>
                        <label className="block mb-6">
                            <span className="text-white">State/Province</span>
                            <input
                                name="state"
                                type="text"
                                className="
            block
            w-full
            mt-1
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
                                placeholder=""/>
                        </label>
                        <label className="block mb-6">
                            <span className="text-white">Zip/Postal code</span>
                            <input
                                name="zip"
                                type="text"
                                className="
            block
            w-full
            mt-1
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
                                placeholder=""/>
                        </label>
                        <label className="block mb-6">
                            <span className="text-white">Country</span>
                            <input
                                name="country"
                                type="text"
                                className="
            block
            w-full
            mt-1
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
                                placeholder=""/>
                        </label>
                        <label className="block mb-6">
                            <span className="text-white">Telephone</span>
                            <input
                                name="telephone"
                                type="text"
                                className="
            block
            w-full
            mt-1
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
                                placeholder=""/>
                        </label>
                        <label className="block mb-6">
                            <span className="text-white">Delivery information</span>
                            <textarea
                                name="message"
                                className="
            block
            w-full
            mt-1
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
                                rows="3"
                                placeholder="floor/door lock code/etc."></textarea>
                        </label>
                        <div className="mb-6">
                            <button
                                type="submit"
                                className="
            h-10
            px-5
            text-indigo-100
            bg-indigo-700
            rounded-lg
            transition-colors
            duration-150
            focus:shadow-outline
            hover:bg-indigo-800
          ">
                                Save
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Buy
