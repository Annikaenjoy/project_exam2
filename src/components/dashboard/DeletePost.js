import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";
import useAxios from "../../hooks/useAxios";

// Icons
import { FaTrashAlt } from "react-icons/fa";

export default function DeletePost({ id }) {
  const [error, setError] = useState(null);
  const [isDeleted, setIsDeleted] = useState(false);

  const http = useAxios();
  const deleteUrl = `wp/v2/posts/${id}`;

  async function handleDelete() {
    try {
      await http.delete(deleteUrl);
      setIsDeleted(true);
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    } catch (error) {
      setError(error);
    }
  }
  return (
    <>
      <button className="delete_button" type="button" onClick={handleDelete}>
        <FaTrashAlt />
      </button>
      {error && <p className="error_delete">Error: {error.message}</p>}
      {isDeleted && (
        <p className="success_delete">Innlegget har blitt slettet!</p>
      )}
    </>
  );
}
DeletePost.propTypes = {
  id: PropTypes.number,
};
