const AbstractRepository = require("./AbstractRepository");

class AnswerRepository extends AbstractRepository {
  constructor() {
    super({ table: "answer" });
  }

  async readAll() {
    const [rows] = await this.database.query(`SELECT * FROM ${this.table}`);
    return rows;
  }
}

module.exports = AnswerRepository;
