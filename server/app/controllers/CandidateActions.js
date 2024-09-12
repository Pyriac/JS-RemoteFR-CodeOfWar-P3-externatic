const tables = require("../../database/tables");

const browse = async (req, res, next) => {
  try {
    const candidate = await tables.candidate.readAll();
    res.json(candidate);
  } catch (error) {
    next(error);
  }
};

const read = async (req, res, next) => {
  try {
    const candidate = await tables.candidate.read(req.params.id);
    if (candidate == null) {
      res.sendStatus(404);
    } else {
      res.json(candidate);
    }
  } catch (error) {
    next(error);
  }
};

const candidateActions = { browse, read };

module.exports = candidateActions;
