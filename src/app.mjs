import express from "express";
import router from "./routes/index.mjs";
import { errors } from "celebrate";
import chalk from "chalk";
import morgan from "morgan";
import { logRequests } from "./middlewares/logging.mjs";
import consolidate from "consolidate";
import cookieParser from "cookie-parser";

const PORT = 3000;
const app = express();

app.use(cookieParser());
app.use(morgan('tiny'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logRequests)
app.use(express.static('src/public'));

// Configure view engines using consolidate
app.engine('ejs', consolidate.ejs);
app.engine('pug', consolidate.pug);
app.set('views', './src/views'); // Set the directory for templates


app.use(router)
app.use(errors())
app.use((error, req, res, next) => {
  if (!res.headersSent) {
    res.status(error.statusCode || 500).json({
      status: error.statusCode || 500,
      message: error.message || "Internal Server Error",  
    })
  }
})

app.listen(PORT, () => {
  console.log(chalk.green.bold.underline(`Server is running on port http://localhost:${PORT}`));
});