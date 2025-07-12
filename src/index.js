import dotenv from "dotenv";
import { app } from "./app.js";
import { connectDB } from "./db/index.js";

dotenv.config({ path: "./.env" });

let PORT = process.env.PORT || 4000;

//connecting the mongoDB.
connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on PORT:${PORT}`);
    });
  })
  .catch((error) => {
    console.error(`MongoDB connection Failed`, error.message);
  });
