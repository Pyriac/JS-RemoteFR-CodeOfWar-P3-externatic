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

const add = async (req, res, next) => {
  const candidate = req.body;
  try {
    const insertId = await tables.candidate.create(candidate);
    res.status(201).json({ insertId });
  } catch (error) {
    next(error);
  }
};

const candidateActions = { browse, read, add };

module.exports = candidateActions;