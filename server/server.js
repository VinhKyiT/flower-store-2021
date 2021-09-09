import dotenv from "dotenv";
import express from "express";
import connectDB from "./config/db.js";
import router from "./routes/index.js";
import cors from "cors";
import bodyParser from "body-parser";

dotenv.config();

connectDB();

const app = express();

app.use(express.json());

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

router(app);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
