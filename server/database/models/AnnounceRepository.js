const AbstractRepository = require("./AbstractRepository");

class AnnounceRepository extends AbstractRepository {
  constructor() {
    super({ table: "announce" });
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

  async create(announce) {
    const [result] = await this.database.query(
      `insert into ${this.table} (job_title, location, description, min_salary, max_salary, benefits, job_type, telework, company_id) values (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        announce.job_title,
        announce.location,
        announce.description,
        announce.min_salary,
        announce.max_salary,
        announce.benefits,
        announce.job_type,
        announce.telework,
        announce.company_id,
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

  async update(announce) {
    const [result] = await this.database.query(
      `update ${this.table} set job_title = ?, location = ?, description = ?, min_salary = ?, max_salary = ?, benefits = ?, job_type = ?, telework = ? where id = ?`,
      [
        announce.job_title,
        announce.location,
        announce.description,
        announce.min_salary,
        announce.max_salary,
        announce.benefits,
        announce.job_type,
        announce.telework,
        announce.id,
      ]
    );
    console.info(result);
    return result.affectedRows;
  }
}
module.exports = AnnounceRepository;
