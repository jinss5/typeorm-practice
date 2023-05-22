const express = require("express");

const bookRouter = require("./bookRouter");

const router = express.Router();

router.use("/books", bookRouter.router);

module.exports = router;
