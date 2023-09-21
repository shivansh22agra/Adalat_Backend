import express from "express";
import { config } from "dotenv";
import dbConnect from "./dbConnect.js";
import userRoutes from "./controllers/user.js";
import lawyerRoute from "./routes/lawyer.js";

const app = express();

config();
dbConnect();

app.use(express.json());

app.use("/", userRoutes);
app.use("/",lawyerRoute);

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}...`));
