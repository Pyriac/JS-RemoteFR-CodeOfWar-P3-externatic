const jwt = require("jsonwebtoken");

const tables = require("../../database/tables");

const browse = async (req, res, next) => {
  try {
    const { contract } = req.query;

    const announces = await tables.announce.readAll(contract);

    if (announces.length === 0) {
      res.json({
        message: "Pas d'annonces",
        result: announces,
      });
    } else {
      res.json({ result: announces });
    }
  } catch (err) {
    next(err);
  }
};

const read = async (req, res, next) => {
  try {
    const announce = await tables.announce.read(req.params.id);
    if (announce == null) {
      res.sendStatus(404);
    } else {
      res.json(announce);
    }
  } catch (error) {
    next(error);
  }
};

const add = async (req, res, next) => {
  const announce = req.body;
  console.info(announce);
  try {
    const insertId = await tables.announce.create(announce);

    res.status(201).json({ insertId });
  } catch (error) {
    next(error);
  }
};

const destroy = async (req, res, next) => {
  const { auth } = req.cookies;
  const userCookie = await jwt.decode(auth, process.env.APP_SECRET);
  const cookieId = userCookie.id;
  if (cookieId)
    try {
      await tables.announce.delete(req.params.id, cookieId);
      res.sendStatus(204);
    } catch (err) {
      next(err);
    }
  else {
    res.sendStatus(404);
  }
};

const edit = async (req, res, next) => {
  try {
    const announce = { ...req.body, id: Number(req.params.id) };
    await tables.announce.update(announce);
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
};

const browseByCompany = async (req, res, next) => {
  try {
    const company = req.params.id;
    const announce = await tables.announce.readByCompany(company);
    if (announce == null) {
      res.sendStatus(404);
    } else {
      res.json(announce);
    }
  } catch (error) {
    next(error);
  }
};

const announceActions = { browse, read, add, destroy, edit, browseByCompany };
module.exports = announceActions;
