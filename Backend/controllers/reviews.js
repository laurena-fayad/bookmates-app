const User = require("../models/User");
const Review = require("../models/Review");
const Book = require("../models/Book");

const addReview = async (req, res) => {
  const newReview = new Review(req.body);

  try {
    const savedReview = await newReview.save();
    const user = await User.findByIdAndUpdate(
      req.body.user_id,
      { $push: { reviews: savedReview._id } },
      { new: true }
    );
    res
      .status(200)
      .send({
        message: "Review posted successfully",
        user: user,
        review: savedReview,
      });
  } catch (err) {
    return res.status(500).send(err);
  }
};

const editReview = async (req, res) => {
    try {
        const review = await Review.findById(req.params.id);
        //Verify that the review belongs to the user then update
        if (review.user_id.equals(req.body.user_id)){
          await review.updateOne({ $set: {text: req.body.text}});
          const edited_review = await Review.findById(req.params.id);
          res.status(200).send({message:"Review successfully edited!", review: edited_review});
        } else {
          res.status(403).send("You are not allowed to edit others' reviews.");
        }
    } catch (err) {
        res.status(500).send(err);
    }
};  

module.exports.addReview = addReview;
module.exports.editReview = editReview;
