import mongoose from "mongoose";

//mongo connection request
const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${process.env.DB_NAME}`
    );
    console.log(
      `MongoDB connected! \n HostName:${connectionInstance.Connection.host}`
    );
  } catch (error) {
    console.log("MongoDB connection Error", error);
    process.exit(1);
  }
};

export { connectDB };
