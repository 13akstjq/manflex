import React, { useState, useEffect } from "react";
import DetailPresenter from "./DetailPresenter";
import { async } from "q";
import { tv, movie } from "../../Components/api";

export default () => {
  const [showDetail, setShowDetail] = useState("");
  const [movieDetail, setMovieDetail] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const getData = async () => {
    try {
      const { data: showDetail } = await tv.showDetail(121);
      const { data: movieDetail } = await movie.movieDetail(121);
      setShowDetail(showDetail);
      setMovieDetail(movieDetail);
    } catch (e) {
      setError(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <DetailPresenter
      showDetail={showDetail}
      movieDetail={movieDetail}
      loading={loading}
      error={error}
    />
  );
};
