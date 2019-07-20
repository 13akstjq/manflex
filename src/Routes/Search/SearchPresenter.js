import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Section from "../../Components/Section";

const Wrapper = styled.div``;

const Input = styled.input``;

const SectionList = styled.div``;

const SearchPresenter = ({ SearchInput, loading, error }) => {
  return (
    <Wrapper>
      <Input {...SearchInput} />
      <SectionList>
        {/* <Section title="movie results" />
        <Section title="tv results" /> */}
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
