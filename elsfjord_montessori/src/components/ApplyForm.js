import React from "react";
import { useState } from "react";
import { send } from "emailjs-com";

// React Bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const ApplyForm = (props) => {
  const [formData, setFormData] = useState({
    student_name: "",
    adress: "",
    postnr: "",
    city: "",
    birthday: "",
    otherschool: "",
    startdate: "",
    firstgrade: "",
    secondgrade: "",
    thirdgrade: "",
    fourthgrade: "",
    fifthgrade: "",
    sixthgrade: "",
    seventhgrade: "",
    mom_name: "",
    mom_adress: "",
    mom_postnr: "",
    mom_city: "",
    mom_phone: "",
    mom_email: "",
    dad_name: "",
    dad_adress: "",
    dad_postnr: "",
    dad_city: "",
    dad_phone: "",
    dad_email: "",
    children_age: "",
    other: "",
    why: "",
    consent: "",
  });

  const [formError, setFormError] = useState();
  const [formSuccess, setFormSuccess] = useState();

  function validateEmail(email) {
    const regEX = /\S+@\S+\.\S+/;
    const patternMatches = regEX.test(email);
    return patternMatches;
  }

  const validateForm = () => {
    if (formData.student_name.length < 3) {
      setFormError("ERROR! Navn må inneholde minst 3 karakterer");
      setTimeout(() => {
        setFormError(null);
      }, 5000);
      return false;
    } else if (!validateEmail(formData.mom_email)) {
      setFormError("ERROR! Fyll inn en gyldig e-postadresse");
      setTimeout(() => {
        setFormError(null);
      }, 5000);
      return false;
    } else if (formData.adress.length < 3) {
      setFormError("ERROR! Adressen må inneholde minst 3 karakterer");
      setTimeout(() => {
        setFormError(null);
      }, 5000);
      return false;
    } else if (formData.postnr.length < 4) {
      setFormError("ERROR! Fyll inn et gyldig postnummer");
      setTimeout(() => {
        setFormError(null);
      }, 5000);
      return false;
    } else if (formData.city.length < 2) {
      setFormError("ERROR! Fyll inn poststed");
      setTimeout(() => {
        setFormError(null);
      }, 5000);
      return false;
    } else {
      return true;
    }
  };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      send("service_sm4ap0k", "template_qh6gjoq", formData, "xlrmQEffs-yM0vpJc")
        .then((response) => {
          console.log("SUCCESS!", response.status, response.text);
          setFormSuccess("Søknaden har blitt sendt!");
          setFormData({
            student_name: "",
            adress: "",
            postnr: "",
            city: "",
            birthday: "",
            otherschool: "",
            startdate: "",
            mom_name: "",
            mom_adress: "",
            mom_postnr: "",
            mom_city: "",
            mom_phone: "",
            mom_email: "",
            dad_name: "",
            dad_adress: "",
            dad_postnr: "",
            dad_city: "",
            dad_phone: "",
            dad_email: "",
            children_age: "",
            other: "",
            why: "",
          });
          setTimeout(() => {
            setFormSuccess(null);
          }, 5000);
        })
        .catch((err) => {
          console.log("FAILED...", err);
        });
    }
  };

  return (
    <>
      <h1>Søk skoleplass</h1>
      <Container fluid>
        <Row className="justify-content-center align-items-center">
          <Col md={6}>
            <h2 className="form_h2">Opplysninger om eleven</h2>
            {formError && <p className="setFormError">{formError}</p>}
            {formSuccess && <p className="setFormSuccess">{formSuccess}</p>}
            <form className="apply_form" onSubmit={onSubmit}>
              <fieldset>
                <label for="student_name" id="student_name">
                  Fullt navn
                </label>
                <input
                  className="apply_input"
                  type="text"
                  id="student_name"
                  name="student_name"
                  value={formData.student_name}
                  onChange={handleChange}
                />
                <label for="adress" id="adress">
                  Adresse
                </label>
                <input
                  className="apply_input"
                  type="text"
                  id="adress"
                  name="adress"
                  value={formData.adress}
                  onChange={handleChange}
                />
                <div className="post_group">
                  <label for="postnr" id="postnr">
                    Postnummer
                  </label>
                  <input
                    className="apply_input"
                    type="text"
                    id="postnr"
                    name="postnr"
                    value={formData.postnr}
                    onChange={handleChange}
                  />{" "}
                </div>
                <div className="post_group">
                  <label for="city" id="city">
                    Poststed
                  </label>
                  <input
                    className="apply_input"
                    type="text"
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                  />
                </div>
                <label for="birthday" id="birthday">
                  Fødselsdag
                </label>
                <input
                  className="birthday"
                  type="date"
                  id="birthday"
                  name="birthday"
                  value={formData.birthday}
                  onChange={handleChange}
                />
                <label for="otherschool" id="otherschool">
                  Skal barnet meldes ut av en annen skole? Hvilken?
                </label>
                <input
                  className="apply_input"
                  type="text"
                  id="otherschool"
                  name="otherschool"
                  value={formData.otherschool}
                  onChange={handleChange}
                />
                <label for="startdate" id="startdate">
                  Dato for ønsket oppstart
                </label>
                <input
                  className="apply_input"
                  type="text"
                  id="startdate"
                  name="startdate"
                  value={formData.startdate}
                  onChange={handleChange}
                />
                <label className="class_section">Søker til klassetrinn:</label>
                <section className="grade">
                  {" "}
                  <section className="class">
                    {" "}
                    <input
                      type="checkbox"
                      id="firstgrade"
                      name="firstgrade"
                      value={formData.firstgrade}
                      onChange={handleChange}
                    />
                    <label
                      className="inline_label"
                      for="firstgrade"
                      id="firstgrade"
                    >
                      1. klasse
                    </label>
                  </section>
                  <section className="class">
                    {" "}
                    <input
                      type="checkbox"
                      id="secondgrade"
                      name="secondgrade"
                      value={formData.secondgrade}
                      onChange={handleChange}
                    />
                    <label
                      className="inline_label"
                      for="secondgrade"
                      id="secondgrade"
                    >
                      2. klasse
                    </label>
                  </section>
                  <section className="class">
                    {" "}
                    <input
                      type="checkbox"
                      id="thirdgrade"
                      name="thirdgrade"
                      value={formData.thirdgrade}
                      onChange={handleChange}
                    />
                    <label
                      className="inline_label"
                      for="thirdgrade"
                      id="thirdgrade"
                    >
                      3. klasse
                    </label>
                  </section>
                  <section className="class">
                    {" "}
                    <input
                      type="checkbox"
                      id="fourthgrade"
                      name="fourthgrade"
                      value={formData.fourthgrade}
                      onChange={handleChange}
                    />
                    <label
                      className="inline_label"
                      for="fourthgrade"
                      id="fourthgrade"
                    >
                      4. klasse
                    </label>{" "}
                  </section>
                  <section className="class">
                    {" "}
                    <input
                      type="checkbox"
                      id="fifthgrade"
                      name="fifthgrade"
                      value={formData.fifthgrade}
                      onChange={handleChange}
                    />
                    <label
                      className="inline_label"
                      for="fifthgrade"
                      id="fifthgrade"
                    >
                      5. klasse
                    </label>
                  </section>
                  <section className="class">
                    {" "}
                    <input
                      type="checkbox"
                      id="sixthgrade"
                      name="sixthgrade"
                      value={formData.sixthgrade}
                      onChange={handleChange}
                    />
                    <label
                      className="inline_label"
                      for="sixthgrade"
                      id="sixthgrade"
                    >
                      6. klasse
                    </label>{" "}
                  </section>
                  <section className="class">
                    {" "}
                    <input
                      type="checkbox"
                      id="seventhgrade"
                      name="seventhgrade"
                      value={formData.seventhgrade}
                      onChange={handleChange}
                    />
                    <label
                      className="inline_label"
                      for="seventhgrade"
                      id="seventhgrade"
                    >
                      7. klasse
                    </label>
                  </section>
                </section>

                <h2 className="form_h2">Opplysninger om foresatte - mor</h2>
                <label for="mom_name" id="mom_name">
                  Fullt navn
                </label>
                <input
                  className="apply_input"
                  type="text"
                  id="mom_name"
                  name="mom_name"
                  value={formData.mom_name}
                  onChange={handleChange}
                />
                <label for="mom_adress" id="mom_adress">
                  Evt annen adresse
                </label>
                <input
                  className="apply_input"
                  type="text"
                  id="mom_adress"
                  name="mom_adress"
                  value={formData.mom_adress}
                  onChange={handleChange}
                />
                <div className="post_group">
                  <label for="mom_postnr" id="mom_postnr">
                    Postnummer
                  </label>
                  <input
                    className="apply_input"
                    type="text"
                    id="mom_postnr"
                    name="mom_postnr"
                    value={formData.mom_postnr}
                    onChange={handleChange}
                  />{" "}
                </div>
                <div className="post_group">
                  <label for="mom_city" id="mom_city">
                    Poststed
                  </label>
                  <input
                    className="apply_input"
                    type="text"
                    id="mom_city"
                    name="mom_city"
                    value={formData.mom_city}
                    onChange={handleChange}
                  />
                </div>

                <label for="mom_phone" id="mom_phone">
                  Telefon
                </label>
                <input
                  className="apply_input"
                  type="text"
                  id="mom_phone"
                  name="mom_phone"
                  value={formData.mom_phone}
                  onChange={handleChange}
                />
                <label for="mom_email" id="mom_email">
                  Epost
                </label>
                <input
                  className="apply_input"
                  type="text"
                  id="mom_email"
                  name="mom_email"
                  value={formData.mom_email}
                  onChange={handleChange}
                />
                <h2 className="form_h2">Opplysninger om foresatte - far</h2>
                <label for="dad_name" id="dad_name">
                  Fullt navn
                </label>
                <input
                  className="apply_input"
                  type="text"
                  id="dad_name"
                  name="dad_name"
                  value={formData.dad_name}
                  onChange={handleChange}
                />
                <label for="dad_adress" id="dad_adress">
                  Evt annen adresse
                </label>
                <input
                  className="apply_input"
                  type="text"
                  id="dad_adress"
                  name="dad_adress"
                  value={formData.dad_adress}
                  onChange={handleChange}
                />
                <div className="post_group">
                  <label for="dad_postnr" id="dad_postnr">
                    Postnummer
                  </label>
                  <input
                    className="apply_input"
                    type="text"
                    id="dad_postnr"
                    name="dad_postnr"
                    value={formData.dad_postnr}
                    onChange={handleChange}
                  />
                </div>
                <div className="post_group">
                  <label for="dad_city" id="dad_city">
                    Poststed
                  </label>
                  <input
                    className="apply_input"
                    type="text"
                    id="dad_city"
                    name="dad_city"
                    value={formData.dad_city}
                    onChange={handleChange}
                  />
                </div>
                <label for="dad_phone" id="dad_phone">
                  Telefon
                </label>
                <input
                  className="apply_input"
                  type="text"
                  id="dad_phone"
                  name="dad_phone"
                  value={formData.dad_phone}
                  onChange={handleChange}
                />
                <label for="dad_email" id="dad_email">
                  Epost
                </label>
                <input
                  className="apply_input"
                  type="text"
                  id="dad_email"
                  name="dad_email"
                  value={formData.dad_email}
                  onChange={handleChange}
                />

                <label for="children_age" id="children_age">
                  Alder på andre barn i familien
                </label>
                <input
                  className="apply_input"
                  type="text"
                  id="children_age"
                  name="children_age"
                  value={formData.children_age}
                  onChange={handleChange}
                />
                <label for="other" id="other">
                  Andre opplysninger som er relevante for søknaden:
                </label>
                <textarea
                  className="apply_textarea"
                  id="other"
                  name="other"
                  value={formData.other}
                  onChange={handleChange}
                />
                <label for="why" id="why">
                  Hvorfor ønsker dere plass hos oss?{" "}
                </label>
                <textarea
                  className="apply_textarea"
                  id="why"
                  name="why"
                  value={formData.why}
                  onChange={handleChange}
                />
                <fieldset className="consent">
                  {" "}
                  <legend>Samtykke</legend>
                  <section className="class">
                    <input
                      type="checkbox"
                      id="consent"
                      name="consent"
                      value={formData.consent}
                      onChange={handleChange}
                    />
                    <label className="inline_consent">
                      Vi samtykker til at opplysningene gitt i dette skjema kan
                      lagres i skolens arkiv. Hensikten med oppbevaring av
                      opplysningene er at vi som skole kan få kontakt med dere
                      vedr. inntak.
                    </label>
                  </section>
                </fieldset>

                <button
                  className="apply_btn"
                  type="submit"
                  id="button"
                  value="Submit"
                >
                  Send søknad
                </button>
              </fieldset>
            </form>
            {formError && <p className="setFormError">{formError}</p>}
            {formSuccess && <p className="setFormSuccess">{formSuccess}</p>}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ApplyForm;
