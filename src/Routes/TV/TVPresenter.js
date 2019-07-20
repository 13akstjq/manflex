import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Section from "../../Components/Section";
import Loader from "../../Components/Loader";

const Wrapper = styled.div``;

const TVPresenter = ({ airingToday, topRated, popular, loading, error }) => {
  console.log(airingToday, topRated, popular, loading, error);

  if (loading) {
    return <Loader />;
  } else {
    return (
      <Wrapper>
        <Section title="airingToday" children={airingToday} />
        <Section title="topRated" children={topRated} />
        <Section title="popular" children={popular} />
      </Wrapper>
    );
  }
};

TVPresenter.propTypes = {
  airingToday: PropTypes.array,
  topRated: PropTypes.array,
  popular: PropTypes.array,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string
};

export default TVPresenter;
