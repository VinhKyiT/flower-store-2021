import express from "express";
import {
  getCategoryDetailById,
  getAllCategoryDetails,
  getCategoryDetailByCategory,
} from "../controllers/categoryDetailController.js";

const router = express.Router();

router.get("/", getAllCategoryDetails);
router.get("/:id", getCategoryDetailById);
router.get("/cate/:cateId", getCategoryDetailByCategory);

export default router;
