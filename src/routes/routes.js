const express = require("express");
const {
  getDadJokesFunction,
  searchJokeFunction,
  insertUpdateFavouriteFunction,
} = require("../controller/jokesController");
const router = express.Router();

router.post("/searchjoke", searchJokeFunction);
router.post("/getdadjoke", getDadJokesFunction);
router.post("/insertupdatefavourite", insertUpdateFavouriteFunction);

module.exports = router;
