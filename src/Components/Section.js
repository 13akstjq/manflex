import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Card from "./Card";

const Wrapper = styled.div``;

const Title = styled.div`
  font-size: 20px;
  margin-bottom: 30px;
  font-weight: 600;
`;

const ContentList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  grid-auto-rows: 250px;
  margin-bottom: 50px;
  grid-gap: 20px;
`;

const Section = ({ title, children, isMovie = true }) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <ContentList>
        {children &&
          children.length > 0 &&
          children.map(item => (
            <Card
              key={item.id}
              id={item.id}
              title={item.title ? item.title : item.original_name}
              release_date={
                item.release_date ? item.release_date : item.first_air_date
              }
              poster_path={item.poster_path}
              vote_average={item.vote_average}
              isMovie={isMovie}
            />
          ))}
      </ContentList>
    </Wrapper>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.array
};

export default Section;
