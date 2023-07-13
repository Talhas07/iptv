import episode from "../models/episode.js";
import mongoose from "mongoose";
export const episodeService = {
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
    return episode.find(query).sort(sortOptions).skip(startIndex).limit(limit);
  },
  getById: async (id) => {
    return episode.findById(id);
  },
  create: async (data) => {
    return episode.create(data);
  },
  update: async (id, rest) => {
    return episode.findByIdAndUpdate(id, rest, { new: true });
  },
  delete: async (id) => {
    return episode.findByIdAndDelete(id);
  },

  streamsbyid: async (id) => {
    return episode
      .aggregate([
        {
          $match: { _id: mongoose.Types.ObjectId(id) },
        },
        {
          $lookup: {
            from: "streams",
            localField: "_id",
            foreignField: "episode_id",
            as: "streams",
          },
        },
      ])
      .exec();
  },
};
