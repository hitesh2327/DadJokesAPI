const { getDadJokes } = require("../DB/Query/getDadJokes");
const { insertUpdateFavourite } = require("../DB/Query/insertUpdateFavourite");
const { searchJoke } = require("../DB/Query/searchJoke");

module.exports = {
  getDadJokesFunction: (req, res) => {
    getDadJokes(req, (context) => {
      if (context) {
        // Send a 200 OK status with the context as the JSON response
        res.status(200).json(context);
      } else {
        // If there's no context (i.e., no user found), return a 404 Not Found status
        res.sendStatus(404);
      }
    });
  },
  searchJokeFunction: (req, res) => {
    searchJoke(req, (context) => {
      if (context) {
        // Send a 200 OK status with the context as the JSON response
        res.status(200).json(context);
      } else {
        // If there's no context (i.e., no user found), return a 404 Not Found status
        res.sendStatus(404);
      }
    });
  },
  insertUpdateFavouriteFunction: (req, res) => {
    insertUpdateFavourite(req, (context) => {
      if (context) {
        // Send a 200 OK status with the context as the JSON response
        res.status(200).json(context);
      } else {
        // If there's no context (i.e., no user found), return a 404 Not Found status
        res.sendStatus(404);
      }
    });
  },
};
