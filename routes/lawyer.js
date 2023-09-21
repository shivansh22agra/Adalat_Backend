import express from "express";
import { getAllawyer, postlawyer } from "../controllers/lawyers.js";
const lawyerRoute = express();
lawyerRoute.get("/api/lawyer", getAllawyer);
lawyerRoute.post("/api/lawyer", postlawyer);
export default lawyerRoute;
