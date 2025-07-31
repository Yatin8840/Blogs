// backend/config/db.ts

import mongoose from "mongoose";

const connectDb = async (): Promise<void> => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI as string);
    console.log(`✅ Connected To Database: ${conn.connection.host}`);
  } catch (error) {
    console.error("❌ DB Connection Error:", error);
    process.exit(1); // Optional: stop the process on failure
  }
};

export default connectDb;
