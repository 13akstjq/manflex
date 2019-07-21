import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const DetailPresenter = ({ detail, loading, error }) => {
  console.log(detail);
  if (loading) {
    return "loading";
  } else {
    return "detail";
  }
};

DetailPresenter.propTypes = {
  detail: PropTypes.object,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string
};

export default DetailPresenter;
