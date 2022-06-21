import express from "express";
const router = express.Router();
import {getComments, getCommentsById} from "../models/index.js";

//general get all request
router.get("/", async function (req, res) {
    const result = await getComments();
    res.json({
        success: true,
        message: "comments will be here",
        payload: result,
    });
});
//get by id
router.get("/:id", async function (req, res) {
    const id = await Number(req.params.id);
    const result = await getCommentsById(id);
    res.json({
      success: true,
      message: `you are looking at comment with id ${id}`,
      payload: result,
    });
  });

export default router;