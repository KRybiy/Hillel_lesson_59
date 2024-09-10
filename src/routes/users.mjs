import { Router } from "express";
import {
  getUsersHandler,
  postUsersHandler,
  getUserByIdHandler,
  deleteUserByIdHandler,
  putUserByIdHandler,
} from "../controllers/users.mjs";
import { validateUserPost, validateUserPut, validateParamsUserId } from "../validators/userValidator.mjs";
import { basicAuth } from "../middlewares/auth.mjs";


const usersRouter = Router();

//usersRouter.use(basicAuth)
usersRouter.route("/").get(getUsersHandler).post(validateUserPost, postUsersHandler);
usersRouter
  .route("/:userId")
  .get(validateParamsUserId, getUserByIdHandler)
  .delete(validateParamsUserId, deleteUserByIdHandler)
  .put(validateParamsUserId, validateUserPut, putUserByIdHandler);

export default usersRouter;