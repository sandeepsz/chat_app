import dotenv from "dotenv";
import express from "express";
import cookieParser from "cookie-parser";
import { connectDB } from "./src/lib/db.js";
import authRoutes from "./src/routes/auth.route.js";
import messageRoute from "./src/routes/message.route.js"
dotenv.config();
const app = express();

const PORT = process.env.PORT || 3001;
const HOST = "localhost";

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/message", messageRoute)

app.listen(PORT, () => {
  console.log(`Server is running at http://${HOST}:${PORT}`);
  connectDB();
});
