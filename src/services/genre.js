import mongoose from "mongoose";
import genre from "../models/genre.js";

export const genreService = {
  get: async (query) => {
    const page = parseInt(query.page) || 1;
    const limit = parseInt(query.limit) || 10;
    const sortBy = query.sort || "+name";

    const startIndex = (page - 1) * limit;
    // const endIndex = page * limit;

    const sortOptions = { name: "" };
    if (sortBy === "+name") {
      sortOptions.name = 1;
    } else if (sortBy === "-name") {
      sortOptions.name = -1;
    }
    console.log(sortOptions.name);
    return genre.find(query).sort(sortOptions).skip(startIndex).limit(limit);
  },
  getById: async (id) => {
    console.log(id);
    return genre.findById(id);
  },
  create: async (data) => {
    return genre.create(data);
  },
  update: async (id, rest) => {
    return genre.findByIdAndUpdate(id, rest, { new: true });
  },
  delete: async (id) => {
    return genre.findByIdAndDelete(id);
  },
  seriesbyid: async (id) => {
    return genre
      .aggregate([
        {
          $match: { _id: mongoose.Types.ObjectId(id) },
        },

        {
          $lookup: {
            from: "genre_series",
            localField: "_id",
            foreignField: "genre_id",
            as: "new2",
          },
        },
        {
          $unwind: "$new2",
        },
        {
          $lookup: {
            from: "series",
            localField: "new2.series_id",
            foreignField: "_id",
            as: "series",
          },
        },
      ])
      .exec();
  },
  seasonbyid: async (id) => {
    return genre
      .aggregate([
        {
          $match: { _id: mongoose.Types.ObjectId(id) },
        },

        {
          $lookup: {
            from: "genre_series",
            localField: "_id",
            foreignField: "genre_id",
            as: "new2",
          },
        },
        {
          $unwind: "$new2",
        },
        {
          $lookup: {
            from: "series",
            localField: "new2.series_id",
            foreignField: "_id",
            as: "series",
          },
        },
        {
          $unwind: "$series",
        },

        {
          $lookup: {
            from: "seasons",
            localField: "series._id",
            foreignField: "season_id",
            as: "seasons",
          },
        },
      ])

      .exec();
  },
};
