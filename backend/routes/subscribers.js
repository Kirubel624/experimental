const Subscriber = require ("../models/Subscribers");
const router = require("express").Router();
const { verifyTokenAndAdmin, } = require("./verifyToken");

//CREATE

router.post("/", async (req, res) => {
  const newSubscriber = new Subscriber(req.body);
  try {
    const savedSubscriber = await newSubscriber.save();
    res.status(200).json(savedSubscriber);
  } catch (err) {
    res.status(500).json(err);
  }
});


router.get("/", verifyTokenAndAdmin, async (req, res) => {
    const query = req.query.new;
    try {
      const subscribers = query
        ? await subscribers.find().sort({ _id: -1 }).limit(5)
        : await subscribers.find();
      res.status(200).json(subscribers);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  module.exports = router;
