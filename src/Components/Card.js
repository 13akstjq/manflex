import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Rank = styled.div`
  position: absolute;
  bottom: 5px;
  right: 5px;
  opacity: 0;
  transition: opacity 0.1s linear;
`;

const Poster = styled.div`
  background-image: url(${props => props.img});
  height: 100%;
  background-position: center center;
  background-size: cover;
`;
const ImgContainer = styled.div`
  position: relative;
  &:hover {
    ${Poster} {
      opacity: 0.5;
    }
    ${Rank} {
      opacity: 1;
    }
  }
`;
const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 8fr 1fr 1fr;
`;

const Title = styled.div`
  padding: 3px 3px;
`;

const ReleaseYear = styled.div`
  padding: 3px 3px;
  color: rgba(255, 255, 255, 0.6);
`;

const Card = ({
  title,
  release_date,
  vote_average,
  poster_path,
  id,
  isMovie
}) => {
  const releaseYear = release_date.split("-");
  return (
    <Wrapper>
      <ImgContainer>
        <Link to={isMovie ? `movie/${id}` : `tv/${id}`}>
          <Poster img={`https://image.tmdb.org/t/p/original/${poster_path}`} />
          <Rank>
            <span role="img">⭐️</span> {vote_average}
          </Rank>
        </Link>
      </ImgContainer>
      <Title>{title}</Title>
      <ReleaseYear>{releaseYear[0]}</ReleaseYear>
    </Wrapper>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired
};

export default Card;
