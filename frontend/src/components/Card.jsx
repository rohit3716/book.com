import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setOneBook } from "../redux/slices/Onebook";

const Card = ( {book} ) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleOnClick = () => {
    dispatch(setOneBook(book));
    navigate("/details");
  };

  return (
    <div className=" dark:bg-gray-800 dark:border-gray-700 w-72 font-bold m-2">
        <div className=" w-64 m-4 p-4">
          <div className=" max-w-fit m-auto" onClick={handleOnClick}>
            <img src={book.image} alt={book.name} className="h-52 object-cover" />
          </div>
          <h2 className=" text-xl text-center">{book.name}</h2>
          <div className="text-center line-through" style={{color:"#A2CD63"}}>
            ₹{book.actualPrice}
          </div>
          <div className="text-center" style={{color:"#A2CD63"}}>₹{book.sellingPrice}</div>
          <button
            className="mt-4 px-20 py-2.5 cursor-pointer rounded-lg text-sm font-bold dark:bg-gray-600
            hover:bg-[#A2CD63] hover:text-white hover:transition-all hover:duration-200
            "
            onClick={() => navigate("/buy")}
          >
            Buy Now
          </button>
        </div>
    </div>
  );
};

export default Card;
