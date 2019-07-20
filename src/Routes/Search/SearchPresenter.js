import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Section from "../../Components/Section";
import Loader from "../../Components/Loader";

const Wrapper = styled.div``;

const SectionList = styled.div``;

const SearchPresenter = ({
  SearchInput,
  loading,
  error,
  onSubmit,
  movieResults,
  tvResults
}) => {
  console.log(loading, movieResults, tvResults);
  return (
    <Wrapper>
      <form onSubmit={onSubmit}>
        <input
          placeholder="term input"
          value={SearchInput.value}
          onChange={SearchInput.onChange}
        />
      </form>
      <SectionList>
        {loading && <Loader />}
        {!loading && movieResults && movieResults.length > 0 && (
          <Section title="movie results" children={movieResults} />
        )}
        {!loading && movieResults && movieResults.length === 0 && (
          <span>notFound movie</span>
        )}
        {!loading && tvResults && tvResults.length > 0 && (
          <Section title="tv results" children={tvResults} />
        )}
        {!loading && tvResults && tvResults.length === 0 && (
          <span>notFound movie</span>
        )}
      </SectionList>
    </Wrapper>
  );
};

SearchPresenter.propTypes = {
  SearchInput: PropTypes.object,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string
};

export default SearchPresenter;
