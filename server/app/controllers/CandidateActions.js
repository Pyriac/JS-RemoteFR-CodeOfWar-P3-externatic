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

const login = async (req, res, next) => {
  try {
    res.cookie("auth", req.token).json({
      message: "Connexion réussie",
      id: req.candidate.id,
      email: req.candidate.email,
    });
  } catch (error) {
    next(error);
  }
};

const isLogged = async (req, res, next) => {
  try {
    res.status(200).json({ message: "vous êtes bien connecté" });
  } catch (error) {
    next(error);
  }
};

const disconnect = async (req, res, next) => {
  try {
    res.clearCookie("auth").sendStatus(200);
  } catch (error) {
    next(error);
  }
};

const candidateActions = {
  browse,
  read,
  add,
  edit,
  destroy,
  login,
  isLogged,
  disconnect,
};

module.exports = candidateActions;
