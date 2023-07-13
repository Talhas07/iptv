import user from "../models/user.js";
import mongoose from "mongoose";
import stream from "../models/stream.js";
export const userService = {
  get: async (query) => {
    const page = parseInt(query.page) || 1;
    const limit = parseInt(query.limit) || 10;
    const sortBy = query.sort || "+name";

    const startIndex = (page - 1) * limit;
    // const endIndex = page * limit;

    const sortOptions = { first_name: "" };
    if (sortBy === "+name") {
      sortOptions.first_name = 1;
    } else if (sortBy === "-name") {
      sortOptions.first_name = -1;
    }
    console.log(sortOptions.first_name);
    return user.find(query).sort(sortOptions).skip(startIndex).limit(limit);
  },

  getById: async (id) => {
    return user.findById(id);
  },
  create: async (data) => {
    return user.create(data);
  },
  update: async (id, rest) => {
    return user.findByIdAndUpdate(id, rest, { new: true });
  },
  delete: async (id) => {
    console.log(id);
    return user.findByIdAndDelete(id);
  },

  postlogin: async (data) => {
    return user.findOne({ email: data.email });
  },

  streambyid: async (id) => {
    return user
      .aggregate([
        { $match: { _id: mongoose.Types.ObjectId(id) } },

        {
          $lookup: {
            from: "streams",
            localField: "_id",
            foreignField: "user_id",
            as: "streams",
          },
        },
      ])
      .exec();
  },

  // streambytwoid: async (id,streamid) => {
  //   return user
  //   .aggregate([
  //     { $match: { _id: mongoose.Types.ObjectId(id) } },

  //     {
  //       $lookup: {
  //         from: "stream",
  //         localField: "_id",
  //         foreignField: "user_id",
  //         as: "streams",
  //       },
  //     },
  //     { $unwind:$streams },
  //     { $match: { $streams._id : mongoose.Types.ObjectId(streamid) } },
  //   ])
  //   .exec();

  // },
  streambytwoid: async (id, streamid) => {
    return stream.findOne({ _id: streamid, user_id: id });
  },

  deletebytwoid: async (id, streamid) => {
    return stream.findOneAndDelete({ _id: streamid, user_id: id });
  },
};
