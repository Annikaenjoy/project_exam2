import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import FormError from "../../common/FormError";
import useAxios from "../../hooks/useAxios";
import { postUrl } from "../../constants/Api";

const schema = yup
  .object({
    title: yup.string().min(2).required(),
  })
  .required();

const CreatePost = (props) => {
  const [submitting, setSubmitting] = useState(false);
  const [serverError, setServerError] = useState(null);

  const navigate = useNavigate();
  const http = useAxios();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  async function onSubmit(data) {
    setSubmitting(true);
    setServerError(null);

    data.status = "publish";

    console.log(data);

    try {
      const response = await http.post("wp/v2/posts", data);
      console.log("response", response.data);
      navigate("/dashboard");
    } catch (error) {
      console.log("error", error);
      setServerError(error.toString());
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      <h2 className="new_post">Create new post</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        {serverError && <FormError>{serverError}</FormError>}
        <fieldset disabled={submitting}>
          <div>
            <input placeholder="Tittel" {...register("title")} />
            {errors.title && <FormError>{errors.title.message}</FormError>}
          </div>

          <div>
            <textarea placeholder="Innholdstekst..." {...register("content")} />
          </div>

          {/* <div>
            <MediaDropdown register={register} />
          </div> */}
          <button>{submitting ? "Publiserer..." : "Publiser"}</button>
        </fieldset>
      </form>
    </>
  );
};

export default CreatePost;
