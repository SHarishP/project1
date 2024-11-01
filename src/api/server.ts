import express, { Application } from "express";
import { PORT as port } from "./config/envConfig";
import userRoute from "./routes/user.route";

const PORT = Number(port) || 8000;

const app: Application = express();

app.use(userRoute);

app.listen(PORT, () => {
  console.log(`Server started on Port ${PORT}`);
});
