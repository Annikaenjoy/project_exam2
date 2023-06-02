import React from "react";
import { useState, useEffect } from "react";
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

const schema = yup
  .object({
    title: yup.string().required("Innlegget må ha en tittel"),
  })
  .required();

const Edit = (props) => {
  const [post, setPost] = useState(null);

  const http = useAxios();
  let { id } = useParams();
  const url = `wp/v2/posts/${id}`;

  useEffect(() => {
    async function getPost() {
      try {
        const result = await http.get(url);
        console.log(result.data);
        setPost(result.data);
      } catch (error) {
        console.log(error);
      }
    }
    getPost();
  }, []);

  if (!post) {
    return <BoxesLoaderComponent />;
  }

  return (
    <>
      <Container>
        <Row>
          <Col md={6}>
            {" "}
            <SinglePost />
          </Col>
          <Col md={6}>
            <form className="edit_form">
              <fieldset>
                <label htmlFor="title" id="title">
                  Tittel
                </label>
                <input
                  className="edit_input"
                  name="title"
                  defaultValue={post.title.rendered}
                />
                <div>
                  <SelectImg />
                </div>
                <label htmlFor="content" id="content">
                  Content
                </label>
                <textarea
                  className="edit_textarea"
                  name="content"
                  defaultValue={post.content.rendered}
                />

                <button className="update_btn" type="submit" value="Submit">
                  Oppdater
                </button>
              </fieldset>
            </form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Edit;
