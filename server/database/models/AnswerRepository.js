const AbstractRepository = require("./AbstractRepository");

class AnswerRepository extends AbstractRepository {
  constructor() {
    super({ table: "answer" });
  }

  async readAll() {
    const [rows] = await this.database.query(
      `SELECT * FROM ${this.table} INNER JOIN announce a ON ${this.table}.announce_id = a.id INNER JOIN candidate c ON ${this.table}.candidate_id = c.id`
    );
    return rows;
  }

  async read(announceId) {
    const [rows] = await this.database.query(
      `SELECT c.first_name, c.last_name, c.title, c.cv, c.phone FROM ${this.table} INNER JOIN announce a ON ${this.table}.announce_id = a.id INNER JOIN candidate c ON ${this.table}.candidate_id = c.id WHERE announce_id = ?`,
      [announceId]
    );
    return rows;
  }

  async create(answer) {
    const [result] = await this.database.query(
      `insert into ${this.table} (announce_id, candidate_id) VALUES (?,?)`,
      [answer.announce_id, answer.candidate_id]
    );
    return result.affectedRows;
  }
}

module.exports = AnswerRepository;
