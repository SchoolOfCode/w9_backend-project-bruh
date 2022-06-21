import express from "express";
const router = express.Router();
import { getCredentials, getCredentialsById } from "../models/index.js";

//general get all request
router.get("/", async function (req, res) {
  const result = await getCredentials();
  res.json({
    success: true,
    message: "this is where all user credentials should be returned",
    payload: result,
  });
});

router.get("/:id", async function (req, res) {
  const id = await Number(req.params.id);
  const result = await getCredentialsById(id);
  res.json({
    success: true,
    message: `you are looking at user credentials with id ${id}`,
    payload: result,
  });
});

export default router;
