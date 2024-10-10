const jwt = require("jsonwebtoken");

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

const readByCandidate = async (req, res, next) => {
  try {
    const token = req.cookies.auth;
    const decodedToken = await jwt.decode(token);
    const candidateId = decodedToken.id;

    const answer = await tables.answer.readByCandidate(candidateId);
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
  const candidate = req.cookies.auth;
  try {
    const decodeToken = await jwt.decode(candidate, process.env.APP_SECRET);
    const candidateId = decodeToken.id;
    const insertId = await tables.answer.create(answer, candidateId);
    res.status(201).json({
      insertId,
      message: "Votre candidature à bien été transmise 🚀",
    });
  } catch (error) {
    next(error);
  }
};

const edit = async (req, res, next) => {
  try {
    const { id } = req.params;
    const answer = req.body;
    await tables.answer.update(id, answer);
    res.sendStatus(204);
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

const answerActions = { browse, read, readByCandidate, add, destroy, edit };
module.exports = answerActions;
