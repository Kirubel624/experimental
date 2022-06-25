const { verifyToken,verifyTokenAndAuthorization,verifyTokenAndAdmin, } = require("./verifyToken");
const Book = require("../models/Books");
const router = require("express").Router();

//CREATE

router.post("/", verifyTokenAndAdmin, async (req, res) => {
  const newBook = new Book(req.body);
  try {
    const savedBook = await newBook.save();
    res.status(200).json({
      status:'success',
      data:savedBook,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


//UPDATE
router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const updatedBook = await Book.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedBook);
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE
router.delete("/delete/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    await Book.findByIdAndDelete(req.params.id);
    res.status(200).json("Book has been deleted...");
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET BOOK BY ID
router.get("/find/:id", async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    res.status(200).json(book);
  } catch (err) {
    res.status(500).json(err);
  }
});

//SORT BOOK BY CATEGORY
router.get("/find", async (req, res) => {
  const Category = req.query.category;

  try {
    let books;
  if (Category) {
      books = await Book.find({
        category: {
          $in: [Category],
        },
      });
    } else {
      books = await Book.find();
    }

    res.status(200).json(books);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/", async (req, res) => {
  const qNew = req.query.new;
  const qCategory = req.query.categories;
  try {
    let books;

    if (qNew) {
      books = await Book.find().sort({ createdAt: -1 }).limit(1);
    } else if (qCategory) {
      books = await Product.find({
        category: {
          $in: [qCategory],
        },
      });
    } else {
      books = await Book.find();
    }

    res.status(200).json(books);
  } catch (err) {
    res.status(500).json(err);
  }
});
//SEARCH BOOK BY TITLE
router.get("/findtitle", async (req, res) => {
  const Title = req.query.title;

  try {
    let books;
  if (Title) {
      books = await Book.find({
        title: {
          $in: Title
        },
      });
    } else {
      books = await Book.find();
    }

    res.status(200).json(books);
  } catch (err) {
    res.status(500).json(err);
  }
});

//SEARCH BOOK BY ISBN
router.get("/findISBN", async (req, res) => {
  const isbn = req.query.ISBN;

  try {
    let books;
  if (isbn) {
      books = await Book.find({
        ISBN: {
          $in: isbn
        },
      });
    } else {
      books = await Book.find();
    }

    res.status(200).json(books);
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;
