import React from "react";
import { useState } from "react";
import { send } from "emailjs-com";
import Heading from "../components/Heading";

// React Bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    reply_to: "",
    number: "",
    message: "",
  });

  const [formError, setFormError] = useState();
  const [formSuccess, setFormSuccess] = useState();

  function validateEmail(email) {
    const regEX = /\S+@\S+\.\S+/;
    const patternMatches = regEX.test(email);
    return patternMatches;
  }

  const validateForm = () => {
    if (formData.name.length < 3) {
      setFormError("ERROR! Navn må inneholde minst 3 karakterer");
      setTimeout(() => {
        setFormError(null);
      }, 5000);
      return false;
    } else if (!validateEmail(formData.reply_to)) {
      setFormError("ERROR! Fyll inn en gyldig e-postadresse");
      setTimeout(() => {
        setFormError(null);
      }, 5000);
      return false;
    } else if (formData.message.length < 10) {
      setFormError("ERROR! Meldingen må inneholde minst 10 karakterer");
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
      send("service_7q1vtvu", "template_2lws8ff", formData, "xlrmQEffs-yM0vpJc")
        .then((response) => {
          console.log("SUCCESS!", response.status, response.text);
          setFormSuccess(
            "Meldingen din har blitt sendt! Du hører fra oss så snart som mulig:)"
          );
          setFormData({
            name: "",
            reply_to: "",
            phone_number: "",

            message: "",
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
      <Heading>Contact us</Heading>
      <Container>
        <Row>
          <Col>
            {formError && <p className="setFormError">{formError}</p>}
            {formSuccess && <p className="setFormSuccess">{formSuccess}</p>}
            <form onSubmit={onSubmit}>
              <fieldset>
                <input
                  className="contact_input"
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Navn"
                  value={formData.first_name}
                  onChange={handleChange}
                ></input>

                <input
                  className="contact_input"
                  type="text"
                  id="email"
                  name="reply_to"
                  placeholder="Epost"
                  value={formData.reply_to}
                  onChange={handleChange}
                ></input>
                <input
                  className="contact_input"
                  type="text"
                  id="number"
                  name="phone_number"
                  placeholder="Tlf"
                  value={formData.phone_number}
                  onChange={handleChange}
                ></input>

                <textarea
                  className="contact_textarea"
                  type="text"
                  id="message"
                  name="message"
                  placeholder="Melding..."
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
                <button
                  className="contact_button"
                  type="submit"
                  id="button"
                  value="Submit"
                >
                  Send melding
                </button>
              </fieldset>
            </form>
          </Col>
          <Col md={5}></Col>{" "}
        </Row>
      </Container>
    </>
  );
};

export default ContactForm;
