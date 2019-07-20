import React from "react";
import styled from "styled-components";
import Loader from "../../Components/Loader";

const Wrapper = styled.div``;

export default ({ nowPlaying, upcoming, popular, loading, error }) => {
  console.log(nowPlaying, upcoming, popular, loading, error);
  if (loading) {
    return <Loader />;
  } else {
    return <Wrapper>Home</Wrapper>;
  }
};
