// const mongoose = require("mongoose");

function Pagination(model, find) {
  return async (req, res, next) => {
    const page = Number.parseInt(req.query.page || "1") || 1;
    const limit = Number.parseInt(req.query.limit || "10");
    if (limit > 20) {
      limit = 20;
    }

    const total = await model.find({}).countDocuments();
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    req.pagination = {};

    //Counting Total pages
    const total_pages = Math.ceil(total / limit);
    req.pagination.total_pages = total_pages;

    if (startIndex !== 0) {
      req.pagination.prev = {
        page: page > total_pages ? total_pages : page - 1,
      };
    }

    if (endIndex < total) {
      req.pagination.next = {
        page: page + 1,
      };
    }

    try {
      const results = await model.find(find).skip(startIndex).limit(limit);
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
