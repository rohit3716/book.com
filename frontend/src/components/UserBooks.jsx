import React from 'react'
import { useSelector } from 'react-redux';
import UserCard from './UserCard';


function UserBooks() {
    const {userBooks}=useSelector((state)=>state.booksData);
    // console.log("UUUUUU ",userBooks);
    // console.log();
  return (
    <div>
      <div className='home   px-16 '>
        <div className='  h-full py-2 flex flex-wrap m-auto justify-center overflow-scroll scbar'>
            {
              userBooks && userBooks.map( (book) => <UserCard key={book._id} book={book} />)
            }
        </div>
    </div>
    </div>
  )
}

export default UserBooks
