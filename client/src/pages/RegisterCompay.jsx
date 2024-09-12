import { useState } from "react";
import { Form } from "react-router-dom";

function RegisterCompany(){

    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [size, setSize] = useState();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleNameChange = (event) => {
        setName(event.target.value);
    }
    const handlePhoneChange = (event) => {
        setPhone(event.target.value);
    }
    const handleSizeChange = (event) => {
        setSize(event.target.value);
    }
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }
    const handleConfirmPasswordChange = (event) => {
        setConfirmPassword(event.target.value);
    }

    function contientMajuscule(mot) {
        const regex = /[A-Z]/;
        return regex.test(mot);
    }

    const handleSubmit = async (event) => {

        event.preventDefault();

        try {
            const response = await fetch(
            `${import.meta.env.VITE_API_URL}/api/company`,
            {
              method: "post",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                name,
                phone,
                size,
                email,
                password,
                confirmPassword
              }),
            }
          );
          if(password === confirmPassword){
            if(password.length >= 8){
                if(password.includes('!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '-', '=', '[', ']', '{', '}', ';', ':', '"', '\\', '|', ',', '.', '<', '>', '/', '?', '€', '£', '¥', '`', '~', '§')){
                    if(contientMajuscule(password)){
                        if (response.status === 201) {
                            console.info('inscription avec succé');
                        } else {
                            console.info(response);
                        }
                    }
                }else{
                    console.info('erreur sur les caractère spèciaux');
                }
              }else{
                console.info('erreur sur la longeur du mot de passe');
              }    

          }else{
            console.info('les deux mot de passe ne sont pas identique');
          }
         
          
        } catch (err) {
          console.error(err);
        }
    };

  

    return(
        <Form method="post" onSubmit={handleSubmit} >
            <h2>Inscrivez vous en remplissant le formulaire !</h2>
            <div>
                <label htmlFor="name">Nom de l'entreprise :</label>{" "}
                <input
                id="name"
                name="name"
                type="text"
                value={name}
                required
                onChange={handleNameChange}
                />
            </div>
            
            <div>
                <label htmlFor="phone">Numero de téléphone :</label>{" "}
                <input
                id="phone"
                name="phone"
                type="text"
                value={phone}
                required
                onChange={handlePhoneChange}
                />
            </div>
            
             <div>
                <label htmlFor="size">Taille de l'entrepris :</label>{" "}
                <input
                id="size"
                name="size"
                type="number"
                value={size}
                required
                onChange={handleSizeChange}
                />
            </div>
            <div>
                <label htmlFor="email">Email :</label>
                <input
                id="email"
                name="email"
                type="email"
                value={email}
                required
                onChange={handleEmailChange}
                />
            </div>
             
             <div>
                <label htmlFor="password">Mot de Passe :</label>
                <input
                id="password"
                name="password"
                type="password"
                value={password}
                required
                onChange={handlePasswordChange}
                />
                {`length: ${password.length} >= 8`}
                
            </div>
            
             <div>
                <label htmlFor="confirme password">Confirmer le mot de Passe :</label>
                <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                value={confirmPassword}
                required
                onChange={handleConfirmPasswordChange}
                />
                {password === confirmPassword ? "✅" : "❌"}
            </div>

            <button type="submit"> Inscrire </button>
            
        </Form>

    );
}

export default RegisterCompany;