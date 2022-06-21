import express from "express";
import categoriesRouter from "./routes/categories.js";
import subCategoriesRouter from "./routes/subCategories.js";
import commentsRouter from "./routes/userComments.js"
import userCredentialsRouter from "./routes/userCredentials.js"
import userPostsRouter from "./routes/userPosts.js"

const app = express();
const PORT = process.env.port || 3000;

// test route

app.get("/", function (req, res) {
  res.json({
    success: true,
    message: "Week 9 server is LIVE!",
  });
});

app.use("/categories", categoriesRouter);
app.use("/sub-categories", subCategoriesRouter);
app.use("/comments", commentsRouter);
app.use("/credentials", userCredentialsRouter);
app.use("/posts", userPostsRouter);


app.listen(PORT, function () {
  console.log(`Server is running on port ${PORT}`);
});
