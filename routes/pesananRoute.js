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

const upload = multer({
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

// var uploadMultiple = upload.fields([
//   { name: "nib", maxCount: 1 },
//   { name: "ktpDirektur", maxCount: 1 },
//   { name: "npwpPerusahaan", maxCount: 1 },
//   { name: "aktaPendirian", maxCount: 1 },
//   { name: "aktaPerusahaan", maxCount: 1 },
// ]);

Pesananroutes.route("/")
  .get(middlewareCtrl.checkSession, getAllPesanan)
  .post(
    middlewareCtrl.checkSession,
    upload.fields([
      { name: "nib" },
      { name: "ktpDirektur" },
      { name: "npwpPerusahaan" },
      { name: "aktaPendirian" },
      { name: "aktaPerusahaan" },
    ]),
    postPesanan
  );
Pesananroutes.route("/:id")
  .get(middlewareCtrl.checkSession, getPesanan)
  .delete(middlewareCtrl.checkSession, delPesanan);

export default Pesananroutes;
