import { Router } from "express";
import { getRootHandler } from "../controllers/root.mjs";
import { logRequests } from "../middlewares/logging.mjs";

const rootRouter = Router();
rootRouter.use(logRequests)
rootRouter.route("/").get(getRootHandler);

export default rootRouter;