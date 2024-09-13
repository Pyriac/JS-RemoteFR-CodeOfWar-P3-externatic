const argon2 = require("argon2");

const hashingOptions = {
  type: argon2.argon2id,
  memoryCost: 19 * 2 ** 10,
  timeCost: 2,
  parallelism: 1,
};

const hashPassword = async(req, res, next) => {
    try{
        const {password} = req.body;
        const hashedPassword = await argon2.hash(password, hashingOptions);
        req.body.hashedPassword = hashedPassword;
        
        delete req.body.password;

        next();

    }catch (err){
        next(err);
    }
}


function contientCaractere(password) {
    const caracteres = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '-', '=', '[', ']', '{', '}', ';', ':', '"', '\\', '|', ',', '.', '<', '>', '/', '?', '€', '£', '¥', ',', '~', '§'];
    return caracteres.some((caractere) => password.includes(caractere))
      
  }
  
  function contientMajusculeMinuscule(password) {
    const regexMajuscule = /[A-Z]/;
    const regexMinuscule = /[a-z]/;
    return regexMajuscule.test(password) && regexMinuscule.test(password);
  } 
  
  function contientChiffre(password) {
    const chiffres = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    return chiffres.some((chiffre) => password.includes(chiffre))
  }
  
const verifPassword = async(req, res, next) => {
    try{
        const {password, confirmPassword} = req.body;

        if(password === confirmPassword){
            if(password.length >= 8){
                if(contientCaractere(password)){
                    if(contientMajusculeMinuscule(password)){
                      if(contientChiffre(password)){
                        console.info("mot de passe conforme aux normes attendus");
                        next();
                      }else{
                        console.info("il manque au moins un chiffre")
                      }
                    }else{
                      console.info("il manque au moins une majuscule ou minuscule");
                    }
                }else{
                    console.info('Il manque au moins un caractère spécieux');
                }
            }else{
                console.info('erreur sur la longeur du mot de passe');
              }    
        }else{
            console.info("les deux mot de passes de sont pas identique")
        }
        

    }catch (err){
        console.info("mot de passe nom conforme aux normes")
        next(err);
    }
}


module.exports = {verifPassword, hashPassword}