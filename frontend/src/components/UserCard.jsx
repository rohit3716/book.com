import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setEditBook } from '../redux/slices/Onebook';
import { deleteBook } from '../services/operations/booksDataApi';


function UserCard({ book }) {
    const dispatch = useDispatch();
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
                <div>
                    <div className='w-64 m-4 p-4'>
                        <div className='max-w-fit m-auto'>
                            <img src={book.image} alt={book.name} className='h-52 object-cover' />
                        </div>
                        <h2 className='text-xl text-center'>{book.name}</h2>
                        <div className='text-center line-through' style={{ color: "#A2CD63" }}>
                            ₹{book.actualPrice}
                        </div>
                        <div className='text-center' style={{ color: "#A2CD63" }}>
                            ₹{book.sellingPrice}
                        </div>
                        <div className=' flex flex-row flex-wrap text-center justify-center'>
                            <button className="mt-4 px-20 py-2.5 cursor-pointer rounded-lg text-sm font-bold dark:bg-gray-600
            hover:bg-[#A2CD63] hover:text-white hover:transition-all hover:duration-200
            " onClick={handleEdit}>Edit</button>
                            <button className="mt-4 px-20 py-2.5 cursor-pointer rounded-lg text-sm font-bold dark:bg-gray-600
            hover:bg-[#A2CD63] hover:text-white hover:transition-all hover:duration-200
            " onClick={handleDelete}>Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserCard
