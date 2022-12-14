import express from "express";
import jasaRoutes from "./jasaRoute.js";
import authRoutes from "./authRoute.js";
import userRoutes from "./userRoute.js";
import blogRoutes from "./blogRoute.js";
import pesananRoutes from "./pesananRoute.js";
import clientRoutes from "./clientRoute.js";
import stakeholderRoutes from "./stakeholderRoute.js"

const indexRouter = express.Router();
indexRouter.use(express.urlencoded({ extended: true }));

indexRouter.get("/", (req, res) => {
  res.send("Selamat datang di PEGISKA API");
});

indexRouter.use("/gambar", express.static("gambar"));
indexRouter.use("/jasa", jasaRoutes);
indexRouter.use("/auth", authRoutes);
indexRouter.use("/user", userRoutes);
indexRouter.use("/blog", blogRoutes);
indexRouter.use("/pesanan", pesananRoutes);
indexRouter.use("/client", clientRoutes);
indexRouter.use("/stakeholder", stakeholderRoutes)

export default indexRouter;
