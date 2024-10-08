# 🚀 Express App

This is a simple Express application with routes and controllers for managing articles and users. The app uses a modular structure with separate files for controllers, routes, and validation logic.

## 📁 Project Structure

    project-root/
    │ ├── src/
    │ ├── app.mjs
    │ ├── controllers/
    │ │ ├── articles.mjs
    │ │ ├── users.mjs
    │ │ └── root.mjs
    │ ├── routes/
    │ │ ├── index.mjs
    │ │ ├── articles.mjs
    │ │ ├── users.mjs
    │ │ └── root.mjs
    │ ├── middlewares/
    │ │ ├── accessControl.mjs
    │ │ ├── auth.mjs
    │ │ └── logging.mjs
    │ ├── validators/
    │ │ └── userValidator.mjs
    │ ├── public/css
    │ │ └── styles.css
    │ ├── views/
    │ │ ├── articles
    │ │ │ ├── index.ejs
    │ │ │ ├── detail.ejs
    │ │ └── users
    │ │ │ ├── register.pug
    │ │ │ ├── index.pug
    │ │ │ └── detail.pug
    │ │ └── index.pug
    ├── package.json
    └── README.md

## 🛠️ Getting Started

### ✅ Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed on your machine. You will also need npm (which comes with Node.js) or yarn for managing dependencies.

### 📥 Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd <repository-name>

   ```

2. Install the dependencies:

   ```bash
   npm install

   ```

or

   ```bash
   yarn install

   ```



### ▶️ Running the Application
To start the server, run:

   ```bash
   npm start

   ```

or, if you're using yarn:

   ```bash
   yarn start

   ```

The server will start on the default port `3000`. You can change the port by setting the environment variable `PORT`.

## 📚 API Endpoints

Here is a list of available API endpoints:

### 🌐 Root

- **GET /** - Returns a welcome message.

### 👥 Users

- **GET /users** - Fetches a list of all users.
- **POST /users** - Creates a new user (validated by `userValidator.mjs`).

### 📝 Articles

- **GET /articles** - Fetches a list of all articles.
- **POST /articles** - Creates a new article.

## 🗂️ Project Structure Explanation

- **`app.mjs`**: Entry point of the application, sets up Express and middleware.
- **`controllers/`**: Contains the logic for handling requests and responses.
  - `articles.mjs`: Handles article-related operations.
  - `users.mjs`: Handles user-related operations.
  - `root.mjs`: Handles the root endpoint.
- **`routes/`**: Defines the routes for the app.
  - `index.mjs`: Main router that ties all other routes together.
  - `articles.mjs`: Routes related to articles.
  - `users.mjs`: Routes related to users.
  - `root.mjs`: Routes for the root endpoint.
- **`validators/`**: Contains validation logic.
  - `userValidator.mjs`: Middleware for validating user data.

## 🤝 Contributing

If you'd like to contribute, please fork the repository and use a feature branch. Pull requests are warmly welcome.

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

## 📧 Contact

If you have any questions, please feel free to reach out.
