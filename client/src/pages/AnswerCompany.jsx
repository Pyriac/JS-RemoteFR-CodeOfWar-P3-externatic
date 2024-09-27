import { useLoaderData } from "react-router-dom";

function AnswerCompany(){
    const myAnswers = useLoaderData();

    return(
        <div>
             <h2>Mes retour</h2>
             {
               myAnswers.map((myAnswer) => (
                    <ul key={myAnswer.id}>
                        <li>{myAnswer.first_name}</li>
                        <li>{myAnswer.last_name}</li>
                        <li>{myAnswer.location}</li>
                        <li>{myAnswer.phone}</li>
                        <li>{myAnswer.cv}</li>
                    </ul>
                ))
             }
        </div>
       

    )

}
export default AnswerCompany;