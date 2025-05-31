import { Router } from "express";
import albumRouter from "./album.route";

const indexRouter = Router()

indexRouter.use("/album", albumRouter)

export default indexRouter;