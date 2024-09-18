const tables = require("../../database/tables");

const browse = async (req, res, next) => {
  try {
    const answer = await tables.answer.readAll();
    res.json(answer);
  } catch (error) {
    next(error);
  }
};

const read = async (req, res, next) => {
  try {
    const answer = await tables.answer.read(req.params.id);
    if (answer == null) {
      res.sendStatus(404);
    } else {
      res.json(answer);
    }
  } catch (error) {
    next(error);
  }
};

const add = async (req, res, next) => {
  const answer = req.body;
  try {
    const insertId = await tables.answer.create(answer);
    res.status(201).json({ insertId });
  } catch (error) {
    next(error);
  }
};

const destroy = async (req, res, next) => {
  try {
    await tables.answer.delete(req.params.id);

    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
};

const answerActions = { browse, read, add, destroy };
module.exports = answerActions;
