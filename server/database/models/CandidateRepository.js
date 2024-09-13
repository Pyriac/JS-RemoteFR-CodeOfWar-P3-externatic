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

  async create(candidate) {
    const [result] = await this.database.query(
      `insert into ${this.table} (email, password, cv, location, first_name, last_name, title, birthday, degree, phone ) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        candidate.email,
        candidate.password,
        candidate.cv,
        candidate.location,
        candidate.first_name,
        candidate.last_name,
        candidate.title,
        candidate.birthday,
        candidate.degree,
        candidate.phone,
      ]
    );
    return result.insertId;
  }

  async update(candidate) {
    const [result] = await this.database.query(
      `update ${this.table} set email = ?, password = ?, cv = ?, location = ?, first_name = ?, last_name = ?, title = ?, birthday = ?, degree = ?, phone = ? where id = ?`,
      [
        candidate.email,
        candidate.password,
        candidate.cv,
        candidate.location,
        candidate.first_name,
        candidate.last_name,
        candidate.title,
        candidate.birthday,
        candidate.degree,
        candidate.phone,
        candidate.id,
      ]
    );
    return result.insertId;
  }

  async delete(id) {
    const [result] = await this.database.query(
      `delete from ${this.table} where id = ?`,
      [id]
    );
    return result.affectedRows;
  }
}

module.exports = CandidateRepository;
