import express from "express";
import dotenv from "dotenv";
const app = express();
const PORT = process.env.PORT || 5001;

app.use(express.json());

app.listen(PORT, () => {
  console.log(`server bắt đầu chạy trên cổng ${PORT}`);
});
