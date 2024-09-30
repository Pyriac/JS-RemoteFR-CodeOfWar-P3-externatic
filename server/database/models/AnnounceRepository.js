const AbstractRepository = require("./AbstractRepository");

class AnnounceRepository extends AbstractRepository {
  constructor() {
    super({ table: "announce" });
  }

  async readAll(contract) {
    if (!contract) {
      const [rows] = await this.database.query(
        `SELECT announce.*, contract.id as contract_id, contract.name as contract_name, company.image as company_image, company.logo as company_logo, company.name as company_name from ${this.table} inner join contract on contract.id = announce.contract_id inner join company on company.id = announce.company_id`
      );
      return rows;
    }

    const [rows] = await this.database.query(
      `select announce .*, contract.id as contract_id, contract.name as contract_name, company.image as company_image, company.logo as company_logo, company.name as company_name  from ${this.table} inner join contract on contract.id = announce.contract_id inner join company on company.id = announce.company_id where contract.name = ?`,
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
      `SELECT announce .*, c.id AS contract_id, company.image as company_image, company.logo as company_logo, c.name AS contract_name FROM ${this.table} LEFT JOIN contract c ON c.id = announce.contract_id 
      LEFT JOIN company on company.id = announce.company_id WHERE company_id = ?`,
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

  async delete(id, cookieId) {
    const [result] = await this.database.query(
      `DELETE FROM ${this.table} WHERE id = ? AND company_id = ?`,
      [id, cookieId]
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

  async readAnnounceJoinCandidateCompany(announceId) {
    const [rows] = await this.database.query(
      `select company.name as companyName, company.description as companyDescription, contract.name as contractName, announce.*
      FROM ${this.table}
      RIGHT JOIN company on announce.company_id = company.id
      RIGHT JOIN contract on announce.contract_id = contract.id
      WHERE announce.id = ?`,
      [announceId]
    );
    return rows;
  }
}
module.exports = AnnounceRepository;
