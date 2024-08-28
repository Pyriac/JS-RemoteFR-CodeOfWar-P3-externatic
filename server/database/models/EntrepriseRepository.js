const AbstractRepository = require("./AbstractRepository");

class EntrepriseRepository extends AbstractRepository{
    constructor(){
        super({table: "entreprise"});
    }


}
module.exports = EntrepriseRepository;