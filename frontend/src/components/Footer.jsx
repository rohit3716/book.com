import React, { useState, useEffect } from "react";

const Footer = () => {
    const [currentYear, setCurrentYear] = useState(null);

    useEffect(() => {
        const currentDate = new Date();
        const year = currentDate.getFullYear();
        setCurrentYear(year);
      }, []);
  return (
    <div className='  dark:bg-gray-800 flex flex-col  w-ful justify-center font-bold shadow-md h-16'>
        <div className=" flex flex-wrap justify-evenly">
            <p className='text-gray-400 text-md tracking-wider'>IIST Rau, Indore, 453331, Madhya Pradesh, India</p>
            <p className='text-gray-400 text-md tracking-wider'>Email: shekharkrsingh6432@gmail.com</p>
        </div>
        <div className=" text-center">
            <p className='text-gray-400 text-md tracking-wider'>@{currentYear} Shekhar</p>
        </div>
        
    </div>
  )
}

export default Footer
