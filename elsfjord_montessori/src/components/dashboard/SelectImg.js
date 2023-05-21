import React from "react";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import useAxios from "../../hooks/useAxios";

export const SelectImg = ({ register }) => {
  const [media, setMedia] = useState([]);

  const http = useAxios();

  useEffect(function () {
    async function getMedia() {
      try {
        const response = await http.get("wp/v2/media");
        console.log("response", response);
        setMedia(response.data);
      } catch (error) {
        console.log(error);
      }
    }

    getMedia();
  }, []);

  return (
    <>
      <select className="post_select" {...register("featured_media")}>
        <option value="">Velg bilde</option>
        {media.map((media) => {
          return (
            <option key={media.id} value={media.id}>
              {media.title.rendered}
            </option>
          );
        })}
      </select>
    </>
  );
};

export default SelectImg;

SelectImg.propTypes = {
  register: PropTypes.func,
};

SelectImg.defaultProps = {
  register: () => {},
};
