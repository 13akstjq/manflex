import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const DetailPresenter = ({ showDetail, movieDetail, loading, error }) => {
  if (loading) {
    return "loading";
  } else {
    return "detail";
  }
};

DetailPresenter.propTypes = {
  showDetail: PropTypes.object,
  movieDetail: PropTypes.object,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string
};

export default DetailPresenter;
