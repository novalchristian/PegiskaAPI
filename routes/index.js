import express from "express";
import jasaRoutes from "./jasaRoute.js";
import authRoutes from "./authRoute.js";
import userRoutes from "./userRoute.js";

const indexRouter = express.Router();
indexRouter.use("/jasa", jasaRoutes);
indexRouter.use("/auth", authRoutes);
indexRouter.use("/user", userRoutes);

export default indexRouter;
