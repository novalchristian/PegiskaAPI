import express from "express";
import {
  getAllUser,
  getUser,
  postUser,
  putUser,
  delUser,
} from "../controllers/UserController.js";
import middlewareCtrl from "../controllers/middlewareController.js";
import bodyParser from "body-parser";

const Userroutes = express.Router();
Userroutes.use(bodyParser.json());
Userroutes.use(bodyParser.urlencoded({ extended: false }));

Userroutes.route("/")
  .get(middlewareCtrl.checkSession, getAllUser)
  .post(postUser);
Userroutes.route("/:id")
  .get(middlewareCtrl.checkSession, getUser)
  .put(middlewareCtrl.checkSession, putUser)
  .delete(middlewareCtrl.checkSession, delUser);

export default Userroutes;
