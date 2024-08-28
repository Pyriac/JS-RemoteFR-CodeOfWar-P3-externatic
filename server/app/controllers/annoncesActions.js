const tables = require("../../database/tables");

const browse = async (req, res, next) => {
  try {
    const annonces = await tables.annonces.readAll();
    console.info("Coucou from annonceAction")
    res.json(annonces);
  } catch (error) {
    next(error);
  }
};

const read = async (req, res, next) => {
  try {
    const annonces = await tables.annonces.read(req.params.id);
    if (annonces == null) {
      res.sendStatus(404);
      console.info("Coucou from annonceAction")
    } else {
      res.json(annonces);
      console.info("Coucou from annonceAction")
    }
  } catch (error) {
    next(error);
  }
};

const add = async (req, res, next) => {
  const annonces = req.body;
  try {
    const insertId = await tables.annonces.create(annonces);
    console.info("Coucou from annonceAction")
    res.status(201).json({ insertId });
  } catch (error) {
    next(error);
  }
};

const destroy = async (req, res, next) => {
  try {
    await tables.annonces.delete(req.params.id);
    console.info("Coucou from annonceAction")

    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
};

const annoncesActions = { browse, read, add, destroy };
module.exports = annoncesActions ;
