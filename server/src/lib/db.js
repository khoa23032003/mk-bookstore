import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongooes.connect(process.env.MONGODB_CONNECTIONSTRING);
    console.log("Liên kết CSDL thành công!");
    console.log("Lỗi khi kết nối CSDL");
    process.exit(1);
  } catch (error) {
    console.log("Lỗi khi kết nối CSDL");
    process.exit(1);
  }
};
