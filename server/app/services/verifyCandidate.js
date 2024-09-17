const Joi = require("joi");

const verifyFields = (req, res, next) => {
  const schema = Joi.object({
    first_name: Joi.string().required(),
    last_name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
    title: Joi.string().required(),
    location: Joi.string().required(),
    birthday: Joi.date().allow(null, ""),
    degree: Joi.string().allow(null, ""),
    phone: Joi.string().allow(null, ""),
    cv: Joi.string().allow(null, ""),
  });

  const result = schema.validate(req.body);
  console.info(result);
  if (result.error) {
    res.status(400).send(result.error.message);
  } else {
    next();
  }
};

module.exports = { verifyFields };
