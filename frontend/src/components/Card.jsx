import "./card.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setOneBook } from "../redux/slices/Onebook";

const Card = ({ book }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleOnClick = () => {
    dispatch(setOneBook(book));
    navigate("/details");
  };

  return (
    <div className=" dark:bg-gray-800 dark:border-gray-700 w-72 font-bold m-2">
      <div className="wrapper">
        <div className="card">
          <div className="book-image" onClick={handleOnClick}>
            <img src={book.image} alt={book.name} className="image" />
          </div>
          <h2 className="book-name">{book.name}</h2>
          <div className="book-actual-Price line-through">
            ₹{book.actualPrice}
          </div>
          <div className="book-selling-price">₹{book.sellingPrice}</div>
          <button
            className="btn  dark:bg-gray-600"
            onClick={() => navigate("/buy")}
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
