import express from "express";
import {
  getAllBlog,
  getBlog,
  postBlog,
  putBlog,
  delBlog,
} from "../controllers/blogController.js";
import middlewareCtrl from "../controllers/middlewareController.js";
import bodyParser from "body-parser";
import multer from "multer";
import * as path from "path";

const Blogroutes = express.Router();
Blogroutes.use(bodyParser.json());
Blogroutes.use(bodyParser.urlencoded({ extended: false }));

const upload = multer({
  storage: multer.diskStorage({
    destination: "./gambar/blog",
    filename: function (req, file, cb) {
      cb(
        null,
        file.fieldname + "-" + Date.now() + path.extname(file.originalname)
      );
    },
  }),
  limits: { fileSize: 2000000 },
});

Blogroutes.route("/")
  .get(getAllBlog)
  .post(middlewareCtrl.checkSession, upload.single("blog"), postBlog);
Blogroutes.route("/:id")
  .get(getBlog)
  .put(middlewareCtrl.checkSession, upload.single("blog"), putBlog)
  .delete(middlewareCtrl.checkSession, delBlog);

export default Blogroutes;
