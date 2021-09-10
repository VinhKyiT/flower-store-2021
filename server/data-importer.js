import dotenv from "dotenv";

import categories from "./data/categories.js";
import connectDB from "./config/db.js";
import Category from "./models/category.js";

dotenv.config();
connectDB();

const importData = async () => {
  try {
    await Category.deleteMany({});
    await Category.insertMany(categories);
    console.log("Data imported.");
    process.exit();
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};

importData();