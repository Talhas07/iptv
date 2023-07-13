import mongoose from "mongoose";
import { seriesService } from "../services/index.js";
import { httpResponse } from "../utils/index.js";

export const seriesController = {
  //create
  create: async (req, res) => {
    try {
      const result = await seriesService.create(req.body);
      let message = "series created successfully";
      return httpResponse.CREATED(res, result, message);
    } catch (error) {
      console.log(error);
      return httpResponse.INTERNAL_SERVER_ERROR(res, error);
    }
  },

  //getall
  getall: async (req, res) => {
    try {
      const result = await seriesService.get(req.query);
      let message = "series fetched successfully";
      return httpResponse.SUCCESS(res, result, message);
    } catch (error) {
      return httpResponse.INTERNAL_SERVER_ERROR(res, error);
    }
  },

  //seriesbyid
  seriesbyid: async (req, res) => {
    try {
      const result = await seriesService.getById(req.params.id);
      let message = "series fetched successfully";
      return httpResponse.SUCCESS(res, result, message);
    } catch (error) {
      return httpResponse.INTERNAL_SERVER_ERROR(res, error);
    }
  },
  // seasonsbyid
  seasonsbyid: async (req, res) => {
    try {
      const result = await seriesService.seasonbyid(req.params.id);
      let message = "season fetched successfully";
      return httpResponse.SUCCESS(res, result, message);
    } catch (error) {
      return httpResponse.INTERNAL_SERVER_ERROR(res, error);
    }
  },

  //episodebyid

  episodebyid: async (req, res) => {
    try {
      console.log(req.params.id);
      const result = await seriesService.episodebyid(req.params.id);
      let message = "seasons fetched successfully";
      return httpResponse.SUCCESS(res, result, message);
    } catch (error) {
      return httpResponse.INTERNAL_SERVER_ERROR(res, error);
    }
  },

  //patch

  patch: async (req, res) => {
    try {
      const result = await seriesService.update(req.params.id, req.body);
      let message = "series updated successfully";
      return httpResponse.SUCCESS(res, result, message);
    } catch (error) {
      return httpResponse.INTERNAL_SERVER_ERROR(res, error);
    }
  },

  //delete
  delete: async (req, res) => {
    try {
      const result = await seriesService.delete(req.params.id);
      let message = "series deleted successfully";
      return httpResponse.SUCCESS(res, message);
    } catch (error) {
      return httpResponse.INTERNAL_SERVER_ERROR(res, error);
    }
  },
};
