const tables = require("../../database/tables");

const browse = async (req, res, next) => {
  try {
    const contracts = await tables.contract.readAll();
    res.json(contracts);
  } catch (err) {
    next(err);
  }
};

module.exports = { browse };
