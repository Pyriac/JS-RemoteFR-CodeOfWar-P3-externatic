const argon2 = require("argon2");
const Joi = require("joi");

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
      .pattern(/^[a-zA-Z0-9!@#$%&?*]{8}$/)
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

module.exports = { verifPassword, hashPassword };
