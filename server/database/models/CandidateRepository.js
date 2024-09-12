const AbstractRepository = require("./AbstractRepository");

class CandidateRepository extends AbstractRepository {
  constructor() {
    super({ table: "candidate" });
  }

  async readAll() {
    const [rows] = await this.database.query(`select * from ${this.table}`);
    return rows;
  }

  async read(id) {
    const [rows] = await this.database.query(
      `select * from ${this.table} where id = ?`,
      [id]
    );

    return rows[0];
  }
}

module.exports = CandidateRepository;
