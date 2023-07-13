import series from "../models/series.js";
import mongoose from "mongoose";
export const seriesService = {
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
    return series.find(query).sort(sortOptions).skip(startIndex).limit(limit);
  },
  getById: async (id) => {
    return series.findById(id);
  },
  create: async (data) => {
    return series.create(data);
  },
  update: async (id, rest) => {
    return series.findByIdAndUpdate(id, rest, { new: true });
  },
  delete: async (id) => {
    return series.findByIdAndDelete(id);
  },

  seasonbyid: async (id) => {
    return series
      .aggregate([
        {
          $match: { _id: mongoose.Types.ObjectId(id) },
        },
        {
          $lookup: {
            from: "seasons",
            localField: "_id",
            foreignField: "season_id",
            as: "seasons",
          },
        },
      ])
      .exec();
  },

  episodebyid: async (id) => {
    return series
      .aggregate([
        {
          $match: { _id: mongoose.Types.ObjectId(id) },
        },
        {
          $lookup: {
            from: "seasons",
            localField: "_id",
            foreignField: "season_id",
            as: "seasons",
          },
        },
        { $unwind: "$seasons" },
        {
          $lookup: {
            from: "episodes",
            localField: "seasons._id",
            foreignField: "season_id",
            as: "episodes",
          },
        },
      ])
      .exec();
  },
};
