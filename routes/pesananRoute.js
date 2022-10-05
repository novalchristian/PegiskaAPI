import express from "express";
import {
  getAllPesanan,
  getPesanan,
  postPesanan,
  delPesanan,
} from "../controllers/pesananController.js";
import middlewareCtrl from "../controllers/middlewareController.js";
import bodyParser from "body-parser";
import multer from "multer";
import * as path from "path";

const Pesananroutes = express.Router();
Pesananroutes.use(bodyParser.json());
Pesananroutes.use(bodyParser.urlencoded({ extended: false }));

var storage = multer({
  storage: multer.diskStorage({
    destination: "./gambar/pesanan",
    filename: function (req, file, cb) {
      cb(
        null,
        file.fieldname + "-" + Date.now() + path.extname(file.originalname)
      );
    },
  }),
  limits: { fileSize: 2000000 },
});

var upload = multer({ storage: storage });

var uploadMultiple = upload.fields([
  { name: "nib", maxCount: 2 },
  { name: "ktpDirektur", maxCount: 2 },
  { name: "npwpPerusahaan", maxCount: 2 },
  { name: "aktaPendirian", maxCount: 2 },
  { name: "aktaPerusahaan", maxCount: 2 },
]);

Pesananroutes.route("/")
  .get(middlewareCtrl.checkSession, getAllPesanan)
  .post(middlewareCtrl.checkSession, uploadMultiple, postPesanan);
Pesananroutes.route("/:id")
  .get(middlewareCtrl.checkSession, getPesanan)
  .delete(middlewareCtrl.checkSession, delPesanan);

export default Pesananroutes;
