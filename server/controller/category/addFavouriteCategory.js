const { ObjectId } = require("mongoose").Types;
const Category = require("../../models/Category");

const addFavouriteCategory = async (req, res, next) => {
  try {
    const { id } = req.params;

    await Category.findOneAndUpdate(
      { id: id },
      { $push: { favourite: ObjectId(req.user._id) } }
    );

    res.status(200).json({
      success: true,
      message: "Added to Favourite",
    });
  } catch (err) {
    console.log(err);
    next(err);
  }
};

module.exports = addFavouriteCategory;
