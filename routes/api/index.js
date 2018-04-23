const router = require("express").Router();
const commentsRoutes = require("./comments");

router.use("/comments", commentsRoutes);

module.exports = router;
