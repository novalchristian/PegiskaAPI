import express from "express";
import jasaRoutes from "./jasaRoute.js";
import authRoutes from "./authRoute.js";
import userRoutes from "./userRoute.js";
import blogRoutes from "./blogRoute.js";
import pesananRoutes from "./pesananRoute.js";

const indexRouter = express.Router();
indexRouter.use("/jasa", jasaRoutes);
indexRouter.use("/auth", authRoutes);
indexRouter.use("/user", userRoutes);
indexRouter.use("/blog", blogRoutes);
indexRouter.use("/pesanan", pesananRoutes);

export default indexRouter;
