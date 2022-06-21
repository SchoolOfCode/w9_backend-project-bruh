import express from "express";
const router = express.Router();
import { getCategories, getCategoryById } from "../models/index.js";

//general get all request
router.get("/", async function (req, res) {
  const result = await getCategories();
  res.json({
    success: true,
    message: "categories will be returned here",
    payload: result,
  });
});

//get by id
router.get("/:id", async function (req, res) {
  const id = await Number(req.params.id);
  const result = await getCategoryById(id);
  res.json({
    success: true,
    message: `you are looking at category ${id}`,
    payload: result,
  });
});

export default router;
