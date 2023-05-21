import React from "react";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import useAxios from "../../hooks/useAxios";

export const SelectImg = ({ register }) => {
  const [img, setImg] = useState([]);

  const http = useAxios();

  useEffect(function () {
    async function getImg() {
      try {
        const response = await http.get("wp/v2/media");
        console.log("response", response);
        setImg(response.data);
      } catch (error) {
        console.log(error);
      }
    }

    getImg();
  }, []);

  return (
    <>
      <select className="post_select" {...register("featured_media")}>
        <option value="">Velg bilde</option>
        {img.map((img) => {
          return (
            <option key={img.id} value={img.id}>
              {img.title.rendered}
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
