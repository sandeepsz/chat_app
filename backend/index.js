import dotenv from "dotenv";
import express from "express";
import { connectDB } from "./src/lib/db.js";
import authRoutes from "./src/routes/auth.route.js";
dotenv.config();
const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.json());

app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
  connectDB();
});
