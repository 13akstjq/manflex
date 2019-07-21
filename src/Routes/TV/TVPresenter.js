import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Section from "../../Components/Section";
import Loader from "../../Components/Loader";
import { Helmet } from "react-helmet";
const Wrapper = styled.div`
  padding: 30px;
`;

const TVPresenter = ({ airingToday, topRated, popular, loading }) => {
  if (loading) {
    return <Loader />;
  } else {
    return (
      <Wrapper>
        <Helmet>
          <title>TV Shows | MANFLEX</title>
        </Helmet>
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
