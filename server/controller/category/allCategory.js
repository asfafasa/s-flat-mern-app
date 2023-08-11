const url = require("url");

const Category = require("../../models/Category");
const Product = require("../../models/Product");
const createHttpError = require("http-errors");

const allCategory = async (req, res, next) => {
  try {
    const { name } = req.query;

    let searchName = {};

    let skip = req.query.skip ? req.query.skip : 0;
    let limit = req.query.limit ? req.query.limit : 999999999;

    if (name) {
      searchName = {
        name: {
          $regex: name,
          $options: "i",
        },
      };
    }

    const data = await Category.aggregate([
      {
        $facet: {
          data: [
            {
              $match: searchName,
            },
            { $skip: 0 },
            { $limit: 9999 },
          ],
          count: [
            {
              $count: "total",
            },
          ],
        },
      },
    ]);

    return res.status(200).json({
      success: true,
      message: "All category",
      data: data[0].data,
      limit: data[0].data.length,
      count: data[0].count[0].total,
      pagination: Number.parseInt(
        data[0].count[0].total / (data[0].data.length - skip)
      ),
    });
  } catch (err) {
    console.log(err);
    next(err);
  }
};

module.exports = allCategory;
