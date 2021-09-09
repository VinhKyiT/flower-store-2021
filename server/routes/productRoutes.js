import express from "express";
import {
  getProductById,
  getAllProducts,
} from "../controllers/productController.js";

const router = express.Router();

router.get("/", getAllProducts);
router.get("/:id", getProductById);

export default router;
