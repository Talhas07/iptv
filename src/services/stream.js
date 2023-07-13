import stream from "../models/stream.js";
import mongoose from "mongoose";
export const streamService = {
  get: async (query) => {
    const page = parseInt(query.page) || 1;
    const limit = parseInt(query.limit) || 10;
    const sortBy = query.sort || "+time";

    const startIndex = (page - 1) * limit;
    // const endIndex = page * limit;

    const sortOptions = { time: "" };
    if (sortBy === "+time") {
      sortOptions.time = 1;
    } else if (sortBy === "-time") {
      sortOptions.time = -1;
    }
    console.log(sortOptions.time);
    return stream.find(query).sort(sortOptions).skip(startIndex).limit(limit);
  },
  getById: async (id) => {
    return stream.findById(id);
  },
  create: async (data) => {
    return stream.create(data);
  },
  update: async (id, rest) => {
    return stream.findByIdAndUpdate(id, rest, { new: true });
  },
  delete: async (id) => {
    return stream.findByIdAndDelete(id);
  },

  episodebyid: async (id) => {
    return stream
      .aggregate([
        {
          $match: { _id: mongoose.Types.ObjectId(id) },
        },
        {
          $lookup: {
            from: "episodes",
            localField: "episode_id",
            foreignField: "_id",
            as: "episodes",
          },
        },
      ])
      .exec();
  },
  // streambyid: async (id) => {
  //   return stream
  //     .aggregate([
  //       {
  //         $match: { _id: mongoose.Types.ObjectId(id) },
  //       },
  //       {
  //         $lookup: {
  //           from: "streams",
  //           localField: "_id",
  //           foreignField: "season_id",
  //           as: "streams",
  //         },
  //       },
  //     ])
  //     .exec();
  // },
  userbyid: async (id) => {
    return stream
      .aggregate([
        {
          $match: { _id: mongoose.Types.ObjectId(id) },
        },
        {
          $lookup: {
            from: "users",
            localField: "user_id",
            foreignField: "_id",
            as: "users",
          },
        },
      ])
      .exec();
  },

  seasonbyid: async (id) => {
    console.log(id);
    return stream
      .aggregate([
        { $match: { _id: mongoose.Types.ObjectId(id) } },
        {
          $lookup: {
            from: "episodes",
            localField: "episode_id",
            foreignField: "_id",
            as: "episodes",
          },
        },
        {
          $unwind: "$episodes",
        },
        {
          $lookup: {
            from: "seasons",
            localField: "episodes.season_id",
            foreignField: "_id",
            as: "season",
          },
        },
      ])
      .exec();
  },

  seriesbyid: async (id) => {
    return stream
      .aggregate([
        { $match: { _id: mongoose.Types.ObjectId(id) } },
        {
          $lookup: {
            from: "episodes",
            localField: "episode_id",
            foreignField: "_id",
            as: "episodes",
          },
        },
        {
          $unwind: "$episodes",
        },
        {
          $lookup: {
            from: "seasons",
            localField: "episodes.season_id",
            foreignField: "_id",
            as: "seasons",
          },
        },
        {
          $unwind: "$seasons",
        },
        {
          $lookup: {
            from: "series",
            localField: "seasons.season_id",
            foreignField: "_id",
            as: "series",
          },
        },
      ])
      .exec();
  },
  genrebyid: async (id) => {
    return stream
      .aggregate([
        { $match: { _id: mongoose.Types.ObjectId(id) } },
        {
          $lookup: {
            from: "episodes",
            localField: "episode_id",
            foreignField: "_id",
            as: "episodes",
          },
        },
        {
          $unwind: "$episodes",
        },
        {
          $lookup: {
            from: "seasons",
            localField: "episodes.season_id",
            foreignField: "_id",
            as: "seasons",
          },
        },
        {
          $unwind: "$seasons",
        },
        {
          $lookup: {
            from: "series",
            localField: "seasons.season_id",
            foreignField: "_id",
            as: "series",
          },
        },
        {
          $unwind: "$series",
        },
        {
          $lookup: {
            from: "genre_series",
            localField: "series._id",
            foreignField: "series_id",
            as: "genre_series",
          },
        },
        {
          $unwind: "$genre_series",
        },
        {
          $lookup: {
            from: "genres",
            localField: "genre_series.genre_id",
            foreignField: "_id",
            as: "genre",
          },
        },
      ])
      .exec();
  },
};
