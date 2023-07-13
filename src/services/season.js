import season from "../models/season.js";
import mongoose from "mongoose";
export const seasonService = {
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
    return season.find(query).sort(sortOptions).skip(startIndex).limit(limit);
  },
  getById: async (id) => {
    return season.findById(id);
  },
  create: async (data) => {
    return season.create(data);
  },
  update: async (id, rest) => {
    return season.findByIdAndUpdate(id, rest, { new: true });
  },
  delete: async (id) => {
    return season.findByIdAndDelete(id);
  },

  episodebyid: async (id) => {
    return season
      .aggregate([
        {
          $match: { _id: mongoose.Types.ObjectId(id) },
        },
        {
          $lookup: {
            from: "episodes",
            localField: "_id",
            foreignField: "season_id",
            as: "episodes",
          },
        },
      ])
      .exec();
  },
};
