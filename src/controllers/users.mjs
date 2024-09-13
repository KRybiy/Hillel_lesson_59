import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

const JWT_SECRET = 'your_secret_key'; // Use a secure key in production
const JWT_EXPIRATION = '1h'; // Token expiration time

// Mock data for users 
const users = [
  { id: 1, name: "John Doe", email: "john@example.com", password: bcrypt.hashSync('password1', 10) },
  { id: 2, name: "Jane Smith", email: "jane@example.com", password: bcrypt.hashSync('password2', 10) },
  { id: 3, name: "Bob Johnson", email: "bob@example.com", password: bcrypt.hashSync('password3', 10) },
  { id: 4, name: "Alice Brown", email: "alice@example.com", password: bcrypt.hashSync('password4', 10) },
  { id: 5, name: "Mike Davis", email: "mike@example.com", password: bcrypt.hashSync('password5', 10) },
  { id: 6, name: "Sarah Wilson", email: "sarah@example.com", password: bcrypt.hashSync('password6', 10) },
  { id: 7, name: "Emily Lee", email: "emily@example.com", password: bcrypt.hashSync('password7', 10) },
  { id: 8, name: "David Chen", email: "david@example.com", password: bcrypt.hashSync('password8', 10) },
  { id: 9, name: "Olivia Kim", email: "olivia@example.com", password: bcrypt.hashSync('password9', 10) },
  { id: 10, name: "Michael Chen", email: "michael@example.com", password: bcrypt.hashSync('password10', 10) },
];

// Register user
export const registerHandler = (req, res) => {
  const { email, password, name } = req.body;
  const hashedPassword = bcrypt.hashSync(password, 10);
  const newUser = { id: users.length + 1, name, email, password: hashedPassword };
  users.push(newUser);
  console.log(users);
  res.status(201).send('User registered');
};

// Login user
export const loginHandler = (req, res) => {
  const { email, password } = req.body;
  const user = users.find(u => u.email === email);
  
  if (!user || !bcrypt.compareSync(password, user.password)) {
    return res.status(401).send('Invalid credentials');
  }

  const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, { expiresIn: JWT_EXPIRATION });
  res.cookie('token', token, { httpOnly: true });
  res.send('Login successful');
};

// Middleware to check JWT
export const verifyToken = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res.status(403).send('No token provided');
  }

  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).send('Failed to authenticate token');
    }

    req.user = decoded;
    next();
  });
};
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