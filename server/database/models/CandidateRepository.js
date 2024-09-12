const AbstractRepository = require("./AbstractRepository");

class CandidateRepository extends AbstractRepository {
  constructor() {
    super({ table: "candidate" });
  }

  async readAll() {
    const [rows] = await this.database.query(`select * from ${this.table}`);
    return rows;
  }
}

module.exports = CandidateRepository;
