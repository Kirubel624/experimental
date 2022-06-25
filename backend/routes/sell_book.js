const { verifyToken,verifyTokenAndAuthorization,verifyTokenAndAdmin,verifyTokenAndUser } = require("./verifyToken");
const sellBook = require("../models/Sell_Book");
const router = require("express").Router();

//CREATE A SELL BOOK REQUEST

router.post("/", async (req, res) => {
  const newBook = new sellBook(req.body);
  try {
    const savedBook = await newBook.save();
    res.status(200).json(savedBook);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET ALL SELL BOOK REQUEST

router.get("/", verifyTokenAndAdmin, async (req, res) => {
  try {
    const request = await sellBook.find();
    res.status(200).json(request);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;