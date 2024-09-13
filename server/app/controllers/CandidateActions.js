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

const edit = async (req, res, next) => {
  try {
    const candidate = { ...req.body, id: Number(req.params.id) };
    await tables.candidate.update(candidate);
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
};

const destroy = async (req, res, next) => {
  try {
    await tables.candidate.delete(req.params.id);

    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
};

const candidateActions = { browse, read, add, edit, destroy };

module.exports = candidateActions;
