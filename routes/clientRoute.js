import express from "express";
import {
  getAllClient,
  postClient,
} from "../controllers/clientController.js";
import middlewareCtrl from "../controllers/middlewareController.js";
import bodyParser from "body-parser";
import multer from "multer";
import * as path from "path";

const Clientroutes = express.Router();
Clientroutes.use(bodyParser.json());
Clientroutes.use(bodyParser.urlencoded({ extended: false }));

const upload = multer({
  storage: multer.diskStorage({
    destination: "./gambar/client",
    filename: function (req, file, cb) {
      cb(
        null,
        file.fieldname + "-" + Date.now() + path.extname(file.originalname)
      );
    },
  }),
  limits: { fileSize: 2000000 },
});

Clientroutes.route("/")
  .get(getAllClient)
  .post(middlewareCtrl.checkSession, upload.single("clientURL"), postClient);

export default Clientroutes;
