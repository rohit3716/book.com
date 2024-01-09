import React from 'react'
import {useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setEditBook } from '../redux/slices/Onebook';
import { deleteBook } from '../services/operations/booksDataApi';


function UserCard({book}) {
    const dispatch= useDispatch();
    const navigate = useNavigate();
    const handleEdit = () => {
        dispatch(setEditBook(book))
        navigate("/sell")
    }

    const handleDelete = () => {
        dispatch(deleteBook(book._id))
    }
  return (
    <div>
      <div className=' dark:bg-gray-800 dark:border-gray-700 w-72 font-bold m-2'>
            <div className='wrapper'>
                <div className='card'>
                    <div className='book-image'>
                        <img src={book.image} alt={book.name} className='image'/>
                    </div>
                    <h2 className='book-name'>{book.name}</h2>
                    <div className='book-actual-Price line-through'>
                        ₹{book.actualPrice}
                    </div>
                    <div className='book-selling-price'>
                        ₹{book.sellingPrice}
                    </div>
                    <div className=' flex flex-row flex-wrap text-center justify-center'>
                    <button className='btn  dark:bg-gray-600' onClick={handleEdit}>Edit</button>
                    <button className='btn  dark:bg-gray-600' onClick={handleDelete}>Delete</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default UserCard
