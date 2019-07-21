import React, { useState, useEffect } from "react";
import DetailPresenter from "./DetailPresenter";
import { tv, movie } from "../../Components/api";

export default ({ location }) => {
  const temp = location.pathname.split("/");
  const isMovie = temp[1] === "movie" ? true : false;
  const term = temp[2];
  const [detail, setDetail] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const getData = async (isMovie, term) => {
    console.log(isMovie, term);
    try {
      if (isMovie) {
        const { data: detail } = await movie.movieDetail(term);
        setDetail(detail);
      } else {
        const { data: detail } = await tv.showDetail(term);
        setDetail(detail);
      }
    } catch (e) {
      setError(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData(isMovie, term);
  }, []);
  return <DetailPresenter detail={detail} loading={loading} error={error} />;
};
