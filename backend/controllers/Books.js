const Book = require("../models/Books");
const User = require("../models/User");

exports.createBook = async (req, res) => {
  try {
    const userId = req.user.id;
    const {
      name,
      image,
      author,
      publishYear,
      description,
      actualPrice,
      sellingPrice,
      bookCondition,
    } = req.body;

    if (
      !name ||
      !image ||
      !author ||
      !publishYear ||
      !description ||
      !actualPrice ||
      !sellingPrice ||
      !bookCondition
    ) {
      return res.status(400).json({
        success: false,
        message: "All fields are mandatory...",
      });
    }

    const newBook = await Book.create({
      user: userId,
      name,
      image,
      author,
      publishYear,
      description,
      actualPrice,
      sellingPrice,
      bookCondition,
    });

    console.log("userId:", userId);
    //add the new book to the user schema of User
    await User.findByIdAndUpdate(
        {_id:userId},
        {
            $push:{
                books:newBook._id,
            },
        },
        {new:true},
        );

    res.status(200).json({
      success: true,
      message: "Books created successfully.",
      data: newBook,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to publish book",
      error: error.message,
    });
  }
};

exports.getBook = async (req, res) => {
    try {
        const {bookId} = req.body;

        if( !bookId ){
            return res
            .status(401)
            .json({success: false, message: "Book Id required"})
        }

        const book = await Book.findById(bookId);

        if( !book ){
            return res
                .status(401)
                .json({success: false, message: "Not any book available of this ID"})
        }

        return res.status(200).json({
            success:true,
            message:"book fetched successfully",
            data:book,
        })

    } catch (error) {
        res
        .status(500)
        .json(
            {success: false, message: "Failed to retrieve book  ", error: error.message}
        )
    }
}

exports.getAllBooks = async (req, res) => {
    try {
        const allBooks = await Book.find({});

        return res.status(200).json({
            success:true,
            message:"All books fetched successfully",
            data:allBooks,
        })
    } catch (error) {
        res.status(500).json({
            success:false,
            message:"Failed to get all the books ",
            error:error.message
        })
    }
}

exports.getUserBooks = async ( req, res ) => {
    
    try {
        
    const userId = req.user.id;
    if( !userId ){
        return res.status(401).json({
            success:false,
            message:"give user id",
        })
    }

    const allBooks = await Book.find({user:userId});

    return res.status(200).json({
        success:true,
        message:"all books of user fetched successfully",
        data:allBooks,
    })
    } catch (error) {
        res
            .status(500)
            .json(
                {success: false, message: "Failed to retrieve books ", error: error.message}
            )
    }



}

exports.updateBook = async (req, res) => {
  try {
    const userId = req.user.id;
    const {
      bookId,
      name,
      image,
      author,
      publishYear,
      description,
      actualPrice,
      sellingPrice,
      bookCondition,
    } = req.body;

    if (!bookId) {
      return res.status(401).json({
        success: false,
        message: "Cannot find book with this id",
      });
    }

    if (
      name ||
      image ||
      author ||
      publishYear ||
      description ||
      actualPrice ||
      sellingPrice ||
      bookCondition
    ) {
      const book = await Book.findById(bookId);

      if (!book) {
        return res.status(201).json({
          success: false,
          message: "Cannot find book to update",
        });
      }

      if (book.user._id != userId) {
        return res.status(401).json({
          success: false,
          message: "You are not an authorized person to update this book.",
        });
      }

      const updatedBook = await Book.findByIdAndUpdate(
        bookId,
        {
          name,
          image,
          author,
          publishYear,
          description,
          actualPrice,
          sellingPrice,
          bookCondition,
        },
        { new: true }
      );

      return res.status(200).json({
        success: true,
        message: "Book updated successfully",
        data: updatedBook,
      });
    }
  } catch (error) {
    return res.status(200).json({
      success: false,
      message: "Failed to update the book",
    });
  }
};

exports.deleteBook = async (req, res) => {
  try {
    const userId = req.user.id;
    const { bookId } = req.body;

    if (!bookId) {
      return res
        .status(401)
        .json({ success: false, message: "book Id required" });
    }

    const book = await Book.findById(bookId);
    if (!book) {
      return res
        .status(401)
        .json({ success: false, message: "Not any book available of this ID" });
    }

    if (book.user._id != userId) {
      return res.status.json({
        success: false,
        message: "You are not an authorized person to delete this book",
      });
    }
    console.log("BookID: ", bookId);
    console.log("bookid", book._id);
    await User.findByIdAndUpdate(
        {_id:userId},
        {
            $pull:{
                books:bookId,
            },
        },
    );

    await Book.findByIdAndDelete(bookId);

    return res
      .status(200)
      .json({ success: true, message: "Book deleted successfully" });
  } catch (error) {
    res
      .status(500)
      .json({
        success: false,
        message: "Failed to delete Note",
        error: error.message,
      });
  }
};
