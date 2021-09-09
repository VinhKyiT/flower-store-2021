import express from "express";
import {
  getCategoryById,
  getAllCategories,
} from "../controllers/categoryController.js";

const router = express.Router();

router.get("/", getAllCategories);
router.get("/:id", getCategoryById);

export default router;
