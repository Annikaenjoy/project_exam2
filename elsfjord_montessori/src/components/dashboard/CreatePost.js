import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import FormError from "../../common/FormError";
import useAxios from "../../hooks/useAxios";
import PostList from "./PostList";

// React Bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SelectImg from "./SelectImg";

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

    if (data.featured_media === "") {
      data.featured_media = null;
    }

    try {
      const response = await http.post("wp/v2/posts", data);
      console.log("response", response.data);
      navigate("/aktuelt");
    } catch (error) {
      console.log("error", error);
      setServerError(error.toString());
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      <Container>
        <Row>
          <Col md={6}>
            <form className="post_form" onSubmit={handleSubmit(onSubmit)}>
              {serverError && <FormError>{serverError}</FormError>}
              <fieldset disabled={submitting}>
                <h2 className="new_post">Skriv et nytt innlegg</h2>
                <div>
                  <input
                    className="post_input"
                    placeholder="Tittel"
                    {...register("title")}
                  />
                  {errors.title && (
                    <FormError>{errors.title.message}</FormError>
                  )}
                </div>

                <div>
                  <textarea
                    className="post_textarea"
                    placeholder="Innholdstekst..."
                    {...register("content")}
                  />
                </div>

                <div>
                  <SelectImg register={register} />
                </div>
                <button className="post_btn">
                  {submitting ? "Publiserer..." : "Publiser"}
                </button>
              </fieldset>
            </form>
          </Col>
          <Col md={6}>
            <PostList />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default CreatePost;
