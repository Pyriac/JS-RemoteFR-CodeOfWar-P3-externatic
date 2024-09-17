const AbstractRepository = require("./AbstractRepository");

class ContractRepository extends AbstractRepository {
  constructor() {
    super({ table: "contract" });
  }

  async readAll() {
    const [rows] = await this.database.query(`SELECT * FROM ${this.table}`);
    return rows;
  }
}

module.exports = ContractRepository;