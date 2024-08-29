const AbstractRepository = require("./AbstractRepository");

class CompanyRepository extends AbstractRepository{
    constructor(){
        super({table: "company"});
    }


}
module.exports = CompanyRepository;