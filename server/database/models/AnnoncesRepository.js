const AbstractRepository = require("./AbstractRepository");

class AnnoncesRepository extends AbstractRepository{
    constructor(){
        super({table: "annonces"});
    }


}
module.exports = AnnoncesRepository;