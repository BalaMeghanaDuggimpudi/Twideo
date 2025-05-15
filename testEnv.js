import dotenv from "dotenv";
import path from "path";

// Explicitly load .env from the current working directory
dotenv.config({ path: path.resolve(process.cwd(), ".env") });

console.log("MONGODB_URI:", process.env.MONGODB_URI);
