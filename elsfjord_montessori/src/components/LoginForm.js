import React from "react";
import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import FormError from "../common/FormError";

// React Bootstrap
import Image from "react-bootstrap/Image";

// Images
import Logo from "../assets/img/Logo_farget.png";

// API
import { baseUrl, TOKEN_PATH } from "../constants/Api";

const url = baseUrl + TOKEN_PATH;

const schema = yup.object().shape({
  username: yup.string().required("Skriv inn brukernavn"),
  password: yup.string().required("Skriv inn passord"),
});
const LoginForm = (props) => {
  const [submitting, setSubmitting] = useState(false);
  const [loginError, setLoginError] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  async function onSubmit(data) {
    setSubmitting(true);
    setLoginError(null);

    try {
      const response = await axios.post(url, data);
      console.log("response", response.data);
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
            {submitting ? "Loggin in..." : "Login"}
          </button>
        </fieldset>
      </form>
    </>
  );
};

export default LoginForm;
