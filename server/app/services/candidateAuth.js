const argon2 = require("argon2");
const jwt = require("jsonwebtoken");
const Joi = require("joi");
const tables = require("../../database/tables");

const hashingOptions = {
  type: argon2.argon2id,
  memoryCost: 19 * 2 ** 10,
  timeCost: 2,
  parallelism: 1,
};

const hashPassword = async (req, res, next) => {
  try {
    const { password } = req.body;
    const hashedPassword = await argon2.hash(password, hashingOptions);

    delete req.body.password;

    req.body.hashedPassword = hashedPassword;

    next();
  } catch (error) {
    next(error);
  }
};

const verifyPassword = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const candidate = await tables.candidate.readByEmail(email);

    if (!candidate) {
      res.sendStatus(401);
    }

    req.candidate = {
      id: candidate.id,
      email: candidate.email,
    };

    const verified = await argon2.verify(candidate.password, password);

    if (!verified) {
      res.sendStatus(401);
    } else {
      next();
    }
  } catch (error) {
    next(error);
  }
};

const createToken = async (req, res, next) => {
  try {
    const payload = req.candidate;

    const token = await jwt.sign(payload, process.env.APP_SECRET, {
      expiresIn: "1y",
    });

    req.token = token;

    next();
  } catch (error) {
    next(error);
  }
};

const verifyToken = async (req, res, next) => {
  try {
    const { auth } = req.cookies;
    console.info(auth);

    const result = await jwt.verify(auth, process.env.APP_SECRET);
    console.info(result);

    next();
  } catch (error) {
    next(error);
  }
};

const verifyFields = (req, res, next) => {
  const schema = Joi.object({
    first_name: Joi.string().required(),
    last_name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(8).required(),
    title: Joi.string().required(),
    location: Joi.string().required(),
    birthday: Joi.date().allow(null, ""),
    degree: Joi.string().allow(null, ""),
    phone: Joi.string().allow(null, ""),
    cv: Joi.string().allow(null, ""),
  });

  const result = schema.validate(req.body);

  if (result.error) {
    res.status(400).send(result.error.message);
  } else {
    next();
  }
};

module.exports = {
  hashPassword,
  verifyPassword,
  createToken,
  verifyToken,
  verifyFields,
};
