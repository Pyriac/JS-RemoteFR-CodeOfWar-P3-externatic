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
      `SELECT a.company_id, c.first_name, c.last_name, c.title, c.cv, c.phone FROM ${this.table} INNER JOIN announce a ON ${this.table}.announce_id = a.id INNER JOIN candidate c ON ${this.table}.candidate_id = c.id WHERE announce_id = ?`,
      [announceId]
    );
    return rows;
  }

  async readByCandidate(candidateId) {
    const [rows] = await this.database.query(
      `SELECT company.name as companyName, contract.name as contractName, announce.*, answer.status
      FROM
      candidate INNER JOIN ${this.table} on candidate.id = ${this.table}.candidate_id
      INNER JOIN announce ON ${this.table}.announce_id = announce.id
      RIGHT JOIN company on announce.company_id = company.id
      RIGHT JOIN contract on announce.contract_id = contract.id
      WHERE candidate.id = ?`,
      [candidateId]
    );
    return rows;
  }

  async create(answer, candidateId) {
    const [result] = await this.database.query(
      `insert into ${this.table} (announce_id, candidate_id) VALUES (?,?)`,
      [answer.announceId, candidateId]
    );
    return result.affectedRows;
  }

  async update(id, answer) {
    const [result] = await this.database.query(
      `UPDATE ${this.table} SET status = ? WHERE announce_id = ? AND candidate_id = ?`,
      [answer.status, id, answer.candidate_id]
    );
    return result.insertId;
  }
}

module.exports = AnswerRepository;
