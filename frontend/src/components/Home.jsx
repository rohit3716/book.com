import Card from './Card'
import { useSelector } from 'react-redux';

const Home = () => {
  const {booksData}=useSelector((state)=>state.booksData);
  
  // console.log("Home Page books Data", booksData)
  return (
    <div className='home   px-16 '>
        <div className='  h-full py-2 flex flex-wrap m-auto justify-center overflow-scroll scbar'>
            {
              booksData && booksData.map( (book) => <Card key={book._id} book={book}/>)
            }
        </div>
    </div>
  )
}

export default Home