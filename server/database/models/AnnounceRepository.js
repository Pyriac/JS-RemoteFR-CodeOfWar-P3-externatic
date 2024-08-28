const AbstractRepository = require("./AbstractRepository");

class AnnounceRepository extends AbstractRepository{
    constructor(){
        super({table: "announce"});
    }


}
module.exports = AnnounceRepository;