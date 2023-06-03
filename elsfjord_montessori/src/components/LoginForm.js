import React from "react";
import axios from "axios";
import AuthContext from "../context/AuthContext";
import { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import FormError from "../common/FormError";
import { useNavigate } from "react-router-dom";

// React Bootstrap
import Image from "react-bootstrap/Image";

// Images
import Logo from "../assets/img/logo/Logo_farget.png";

// API
import { apiUrl, TOKEN_PATH } from "../constants/Api";

const url = apiUrl + TOKEN_PATH;

const schema = yup.object().shape({
  username: yup.string().required("Skriv inn brukernavn"),
  password: yup.string().required("Skriv inn passord"),
});
const LoginForm = (props) => {
  const [submitting, setSubmitting] = useState(false);
  const [loginError, setLoginError] = useState(null);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [auth, setAuth] = useContext(AuthContext);

  async function onSubmit(data) {
    setSubmitting(true);
    setLoginError(null);

    try {
      const response = await axios.post(url, data);
      console.log("response", response.data);
      setAuth(response.data);
      navigate("/dashboard");
    } catch (error) {
      console.log("error", error);
      setLoginError(error.toString());
    } finally {
      setSubmitting(false);
    }
  }
  return (
    <>
      <Image className="login_image" src={Logo} />
      <form onSubmit={handleSubmit(onSubmit)}>
        {loginError && <FormError>{loginError}</FormError>}
        <fieldset disabled={submitting}>
          <div>
            <input
              className="form_input"
              name="username"
              placeholder="Brukernavn"
              {...register("username")}
            />
            {errors.username && (
              <FormError>{errors.username.message}</FormError>
            )}
          </div>

          <div>
            <input
              className="form_input"
              name="password"
              placeholder="Passord"
              {...register("password")}
              type="password"
            />
            {errors.password && (
              <FormError>{errors.password.message}</FormError>
            )}
          </div>
          <button className="form_btn">
            {submitting ? "Logger inn..." : "Logg inn"}
          </button>
        </fieldset>
      </form>
    </>
  );
};

export default LoginForm;
