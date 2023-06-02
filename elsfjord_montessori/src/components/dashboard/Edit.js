import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import FormError from "../../common/FormError";
import useAxios from "../../hooks/useAxios";
import { useParams } from "react-router-dom";

// React Bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// Components
import SelectImg from "./SelectImg";
import SinglePost from "../SinglePost";

import { BoxesLoaderComponent } from "../Loader";

const schema = yup.object().shape({
  title: yup.string().required("Innlegget må ha en tittel"),
  content: yup.string().required("Innlegget må ha innholdstekst"),
});

const Edit = (props) => {
  const [post, setPost] = useState(null);
  const [updated, setUpdated] = useState(false);
  const [fetchingPost, setFetchingPost] = useState(true);
  const [updatingPost, setUpdatingPost] = useState(false);
  const [fetchError, setFetchError] = useState(null);
  const [updateError, setUpdateError] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const http = useAxios();
  let { id } = useParams();
  const url = `wp/v2/posts/${id}`;

  useEffect(() => {
    async function getPost() {
      try {
        const result = await http.get(url);
        console.log("result", result.data);
        setPost(result.data);
      } catch (error) {
        console.log(error);
        setFetchError(error.toString()); // Set fetchError if an error occurs
      } finally {
        setFetchingPost(false);
      }
    }
    getPost();
  }, []);

  async function onSubmit(data) {
    setUpdatingPost(true);
    setUpdateError(null);
    setUpdated(false);

    console.log(data);

    try {
      const response = await http.put(url, data);
      console.log("response", response.data);
      setUpdated(true);
    } catch (error) {
      setUpdateError(error.toString());
      console.log("error", error);
    } finally {
      setUpdatingPost(false);
    }
  }

  if (fetchingPost) {
    return <BoxesLoaderComponent />;
  }
  if (fetchError) {
    return <div>Error! Klarte ikke hente post..</div>;
  }

  return (
    <>
      <Container>
        <Row>
          <Col md={6}>
            <form className="edit_form" onSubmit={handleSubmit(onSubmit)}>
              {updated && (
                <div className="success">Innlegget er oppdatert!</div>
              )}
              {updateError && <FormError>{updateError}</FormError>}
              <fieldset disabled={updatingPost}>
                <label htmlFor="title" id="title">
                  Tittel
                </label>
                <input
                  className="edit_input"
                  name="title"
                  defaultValue={post.title.rendered}
                  {...register("title")}
                />
                {errors.title && <FormError>{errors.title.message}</FormError>}

                <div>
                  <SelectImg />
                </div>
                <label htmlFor="content" id="content">
                  Innholdstekst
                </label>
                <textarea
                  className="edit_textarea"
                  name="content"
                  defaultValue={post.content.rendered}
                  {...register("content")}
                />

                <button className="update_btn" type="submit" value="Submit">
                  Oppdater
                </button>
              </fieldset>
            </form>
          </Col>
          <Col md={6}>
            <SinglePost />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Edit;
