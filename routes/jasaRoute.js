import express from "express";
import {
  getAllJasa,
  getJasa,
  postJasa,
  putJasa,
  delJasa,
} from "../controllers/jasaController.js";
import middlewareCtrl from "../controllers/middlewareController.js";
import bodyParser from "body-parser";

const Jasaroutes = express.Router();
Jasaroutes.use(bodyParser.json());
Jasaroutes.use(bodyParser.urlencoded({ extended: false }));

Jasaroutes.route("/")
  .get(middlewareCtrl.checkSession, getAllJasa)
  .post(middlewareCtrl.checkSession, postJasa);
Jasaroutes.route("/:id")
  .get(middlewareCtrl.checkSession, getJasa)
  .put(middlewareCtrl.checkSession, putJasa)
  .delete(middlewareCtrl.checkSession, delJasa);

export default Jasaroutes;
