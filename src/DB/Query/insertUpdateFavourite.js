const pool = require("../../pool/pgpool");

exports.insertUpdateFavourite = async (req, callback) => {
  const data = req.body;
  let CONTEXT = { iMessageCode: 0 };
  const { sJokeId, bIsFavourite } = data;
  let sSql = "";
  if (bIsFavourite) {
    sSql = `insert into dad_jokes.favorites (jokeid) values ('${sJokeId}');`;
  } else {
    sSql = `delete from dad_jokes.favorites where jokeid = '${sJokeId}';`;
  }

  const result = await pool.query(sSql);

  if (result.rowCount > 0) {
    CONTEXT.iMessageCode = 101;
    CONTEXT.sMessage = `Joke ${
      bIsFavourite ? "added to " : "removed from"
    } favorites`;
  }

  return callback(CONTEXT);
};
