const tables = require("../../database/tables");

const browse = async (req, res, next) => {
  try {
    const entreprise = await tables.entreprise.readAll();
    res.json(entreprise);
  } catch (error) {
    next(error);
  }
};

const read = async (req, res, next) => {
  try {
    const entreprise = await tables.entreprise.read(req.params.id);
    if (entreprise == null) {
      res.sendStatus(404);
    } else {
      res.json(entreprise);
    }
  } catch (error) {
    next(error);
  }
};

const add = async (req, res, next) => {
  const entreprise = req.body;
  try {
    const insertId = await tables.entreprise.create(entreprise);
    res.status(201).json({ insertId });
  } catch (error) {
    next(error);
  }
};

const destroy = async (req, res, next) => {
  try {
    await tables.entreprise.delete(req.params.id);

    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
};

const entreprisesActions = { browse, read, add, destroy };
module.exports = entreprisesActions ;
