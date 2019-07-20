import React, { useState, useEffect } from "react";
import HomePresenter from "./HomePresenter";
import { movie } from "../../Components/api";

export default () => {
  const [nowPlaying, setnowPlaying] = useState("");
  const [upcoming, setUpcoming] = useState("");
  const [popular, setPopular] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const getData = async () => {
    console.log("asdf");
    try {
      const {
        data: { results: nowPlaying }
      } = await movie.nowPlaying();
      const {
        data: { results: upcoming }
      } = await movie.upcoming();
      const {
        data: { results: popular }
      } = await movie.popular();
      setnowPlaying(nowPlaying);
      setUpcoming(upcoming);
      setPopular(popular);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <HomePresenter
      nowPlaying={nowPlaying}
      upcoming={upcoming}
      popular={popular}
      loading={loading}
      error={error}
    />
  );
};
