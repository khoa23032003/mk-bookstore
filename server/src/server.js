import express from "express";
import dotenv from "dotenv";
import { connectDB } from "../libs/db.js";
//để đọc file env
dotenv.config(); // load .env

const app = express();
const PORT = process.env.PORT || 5001;

app.use(express.json());
// bộc để kết nối db trước rồi mới chạy
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server chạy trên cổng ${PORT}`);
  });
});
