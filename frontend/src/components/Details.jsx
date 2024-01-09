import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Details = () => {

    const navigate=useNavigate()
    const {oneBook}=useSelector((state)=>state.oneBook);

    // console.log("details Book: ", oneBook);
    return (
        <div className='details flex flex-wrap justify-evenly pt-20 '>
            <div className=' w-96  flex justify-evenly m-4'>
                <div className=''>
                    <img
                        className=''
                        src={oneBook.image}
                        alt=''/>
                </div>
            </div>
            <div className=' w-96  overflow-scroll flex flex-col items-center font-medium scbar m-4'>
                <div>
                    <h1 className=' text-xl'>
                        {oneBook.name}</h1>
                    <p>Author Name : {oneBook.author}
                    </p>
                    <p>Condition : {oneBook.bookCondition}
                    </p>
                </div>
                <div className=' flex flex-wrap '>
                    <div className=' line-through '>₹ {oneBook.actualPrice}</div>
                    <div className='mx-3'>₹ {oneBook.sellingPrice}</div>
                </div>

                <div>
                    <button className='btn dark:bg-gray-600' onClick={()=>navigate("/buy")}>Buy Now</button>
                </div>

                <div className=' max-w-sm '>
                    <div className=' text-2xl'>
                        <h2>
                            About :-
                        </h2>
                    </div>
                    <p className=' text-sm italic'>
                        {oneBook.description}</p>
                </div>

            </div>
        </div>
    )
}

export default Details