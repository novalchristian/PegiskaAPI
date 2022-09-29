import express from "express";
import authController from "../controllers/authController.js";
import bodyParser from "body-parser";

const authRoutes = express.Router();
authRoutes.use(bodyParser.json());
authRoutes.use(bodyParser.urlencoded({ extended: false }));

authRoutes.route("/").post(authController.auth);

export default authRoutes;
