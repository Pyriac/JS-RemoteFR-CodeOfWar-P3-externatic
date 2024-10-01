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

  async readByEmail(email) {
    const [rows] = await this.database.query(
      `select * from ${this.table} where email = ?`,
      [email]
    );
    return rows[0];
  }

  async readByAnnounceAndCompany(announceId, companyId) {
    const [rows] = await this.database.query(
      `SELECT candidate.*, answer.status
        FROM
        ${this.table} INNER JOIN answer on ${this.table}.id = answer.candidate_id
        INNER JOIN announce on answer.announce_id = announce.id
        WHERE announce.company_id = ? and announce.id = ?`,
      [companyId, announceId]
    );
    return rows;
  }

  async create(candidate) {
    const [result] = await this.database.query(
      `insert into ${this.table} (email, password, cv, location, first_name, last_name, title, birthday, degree, phone ) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        candidate.email,
        candidate.hashedPassword,
        candidate.cv,
        candidate.location,
        candidate.first_name,
        candidate.last_name,
        candidate.title,
        candidate.birthday || null,
        candidate.degree,
        candidate.phone,
      ]
    );
    return result.insertId;
  }

  async update(candidate) {
    let query = `update ${this.table} set email = ?, location = ?, first_name = ?, last_name = ?, title = ?, birthday = ?, degree = ?, phone = ? `;
    const params = [
      candidate.email,
      candidate.location,
      candidate.first_name,
      candidate.last_name,
      candidate.title,
      candidate.birthday || null,
      candidate.degree,
      candidate.phone,
    ];
    if (candidate.cv) {
      query += `,cv = ?`;
      params.push(candidate.cv);
    }
    query += `where id = ?`;
    params.push(candidate.id);

    const [result] = await this.database.query(query, params);
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
