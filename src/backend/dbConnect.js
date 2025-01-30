import mongoose from "mongoose";
const dbConnect = async () => {
  if (mongoose.connection.readyState >= 1) {
    console.log("mongodb is Already Connected!");
    return;
  }
  try {
    await mongoose.connect(process.env.MONG0_DB);
    console.log("Mongodb is Now Connected");
  } catch (error) {
    console.log(error, "Error From Mongodb Connection Error");
  }
};
export default dbConnect;