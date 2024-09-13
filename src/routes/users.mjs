import { Router } from "express";
import {
  getUsersHandler,
  postUsersHandler,
  getUserByIdHandler,
  deleteUserByIdHandler,
  putUserByIdHandler,
  registerHandler,
  loginHandler,
  verifyToken
} from "../controllers/users.mjs";
import { validateUserPost, validateUserPut, validateParamsUserId } from "../validators/userValidator.mjs";

const usersRouter = Router();

// Public routes
usersRouter.post('/register', registerHandler);
usersRouter.post('/login', loginHandler);

// Protected routes
usersRouter.use(verifyToken); // Apply JWT verification middleware

usersRouter.get('/register', (req, res) => {
  res.render('users/register.pug');
});

usersRouter.route("/").get(getUsersHandler).post(validateUserPost, postUsersHandler);
usersRouter
  .route("/:userId")
  .get(validateParamsUserId, getUserByIdHandler)
  .delete(validateParamsUserId, deleteUserByIdHandler)
  .put(validateParamsUserId, validateUserPut, putUserByIdHandler);

export default usersRouter;
