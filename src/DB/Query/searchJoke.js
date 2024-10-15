const axios = require("axios");

exports.searchJoke = async (req, callback) => {
  const data = req.body;
  let CONTEXT = { iMessageCode: 0 };
  const { sSearchTerm } = data;
  let sURL = process.env.DADJOKESEARCHURL; // Ensure this is set in your .env file

  if (sSearchTerm) {
    sURL = `${sURL}?term=${encodeURIComponent(sSearchTerm)}`; // Use encodeURIComponent for safety

    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: sURL,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    };

    try {
      const response = await axios.request(config);
      console.log(response.data.results);

      // Check if results exist and map them
      if (response.data.results && response.data.results.length > 0) {
        CONTEXT.data = response.data.results.map(joke => ({
          sJokeId: joke.id, // Renaming id to sJokeId
          joke: joke.joke
        }));
      } else {
        CONTEXT.iMessageCode = 100;
        CONTEXT.data = [];
      }
    } catch (error) {
      console.log(error);
      CONTEXT.iMessageCode = 99;
      CONTEXT.data = [];
      CONTEXT.sMessage = error.toString();
    }
  }

  return callback(CONTEXT);
};
