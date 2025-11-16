import mongoose from "mongoose";

const MONGODB_URI = "اینجا لینک MongoDB خودت رو بزار"; 

mongoose.connect(MONGODB_URI)
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch(err => console.error("❌ Connection failed:", err.message));
