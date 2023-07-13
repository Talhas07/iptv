import { streamService } from "../services/index.js";
import { httpResponse } from "../utils/index.js";

export const streamController = {
  //create
  create: async (req, res) => {
    try {
      const result = await streamService.create(req.body);
      let message = "stream created successfully";
      return httpResponse.CREATED(res, result, message);
    } catch (error) {
      console.log(error);
      return httpResponse.INTERNAL_SERVER_ERROR(res, error);
    }
  },
  //getall
  getall: async (req, res) => {
    try {
      const result = await streamService.get(req.query);
      let message = "stream fetched successfully";
      return httpResponse.SUCCESS(res, result, message);
    } catch (error) {
      console.log(error);
      return httpResponse.INTERNAL_SERVER_ERROR(res, error);
    }
  },
  //streambyid
  streambyid: async (req, res) => {
    try {
      const result = await streamService.getById(req.params.id);
      let message = "stream fetched successfully";
      return httpResponse.SUCCESS(res, result, message);
    } catch (error) {
      console.log(error);
      return httpResponse.INTERNAL_SERVER_ERROR(res, error);
    }
  },
  //episode by id
  episodebyid: async (req, res) => {
    try {
      const result = await streamService.episodebyid(req.params.id);
      let message = "episodes fetched successfully";
      return httpResponse.SUCCESS(res, result, message);
    } catch {
      error;
    }
    {
      return httpResponse.INTERNAL_SERVER_ERROR(res, error);
    }
  },
  //userbyid
  userbyid: async (req, res) => {
    try {
      const result = await streamService.userbyid(req.params.id);
      let message = "users fetched successfully";
      return httpResponse.SUCCESS(res, result, message);
    } catch (error) {
      console.log(error);
      return httpResponse.INTERNAL_SERVER_ERROR(res, error);
    }
  },
  //seasonbyid
  seasonbyid: async (req, res) => {
    try {
      const result = await streamService.seasonbyid(req.params.id);
      let message = "seasons fetched successfully";
      return httpResponse.SUCCESS(res, result, message);
    } catch (error) {
      console.log(error);

      return httpResponse.INTERNAL_SERVER_ERROR(res, error);
    }
  },
  //seriesbyid
  seriesbyid: async (req, res) => {
    try {
      const result = await streamService.seriesbyid(req.params.id);
      let message = "series fetched successfully";
      return httpResponse.SUCCESS(res, result, message);
    } catch (error) {
      console.log(error);
      return httpResponse.INTERNAL_SERVER_ERROR(res, error);
    }
  },

  //genrebyid
  genrebyid: async (req, res) => {
    try {
      const result = await streamService.genrebyid(req.params.id);
      let message = "genre fetched successfully";
      return httpResponse.SUCCESS(res, result, message);
    } catch (error) {
      console.log(error);
      return httpResponse.INTERNAL_SERVER_ERROR(res, error);
    }
  },

  //patch
  patch: async (req, res) => {
    try {
      const result = await streamService.update(req.params.id, req.body);
      let message = "stream updated successfully";
      return httpResponse.SUCCESS(res, result, message);
    } catch (error) {
      console.log(error);
      return httpResponse.INTERNAL_SERVER_ERROR(res, error);
    }
  },

  //delete
  delete: async (req, res) => {
    try {
      const result = await streamService.delete(req.params.id);
      let message = "stream deleted successfully";
      return httpResponse.SUCCESS(res, message);
    } catch (error) {
      console.log(error);
      return httpResponse.INTERNAL_SERVER_ERROR(res, error);
    }
  },
};
