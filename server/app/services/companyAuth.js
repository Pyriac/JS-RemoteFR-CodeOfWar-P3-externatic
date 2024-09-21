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
    req.body.hashedPassword = hashedPassword;

    delete req.body.password;

    next();
  } catch (err) {
    next(err);
  }
};

const verifPassword = async (req, res, next) => {
  const passTest = {
    password: req.body.password,
    confirmPassword: req.body.confirmPassword,
  };
  const schema = Joi.object({
    password: Joi.string()
      .pattern(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%&?*])[a-zA-Z0-9!@#$%&?*]{8,}$/
      )
      .required()
      .messages({
        "string.empty": "Vous devez obligatoirement saisir un mot de passe",
        "string.pattern.base":
          "Le mot de passe doit contenir au moins une majuscule, minuscule, un chiffre et un caractère spécial.",
      }),

    confirmPassword: Joi.string().valid(Joi.ref("password")).messages({
      "any.only": "les deux mot de passe doivent être identiques !",
    }),
  });

  const result = schema.validate(passTest);
  if (result.error) {
    res.status(400).send(result.error.message);
  } else {
    next();
  }
};

const verifyPasswordForLogin = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const company = await tables.company.readByEmail(email);
    if (!company) {
      res.sendStatus(401);
    }

    req.company = {
      id: company.id,
      email: company.email,
    };

    const verified = await argon2.verify(company.password, password);

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
    const payload = req.company;

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
    const result = await jwt.verify(auth, process.env.APP_SECRET);
    if (result) {
      next();
    }
  } catch (error) {
    next(error);
  }
};

const verifyFields = (req, res, next) => {
  const schema = Joi.object({
    name: Joi.string().required(),
    phone: Joi.string().required(),
    size: Joi.number().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
    confirmPassword: Joi.string().min(6).required(),
    image: Joi.string().allow(null, ""),
    logo: Joi.string().allow(null, ""),
  });

  const result = schema.validate(req.body);

  if (result.error) {
    res.status(400).send(result.error.message);
  } else {
    next();
  }
};

module.exports = {
  verifPassword,
  hashPassword,
  verifyPasswordForLogin,
  createToken,
  verifyToken,
  verifyFields,
};
