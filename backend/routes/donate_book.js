const { verifyToken,verifyTokenAndAuthorization,verifyTokenAndAdmin,verifyTokenAndUser } = require("./verifyToken");
const donateBook = require("../models/Donate_Book");
const router = require("express").Router();

//CREATE A DONATION REQUEST

router.post("/", async (req, res) => {
  const newBook = new donateBook(req.body);
  try {
    const savedBook = await newBook.save();
    res.status(200).json(savedBook);
  } catch (err) {
    res.status(500).json(err);
  }
});

 //GET ALL DONATION REQUEST

router.get("/", verifyTokenAndAdmin, async (req, res) => {
  try {
    const request = await donateBook.find();
    res.status(200).json(request);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;