import { Router } from "express";
import {
  getUsersHandler,
  postUsersHandler,
  getUserByIdHandler,
  deleteUserByIdHandler,
  putUserByIdHandler,
} from "../controllers/users.mjs";
import { validateUserPost, validateUserPut, validateParamsUserId } from "../validators/userValidator.mjs";


const usersRouter = Router();
usersRouter.route("/").get(getUsersHandler).post(validateUserPost, postUsersHandler);
usersRouter
  .route("/:userId")
  .get(validateParamsUserId, getUserByIdHandler)
  .delete(validateParamsUserId, deleteUserByIdHandler)
  .put(validateParamsUserId, validateUserPut, putUserByIdHandler);

export default usersRouter;