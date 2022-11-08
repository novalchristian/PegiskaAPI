import express from "express";
import { getAllStakeholder, postStakeholder } from "../controllers/stakeholderController.js";
import middlewareCtrl from "../controllers/middlewareController.js";
import bodyParser from "body-parser";
import multer from "multer";
import * as path from "path";

const Stakeholderroutes = express.Router();
Stakeholderroutes.use(bodyParser.json());
Stakeholderroutes.use(bodyParser.urlencoded({ extended: false }));

const upload = multer({
  storage: multer.diskStorage({
    destination: "./gambar/stakeholder",
    filename: function (req, file, cb) {
      cb(
        null,
        file.fieldname + "-" + Date.now() + path.extname(file.originalname)
      );
    },
  }),
  limits: { fileSize: 2000000 },
});

Stakeholderroutes.route("/")
  .get(getAllStakeholder)
  .post(middlewareCtrl.checkSession, upload.single("stakeholderURL"), postStakeholder);

export default Stakeholderroutes;
