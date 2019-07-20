import React from "react";
import styled from "styled-components";
import Loader from "../../Components/Loader";
import PropTypes from "prop-types";
import Section from "../../Components/Section";

const Wrapper = styled.div``;

const HomePresenter = ({ nowPlaying, upcoming, popular, loading, error }) => {
  console.log(nowPlaying, upcoming, popular, loading, error);
  if (loading) {
    return <Loader />;
  } else {
    return (
      <Wrapper>
        <Section title="nowPlaying" children={nowPlaying} />
        <Section title="popular" children={popular} />
        <Section title="upcoming" children={upcoming} />
      </Wrapper>
    );
  }
};

HomePresenter.propTypes = {
  nowPlaying: PropTypes.array,
  upcoming: PropTypes.array,
  popular: PropTypes.array,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string
};

export default HomePresenter;
