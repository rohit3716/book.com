import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { sell, updateBook } from "../services/operations/sellApi";
import { booksData, userBooks } from "../services/operations/booksDataApi";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

// {TODO: Fix /sell route }

const Sell = () => {
  const { editBook } = useSelector((state) => state.oneBook);
  // console.log("editBook Data",editBook);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: !editBook?"":(editBook.name),
    image: !editBook?"":(editBook.image),
    author: !editBook?"":(editBook.author),
    publishYear: !editBook?"":(editBook.publishYear),
    description: !editBook?"":(editBook.description),
    actualPrice: !editBook?"":(editBook.actualPrice),
    sellingPrice: !editBook?"":(editBook.sellingPrice),
    bookCondition: !editBook?"":(editBook.bookCondition),
  });

  const {
    name,
    image,
    author,
    publishYear,
    description,
    actualPrice,
    sellingPrice,
  } = formData;

  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };
  // console.log(formData);

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    !editBook && (dispatch(sell(
          formData.name,
          formData.image,
          formData.author,
          formData.publishYear,
          formData.description,
          formData.actualPrice,
          formData.sellingPrice,
          formData.bookCondition,
    )) )
    editBook && dispatch(updateBook(
      editBook._id,
      formData.name,
      formData.image,
      formData.author,
      formData.publishYear,
      formData.description,
      formData.actualPrice,
      formData.sellingPrice,
      formData.bookCondition,
))
    // (!editBook)
    //   ? dispatch(sell(
    //       formData.name,
    //       formData.image,
    //       formData.author,
    //       formData.publishYear,
    //       formData.description,
    //       formData.actualPrice,
    //       formData.sellingPrice,
    //       formData.bookCondition
    //     ))
    //   : dispatch(updateBook(
    //       formData.name,
    //       formData.image,
    //       formData.author,
    //       formData.publishYear,
    //       formData.description,
    //       formData.actualPrice,
    //       formData.sellingPrice,
    //       formData.bookCondition
    //     );
    //   )
  
    dispatch(booksData());
  
    setFormData({
      name: "",
      image: "",
      author: "",
      publishYear: "",
      description: "",
      actualPrice: "",
      sellingPrice: "",
      bookCondition: "",
    });
    dispatch(userBooks());
    navigate("/getUserBooks")
  };
  
  return (
    <div className="scbar home overflow-scroll">
      <section className="  ">
        <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
          <h2 className="mb-4 text-xl font-bold  ">Add a new Book</h2>
          <form action="#" onSubmit={handleOnSubmit}>
            <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
              <div className="sm:col-span-2">
                <label form="name" className="block mb-2 text-sm font-medium ">
                  Book Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="bookName"
                  className="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Type Book name"
                  required="required"
                  value={name}
                  onChange={handleOnChange}
                />
              </div>

              <div className="sm:col-span-2">
                <label
                  form="featureImage"
                  className="block mb-2 text-sm font-medium "
                >
                  Image URL
                </label>
                <input
                  type="text"
                  name="image"
                  id="featureImage"
                  className="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Type Book name"
                  required="required"
                  value={image}
                  onChange={handleOnChange}
                />
              </div>

              <div className="w-full">
                <label
                  form="bookAuthor"
                  className="block mb-2 text-sm font-medium "
                >
                  Author Name
                </label>
                <input
                  type="text"
                  name="author"
                  id="bookAuthor"
                  className="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="e.g. Dr. J. Murphy"
                  required
                  value={author}
                  onChange={handleOnChange}
                />
              </div>
              <div>
                <label
                  form="bookActualPrice"
                  className="block mb-2 text-sm font-medium  "
                >
                  Publish Year
                </label>
                <input
                  type="number"
                  name="publishYear"
                  id="bookActualPrice"
                  className="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder=" e.g. 1980"
                  required="required"
                  value={publishYear}
                  onChange={handleOnChange}
                />
              </div>

              <div>
                <label
                  form="bookCondition"
                  className="block mb-2 text-sm font-medium  "
                >
                  Book Condition
                </label>
                <select
                  id="bookCondition"
                  name="bookCondition"
                  required="required"
                  className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  onChange={handleOnChange}
                  defaultValue="Good" // Set the default value to "Good"
                >
                  <option disabled hidden>
                    Select condition
                  </option>
                  <option value="Good">Good</option>
                  <option value="Better">Better</option>
                  <option value="Best">Best</option>
                </select>
              </div>

              <div className="w-full">
                <label
                  form="bookActualPrice"
                  className="block mb-2 text-sm font-medium  "
                >
                  Actual Price
                </label>
                <input
                  type="number"
                  name="actualPrice"
                  id="bookActualPrice"
                  className="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder=" e.g. 500"
                  required="required"
                  value={actualPrice}
                  onChange={handleOnChange}
                />
              </div>

              <div className="w-full">
                <label
                  form="bookSellingPrice"
                  className="block mb-2 text-sm font-medium  "
                >
                  Selling Price
                </label>
                <input
                  type="number"
                  name="sellingPrice"
                  id="bookSellingPrice"
                  className="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder=" e.g. 350"
                  required="required"
                  value={sellingPrice}
                  onChange={handleOnChange}
                />
              </div>

              <div className="sm:col-span-2">
                <label
                  form="bookDescription"
                  className="block mb-2 text-sm font-medium "
                >
                  Book Description
                </label>
                <textarea
                  id="bookDescription"
                  name="description"
                  rows="8"
                  className="block p-2.5 w-full text-sm  bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  required="required"
                  placeholder="Book description here"
                  value={description}
                  onChange={handleOnChange}
                ></textarea>
              </div>
            </div>
            {/* <button
              type="submit"
              className="flex  m-auto items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center dark:bg-gray-600 rounded-lg focus:ring-4 focus:ring-primary-200 hover:bg-green-400 cursor-pointer"
            >
              Add Book
            </button> */}
            {editBook?(<button
              type="submit"
              className="flex  m-auto items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center dark:bg-gray-600 rounded-lg focus:ring-4 focus:ring-primary-200 hover:bg-green-400 cursor-pointer"
            >
              Update Book
            </button>):(<button
              type="submit"
              className="flex  m-auto items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center dark:bg-gray-600 rounded-lg focus:ring-4 focus:ring-primary-200 hover:bg-green-400 cursor-pointer"
            >
              Add Book
            </button>)}
            {/* <button
              type="submit"
              disabled="disabled"
              className="flex m-auto items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center dark:bg-gray-600 bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 hover:bg-green-400 cursor-pointer "
            >
              Adding Book
            </button> */}
          </form>
        </div>
      </section>
    </div>
  );
};

export default Sell;