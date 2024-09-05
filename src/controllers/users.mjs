// users routes
const getUsersHandler = (req, res) => {
  res.send("Get users route");
};

const postUsersHandler = (req, res) => {
  res.send("Post users route");
};

// users/:userId routes
const getUserByIdHandler = (req, res) => {
  const { userId } = req.params;
  res.send(`Get user by id: ${userId}`);
};

const deleteUserByIdHandler = (req, res) => {
  const { userId } = req.params;
  res.send(`Delete user by id: ${userId}`);
};

const putUserByIdHandler = (req, res) => {
  const { userId } = req.params;
  res.send(`Put user by id: ${userId}`);
};

export {
  getUsersHandler,
  postUsersHandler,
  getUserByIdHandler,
  deleteUserByIdHandler,
  putUserByIdHandler,
};