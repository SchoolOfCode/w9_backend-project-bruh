import express from "express";
const router = express.Router();
import {getPosts, getPostsById} from "../models/index.js";

//general get all request
router.get("/", async function (req, res) {
    const result = await getPosts();
    res.json({
        success: true,
        message: "userPosts is working",
        payload: result
    });
});

//get by id
router.get("/:id", async function (req, res) {
    const id = await Number(req.params.id);
    const result = await getPostsById(id);
    res.json({
      success: true,
      message: `you are looking at the post with id ${id}`,
      payload: result,
    });
  });


export default router