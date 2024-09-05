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
    │ ├── validators/
    │ │ └── userValidator.mjs
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
