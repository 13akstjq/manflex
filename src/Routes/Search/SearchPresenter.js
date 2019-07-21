import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Section from "../../Components/Section";
import Loader from "../../Components/Loader";
import { Helmet } from "react-helmet";
const Wrapper = styled.div`
  display: grid;
  padding: 5px 30px;
`;

const Input = styled.input`
  height: 80px;
  padding: 3px;
  font-size: 30px;
  width: 100%;
  border: none;
  background-color: rgba(20, 20, 20, 1);
  color: white;
  &:focus {
    outline: none;
  }
`;

const NotFound = styled.div`
  font-size: 35px;
  height: 200px;
  justify-self: center;
`;

const SearchPresenter = ({
  SearchInput,
  loading,
  onSubmit,
  movieResults,
  tvResults
}) => {
  console.log(loading, movieResults, tvResults);
  return (
    <Wrapper>
      <Helmet>
        <title>Search | MANFLEX</title>
      </Helmet>
      <form onSubmit={onSubmit}>
        <Input
          placeholder="Search Movies or TV Shows"
          value={SearchInput.value}
          onChange={SearchInput.onChange}
        />
      </form>
      {loading && <Loader />}
      {!loading && movieResults && movieResults.length > 0 && (
        <Section title="movie results" children={movieResults} />
      )}
      {!loading && movieResults && movieResults.length === 0 && (
        <NotFound>notFound movie</NotFound>
      )}
      {!loading && tvResults && tvResults.length > 0 && (
        <Section title="tv results" children={tvResults} />
      )}
      {!loading && tvResults && tvResults.length === 0 && (
        <NotFound>notFound TV Show</NotFound>
      )}
    </Wrapper>
  );
};

SearchPresenter.propTypes = {
  SearchInput: PropTypes.object,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string
};

export default SearchPresenter;
