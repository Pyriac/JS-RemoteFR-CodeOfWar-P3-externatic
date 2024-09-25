import { useLoaderData } from "react-router-dom";


function AnswerCandidate(){
    const answerCandidates = useLoaderData();

    return(
        <div>
            <h2>Mes Candidatures Envoyées</h2>
            {answerCandidates.map((answerCandidate) => (
                <div key={answerCandidate.id}>
                    <p>{answerCandidate.companyName}</p>
                    <p>{answerCandidate.job_title}</p>
                    <p>{answerCandidate.contractName}</p>
                    <p>{answerCandidate.description}</p>
                    <p>{answerCandidate.location}</p>
                </div>
            ))}
          
        </div>
    )

}

export default AnswerCandidate;