import { useRef } from "react";
import { useOutletContext, useNavigate } from "react-router-dom";
import myAxios from "../services/myAxios";


export default function LoginCandidate() {
  const emailRef = useRef();
  const passwordRef = useRef();

  const { setCandidate } = useOutletContext();

  const navigate = useNavigate();


  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
        const response = await myAxios.post(`/api/login`, 
        {
            email: emailRef.current.value,
            password: passwordRef.current.value,
          
        },
        {
            headers: { "Content-Type": "application/json" },
            withCredentials: true,
        }
    );

   if (response.status === 200) {
    const candidate = await response.data;
    setCandidate(candidate);
    navigate("/");
  } else {
    console.info(response);
  }
} catch (err) {
  console.error(err);
}
};

    
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email :</label>
        <input
          type="email"
         ref={emailRef}
        />
      </div>
      <div>
        <label htmlFor="password">Mot de passe :</label>
        <input
          type="password"
         ref={passwordRef}
        />
      </div>
      <button type="submit">Se connecter</button>
    </form>
  );
}




