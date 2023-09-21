import { config } from "dotenv";
import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import { dirname } from "path";
import userRoutes from "./controllers/user.js";
import dbConnect from "./dbConnect.js";
import lawyerRoute from "./routes/lawyer.js";
import { fileURLToPath } from "url";

import onSocket from "./socket.js";

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const httpServer = createServer(app);
config();
dbConnect();

app.use(express.json());
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.use(express.static(__dirname + "/public"));

app.use("/", userRoutes);
app.use("/", lawyerRoute);

const io = new Server(httpServer);
onSocket(io);

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}...`));
httpServer.listen(3000, () => console.log(`Listening on port ${3000}...`));
