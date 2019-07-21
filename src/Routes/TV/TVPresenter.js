import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Section from "../../Components/Section";
import Loader from "../../Components/Loader";

const Wrapper = styled.div``;

const TVPresenter = ({ airingToday, topRated, popular, loading }) => {
  if (loading) {
    return <Loader />;
  } else {
    return (
      <Wrapper>
        <Section title="airingToday" children={airingToday} isMovie={false} />
        <Section title="topRated" children={topRated} isMovie={false} />
        <Section title="popular" children={popular} isMovie={false} />
      </Wrapper>
    );
  }
};

TVPresenter.propTypes = {
  airingToday: PropTypes.array,
  topRated: PropTypes.array,
  popular: PropTypes.array,
  loading: PropTypes.bool.isRequired
};

export default TVPresenter;
