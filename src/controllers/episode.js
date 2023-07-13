import { episodeService } from "../services/index.js";
import { httpResponse } from "../utils/index.js";
export const episodeController = {
  create: async (req, res) => {
    try {
      const result = await episodeService.create(req.body);
      let message = "episode created successfully";
      return httpResponse.CREATED(res, result, message);
    } catch (error) {
      return httpResponse.INTERNAL_SERVER_ERROR(res, error);
    }
  },
  //getall
  getall: async (req, res) => {
    try {
      const result = await episodeService.get(req.query);
      let message = "episode fetched successfully";
      return httpResponse.SUCCESS(res, result, message);
    } catch (error) {
      return httpResponse.INTERNAL_SERVER_ERROR(res, error);
    }
  },

  //episodebyid
  episodebyid: async (req, res) => {
    try {
      const result = await episodeService.getById(req.params.id);
      let message = "episode fetched successfully";
      return httpResponse.SUCCESS(res, result, message);
    } catch (error) {
      return httpResponse.INTERNAL_SERVER_ERROR(res, error);
    }
  },

  //streamsbyid
  streamsbyid: async (req, res) => {
    try {
      const result = await episodeService.streamsbyid(req.params.id);
      let message = "streams fetched successfully";
      return httpResponse.SUCCESS(res, result, message);
    } catch (error) {
      console.log(error);
      return httpResponse.INTERNAL_SERVER_ERROR(res, error);
    }
  },
  //patch

  patch: async (req, res) => {
    try {
      const result = await episodeService.update(req.params.id, req.body);
      let message = "episode patched successfully";
      return httpResponse.SUCCESS(res, result, message);
    } catch (error) {
      return httpResponse.INTERNAL_SERVER_ERROR(res, error);
    }
  },
  //delete
  delete: async (req, res) => {
    try {
      const result = await episodeService.delete(req.params.id);
      let message = "episode deleted successfully";
      return httpResponse.SUCCESS(res, result, message);
    } catch (error) {
      return httpResponse.INTERNAL_SERVER_ERROR(res, error);
    }
  },
};
