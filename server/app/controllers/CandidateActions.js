const tables = require("../../database/tables");

const browse = async (req, res, next) => {
  try {
    const candidate = await tables.candidate.readAll();
    res.json(candidate);
  } catch (error) {
    next(error);
  }
};

const candidateActions = { browse };

module.exports = candidateActions;
