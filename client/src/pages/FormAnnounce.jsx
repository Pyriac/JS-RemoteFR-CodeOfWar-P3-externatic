function FormAnnounce(){

    return(
        <form method="post" >
            <div>
                <label htmlFor="job_title">Job title</label>{" "}
                <input type="text" id="job_title" name="job_title" />
            </div>
            <div>
                <label htmlFor="location">Location</label>{" "}
                <input type="text" id="location" name="location" />
            </div>
            <div>
                <label htmlFor="description">Description</label>{" "}
                <input type="textarea" id="description" name="description" />
            </div>
            <div>
                <label htmlFor="min_salary">Min_Salary</label>{" "}
                <input type="number" id="min_salary" name="min_salary" />
            </div>
            <div>
                <label htmlFor="max_salary">Max_Salary</label>{" "}
                <input type="number" id="max_salary" name="max_salary" />
            </div>
            <div>
                <label htmlFor="benefits">Benefits</label>{" "}
                <input type="text" id="benefits" name="benefits" />
            </div>
            <div>
               <label htmlFor="job_type">Job_Type</label>{" "}
                <select name="job_type" id="job_type">
                    <option value="CDI">CDI</option>
                    <option value="CDD">CDD</option>
                    <option value="STAGE">STAGE</option>
                    <option value="ALTERNANCE">ALTERNANCE</option>
                </select>
            </div>
            <div>
               <label htmlFor="telework">Telework</label>{" "}
                <select name="telework" id="telework">
                    <option value="presentiel">Présentiel</option>
                    <option value="distentiel">Distenciel</option>
                    <option value="hybride">Hybride</option>
                </select>
            </div>
            <div>
               <label htmlFor="company">Company</label>{" "}
                <select name="company" id="company">
                    <option value="1">Company_01</option>
                    <option value="2">Company_02</option>
                    <option value="3">Company_03</option>
                </select>
            </div>
            <button type="submit">Valider</button>
      </form>
    )

}
export default FormAnnounce;