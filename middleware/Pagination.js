const mongoose = require("mongoose");

/**
 *
 * @param {mongoose.Model} model
 * @param {object} filter - where clause
 * @param {object} projection - it can be null
 * @param {object} options - example {sort{date:-1}}
 * @param {string} path - populate
 *
 * @description
 * it will populate req.pagination and req.results
 *
 */
function Pagination(
  model,
  filter = {},
  projection = {},
  options = {},
  path = ""
) {
  return async (req, res, next) => {
    let page = Number.parseInt(req.query.page || "1") || 1;
    const limit = Number.parseInt(req.query.limit || "10");
    if (limit > 20) {
      limit = 20;
    }
    if (page < 0) {
      page = 1;
    }

    const total = await model.find({}).countDocuments();
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    req.pagination = {};

    //Counting Total pages
    const total_pages = Math.ceil(total / limit);
    req.pagination.total_pages = total_pages;

    //when only 1 page is there
    req.pagination.current = total_pages;

    //check if
    if (startIndex !== 0) {
      req.pagination.prev = {
        page: page > total_pages ? total_pages - 1 : page - 1,
      };

      req.pagination.current = total_pages ? total_pages : page - 1;
    }

    if (endIndex < total) {
      req.pagination.next = {
        page: page + 1,
      };

      req.pagination.current = page;
    }

    try {
      const results = await model
        .find(filter, projection, options)
        .populate(path)
        .skip(startIndex)
        .limit(limit);
      req.results = results;
      next();
    } catch (error) {
      console.log(error);
      res.status(400).json({
        error: error.message,
      });
    }
  };
}

module.exports = Pagination;
