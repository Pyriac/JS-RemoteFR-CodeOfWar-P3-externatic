const AbstractRepository = require("./AbstractRepository");

class AnnounceRepository extends AbstractRepository {
  constructor() {
    super({ table: "announce" });
  }

  async readAll(contract) {
    if (!contract) {
      const [rows] = await this.database.query(
        `SELECT announce.*, contract.id as contract_id, contract.name as contract_name from ${this.table} join contract on contract.id = announce.contract_id`
      );
      return rows;
    }

    const [rows] = await this.database.query(
      `select announce .*, contract.id as contract_id, contract.name as contract_name from ${this.table} join contract on contract.id = announce.contract_id where contract.name = ?`,
      [contract]
    );
    return rows;
  }

  async read(id) {
    const [rows] = await this.database.query(
      `select * from ${this.table} where id = ?`,
      [id]
    );

    return rows[0];
  }

  async readByCompany(companyId) {
    const [rows] = await this.database.query(
      `select * from ${this.table} where company_id = ?`,
      [companyId]
    );
    return rows;
  }

  async create(announce) {
    const [result] = await this.database.query(
      `insert into ${this.table} (job_title, location, description, min_salary, max_salary, benefits, telework, contract_id, company_id) values (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        announce.job_title,
        announce.location,
        announce.description,
        announce.min_salary,
        announce.max_salary,
        announce.benefits,
        announce.telework,
        announce.contract_id,
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
      `update ${this.table} set job_title = ?, location = ?, description = ?, min_salary = ?, max_salary = ?, benefits = ?, telework = ? where id = ?`,
      [
        announce.job_title,
        announce.location,
        announce.description,
        announce.min_salary,
        announce.max_salary,
        announce.benefits,
        announce.telework,
        announce.id,
      ]
    );
    return result.affectedRows;
  }
}
module.exports = AnnounceRepository;
