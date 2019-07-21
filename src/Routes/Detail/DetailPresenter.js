import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Loader from "../../Components/Loader";
import { Helmet } from "react-helmet";
const Wrapper = styled.div`
  position: relative;

  padding: 50px 50px;
  width: 100%;
  height: calc(100vh - 50px);
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 3fr 7fr;
  grid-auto-rows: 80vh;
  grid-gap: 20px;
`;

const BackgroundPoster = styled.div`
  position: absolute;
  width: 100%;
  height: calc(100vh - 50px);
  background-image: url(${props => props.img});
  background-size: cover;
  background-position: center center;
  z-index: -1;
  filter: blur(5px);
  opacity: 0.6;
`;

const Poster = styled.div`
  background-image: url(${props => props.img});
  background-size: cover;
  background-position: center center;
  border-radius: 5px;
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.6);
`;

const DetailContainer = styled.div`
  /* background-color: black; */
`;

const Title = styled.h1`
  font-size: 25px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const InfoList = styled.ul`
  display: flex;
  margin-bottom: 20px;
`;

const InfoItem = styled.li`
  margin-right: 10px;
`;

const GenreList = styled.ul`
  display: flex;
`;

const GenreItem = styled.li`
  margin-right: 5px;
`;

const Description = styled.div`
  max-width: 40vw;
  margin-bottom: 20px;
`;

const VideoList = styled.div`
  display: grid;
`;

const VideoItem = styled.a`
  margin-bottom: 10px;
  transition: color 0.2s linear;
  &:hover {
    color: rgba(255, 255, 255, 0.6);
  }
`;

const DetailPresenter = ({ detail, loading, error }) => {
  console.log(detail);

  if (loading) {
    return <Loader />;
  } else {
    return (
      <Wrapper>
        <Helmet>
          <title>Details | MANFLEX</title>
        </Helmet>
        <BackgroundPoster
          img={`https://image.tmdb.org/t/p/original/${detail.backdrop_path}`}
        />
        <Poster
          img={`https://image.tmdb.org/t/p/original/${detail.poster_path}`}
        />
        <DetailContainer>
          <Title>{detail.title}</Title>
          <InfoList>
            <InfoItem>{detail.release_date}</InfoItem>
            <InfoItem>{detail.runtime} min</InfoItem>
            <GenreList>
              {detail.genres.map(genre => (
                <GenreItem key={genre.id}>{genre.name},</GenreItem>
              ))}
            </GenreList>
          </InfoList>
          <Description>{detail.overview}</Description>
          <VideoList>
            {detail.videos.results.length > 0 &&
              detail.videos.results.map(video => (
                <VideoItem
                  key={video.id}
                  href={`https://www.youtube.com/watch?v=${video.key}`}
                  target="_blank"
                >
                  🎥{video.name}
                </VideoItem>
              ))}
          </VideoList>
        </DetailContainer>
      </Wrapper>
    );
  }
};

DetailPresenter.propTypes = {
  detail: PropTypes.object,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string
};

export default DetailPresenter;
