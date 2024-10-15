const pool = require("../../pool/pgpool");

exports.getDadJokes = async (req, callback) => {
  let CONTEXT = { iMessageCode: 0 };
  const sSql = `SELECT id AS "iId", jokeid AS "sJokeId" FROM dad_jokes.favorites;`;
  const result = await pool.query(sSql);
  if (result.rows.length > 0) {
    CONTEXT.iMessageCode = 101;
    CONTEXT.sMessage = "All Record Found";
    CONTEXT.data = result.rows;
  }

  return callback(CONTEXT);
};
