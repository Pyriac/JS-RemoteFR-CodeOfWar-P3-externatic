import PropTypes from 'prop-types'; 


export default function Announcethirdbox({ announce }) {
  return (
   <div className="CompanyDetail_description">
        <ul key={announce.id}>
          <h2 className="CompanyDetail_title">L'entreprise</h2>
          <li>Capgemini est un leader mondial dans le domaine des services de conseil, de transformation numérique, de technologie et d'ingénierie. Fondée en 1967 et présente dans plus de 50 pays, l'entreprise compte plus de 350 000 collaborateurs. Capgemini aide les plus grandes organisations à se transformer en combinant une expertise approfondie du secteur avec des solutions innovantes.</li>

        </ul>
    </div>
  );
}


Announcethirdbox.propTypes = {
  announce: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};