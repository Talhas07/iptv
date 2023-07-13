import { genreService } from "../services/index.js";
import { httpResponse } from "../utils/index.js";
export const genreController = {
  //create
  create: async (req, res) => {
    try {
      const result = await genreService.create(req.body);
      let message = "genre created successfully";
      return httpResponse.CREATED(res, result, message);
    } catch (error) {
      return httpResponse.INTERNAL_SERVER_ERROR(res, error);
    }
  },

  //getall
  getall: async function (req, res) {
    try {
      const result = await genreService.get(req.query);
      let message = "genre fetched successfully";
      return httpResponse.SUCCESS(res, result, message);
    } catch (error) {
      return httpResponse.INTERNAL_SERVER_ERROR(res, error);
    }
  },

  //getbyid
  getbyid: async (req, res) => {
    try {
      const result = await genreService.getById(req.params.id);
      let message = "genre fetched successfully";
      return httpResponse.SUCCESS(res, result, message);
    } catch (error) {
      return httpResponse.INTERNAL_SERVER_ERROR(res, error);
    }
  },

  //seriesbyid
  seriesbyid: async (req, res) => {
    try {
      const id = +req.params.id;
      const result = await genreService.seriesbyid(req.params.id);
      let message = "series fetched successfully";
      return httpResponse.SUCCESS(res, result, message);
    } catch (error) {
      return httpResponse.INTERNAL_SERVER_ERROR(res, error);
    }
  },

  //seasonsbyid

  seasonbyid: async (req, res) => {
    try {
      const result = await genreService.seasonbyid(req.params.id);
      let message = "seasons fetched successfully";
      return httpResponse.SUCCESS(res, result, message);
    } catch (error) {
      console.log(error);
      return httpResponse.INTERNAL_SERVER_ERROR(res, error);
    }
  },

  //patch
  patch: async (req, res) => {
    try {
      console.log(req.params.id, req.body);
      const result = await genreService.update(req.params.id, req.body);
      let message = "genre patched successfully";
      return httpResponse.SUCCESS(res, result, message);
    } catch (error) {
      return httpResponse.INTERNAL_SERVER_ERROR(res, error);
    }
  },

  //delete
  delete: async (req, res) => {
    try {
      const result = await genreService.delete(req.params.id);
      let message = "genre deleted successfully";
      return httpResponse.SUCCESS(res, message);
    } catch (error) {
      return httpResponse.INTERNAL_SERVER_ERROR(res, error);
    }
  },
};
