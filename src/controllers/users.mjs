// Mock data for users 
const users = [
  { id: 1, name: "John Doe", email: "john@example.com" },
  { id: 2, name: "Jane Smith", email: "jane@example.com" },
  { id: 3, name: "Bob Johnson", email: "bob@example.com" },
  { id: 4, name: "Alice Brown", email: "alice@example.com" },
  { id: 5, name: "Mike Davis", email: "mike@example.com" },
  { id: 6, name: "Sarah Wilson", email: "sarah@example.com" },
  { id: 7, name: "Emily Lee", email: "emily@example.com" },
  { id: 8, name: "David Chen", email: "david@example.com" },
  { id: 9, name: "Olivia Kim", email: "olivia@example.com" },
  { id: 10, name: "Michael Chen", email: "michael@example.com" },
];

const getUsersHandler = (req, res) => {
  res.render("users/index.pug", { users });
};

const postUsersHandler = (req, res) => {
  res.send("Post users route");
};

const getUserByIdHandler = (req, res) => {
  const { userId } = req.params;
  const user = users.find((u) => u.id === parseInt(userId, 10));

  if (!user) {
    return res.status(404).send("User not found");
  }

  res.render("users/detail.pug", { user });
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