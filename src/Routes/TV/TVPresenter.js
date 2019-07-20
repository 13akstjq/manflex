import React from "react";
import styled from "styled-components";

export default ({ airingToday, topRated, popular, loading, error }) => {
  console.log(airingToday, topRated, popular, loading, error);

  if (loading) {
    return "loading";
  } else {
    return "tv";
  }
};
