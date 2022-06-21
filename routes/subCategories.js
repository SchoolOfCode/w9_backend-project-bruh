import express from "express";
const router = express.Router();
import { getSubCategories, getSubCategoryById } from "../models/index.js";

//general get all request
router.get("/", async function (req, res) {
  const result = await getSubCategories();
  res.json({
    success: true,
    message: "subcategories woooo",
    payload: result,
  });
});

router.get("/:id", async function (req, res) {
  const id = await Number(req.params.id);
  const result = await getSubCategoryById(id);
  res.json({
    success: true,
    message: `you are looking at subcategory ${id}`,
    payload: result,
  });
});

export default router;
