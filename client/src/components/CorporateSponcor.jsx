import companyAFAC from "../assets/images/Company_AFAC.png";
import companyNamNam from "../assets/images/Company_nam_nam.png";
import companyNodas from "../assets/images/Company_Nodas.png";
import companyOriginalDigitals from "../assets/images/Company_Original_digitals.png";
import companySAH from "../assets/images/Company_SAH.png";

export default function CorporateSponcor() {
  return (
    <div className="CorporatSponcor">
      <img src={companyAFAC} alt="Logo de l'entreprise AFAC" />
      <img src={companyNamNam} alt="Logo de l'entreprise Nam Nam" />
      <img src={companyNodas} alt="Logo de l'entreprise Nodas" />
      <img
        src={companyOriginalDigitals}
        alt="Logo de l'entreprise Original digitals"
      />
      <img src={companySAH} alt="Logo de l'entreprise SAH" />
    </div>
  );
}
