const argon2 = require("argon2");

const tables = require("../../database/tables");

const browse = async (req, res, next) => {
  try {
    const company = await tables.company.readAll();
    res.json(company);
  } catch (error) {
    next(error);
  }
};

const read = async (req, res, next) => {
  try {
    const company = await tables.company.read(req.params.id);
    if (company == null) {
      res.sendStatus(404);
    } else {
      res.json(company);
    }
  } catch (error) {
    next(error);
  }
};

const add = async (req, res, next) => {
  const company = req.body;
  try {
    const insertId = await tables.company.create(company);
    res.status(201).json({ insertId });
  } catch (error) {
    next(error);
  }
};

const destroy = async (req, res, next) => {
  try {
    await tables.company.delete(req.params.id);

    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
};

const edit = async (req, res, next) => {
  try {
    const company = { ...req.body, id: Number(req.params.id) };
    await tables.company.update(company);
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
};

const login = async(req, res, next) =>{
  try{
    const company = await tables.company.readByEmail(req.body.email);
    if (company == null) {
      res.sendStatus(422);
      return;
    }

    const verified = await argon2.verify(
      company.password,
      req.body.password
    );

    if (verified) {
      delete company.password;
      res.json(company);
    } else {
      res.sendStatus(422);
    }

  }catch(err){
    next(err);
  }

};


const companyActions = { browse, read, add, destroy, edit, login};
module.exports = companyActions;
