import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MovieItemContainer, MovieItemImage, MovieItemSub, MovieItemTitle } from "./movie-item.styles";
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

const MovieItem = ({ title, year, poster, id }) => {
  const [isOpen, setOpen] = useState(false)

  const handleIsOpen = () => setOpen(!isOpen)

  return (
    <>
      <MovieItemContainer>
        <MovieItemImage onClick={handleIsOpen} src={poster} alt={title} />
        <MovieItemTitle>
          <Link to={`/detail/${id}`}>
            {title}
          </Link>
        </MovieItemTitle>
        <MovieItemSub>{year}</MovieItemSub>
      </MovieItemContainer>
      {isOpen && (
        <Lightbox
          mainSrc={poster}
          onCloseRequest={handleIsOpen}
        />
      )}
    </>
  )
}

export default MovieItem