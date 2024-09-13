export default function FormCandidat() {
  return (
    <div className="FormCandidat">
      <h2>Informations candidate</h2>
      <label htmlFor="first_name"> Prénom du candidat *</label>
      <input name="first_name" type="text" required />
      <label htmlFor="last_name">Nom du candidat *</label>
      <input name="last_name" type="text" required />
      <label htmlFor="email">Adresse mail *</label>
      <input
        type="email"
        id="email"
        pattern="^[\w\.-]+@[a-zA-Z\d-]+\.[a-zA-Z]{2,6}$"
        placeholder="sophie@example.com"
        required
      />
      <label htmlFor="password">Password *</label>
      <input type="password" id="pass" name="password" minLength="8" required />
      <label htmlFor="title">Intitulé de poste *</label>
      <input name="title" type="text" required />
      <label htmlFor="location">Localisation *</label>
      <input name="location" type="text" required />
      <label htmlFor="birthday">
        Veuillez saisir votre date de naissance :
      </label>
      <input name="birthday" type="date" />
      <label htmlFor="degree">
        Veuillez saisir votre dernier diplôme obtenu
      </label>
      <input name="degree" type="text" />
      <label htmlFor="phone">N° Téléphone:</label>
      <input name="phone" type="text" />
      <label htmlFor="cv">Importer votre C.V</label>
      <input
        name="cv"
        type="file"
        accept=".doc, .docx, .pdf, .jpg, .jpeg, .png"
      />
    </div>
  );
}
