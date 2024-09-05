import express from "express";
import router from "./routes/index.mjs";
import { errors } from "celebrate";

const PORT = 3000;
const app = express();

app.use(express.json());
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
  console.log(`Server is running on port http://localhost:${PORT}`);
});
