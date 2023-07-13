import mongoose from "mongoose";
import { seasonService } from "../services/index.js";
import { httpResponse } from "../utils/index.js";

export const seasonController = {
  //create
  create: async (req, res) => {
    try {
      const result = await seasonService.create(req.body);
      let message = "season created successfully";
      return httpResponse.CREATED(res, result, message);
    } catch (error) {
      return httpResponse.INTERNAL_SERVER_ERROR(res, error);
    }
  },
  //getall
  getall: async (req, res) => {
    try {
      const result = await seasonService.get(req.query);
      let message = "seasons fetched successfully";
      return httpResponse.SUCCESS(res, result, message);
    } catch (error) {
      return httpResponse.INTERNAL_SERVER_ERROR(res, error);
    }
  },
  //getbyid
  getbyid: async (req, res) => {
    try {
      const result = await seasonService.getById(req.params.id);
      let message = "season fetched successfully";
      return httpResponse.SUCCESS(res, result, message);
    } catch (error) {
      return httpResponse.INTERNAL_SERVER_ERROR(res, error);
    }
  },
  //episodebyid
  episodebyid: async (req, res) => {
    try {
      const result = await seasonService.episodebyid(req.params.id);
      let message = "episodes fetched successfully";
      return httpResponse.SUCCESS(res, result, message);
    } catch (error) {
      return httpResponse.INTERNAL_SERVER_ERROR(res, error);
    }
  },
  //patch
  patch: async (req, res) => {
    try {
      const result = await seasonService.update(req.params.id, req.body);
      let message = "season updated successfully";
      return httpResponse.SUCCESS(res, result, message);
    } catch (error) {
      return httpResponse.INTERNAL_SERVER_ERROR(res, error);
    }
  },
  //delete
  delete: async (req, res) => {
    try {
      const result = await seasonService.delete(req.params.id);
      let message = "season deleted successfully";
      return httpResponse.SUCCESS(res, message);
    } catch (error) {
      return httpResponse.INTERNAL_SERVER_ERROR(res, error);
    }
  },
};
