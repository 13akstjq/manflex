import React, { useState } from "react";
import SearchPresenter from "./SearchPresenter";
import useInput from "../../Components/Hooks/useInput";
import { tv, movie } from "../../Components/api";

export default ({ history }) => {
  const SearchInput = useInput("dfgsgdfg", "text");
  const [loading, setLoading] = useState(false);
  const [movieResults, setMovieResults] = useState(null);
  const [tvResults, setTvResults] = useState(null);
  const [error, setError] = useState("");
  const onSubmit = async e => {
    try {
      setLoading(true);
      SearchInput.setValue("");
      const {
        data: { results: movieResults }
      } = await movie.search(SearchInput.value);
      const {
        data: { results: tvResults }
      } = await tv.search(SearchInput.value);
      console.log(movieResults, tvResults);
      setMovieResults(movieResults);
      setTvResults(tvResults);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <SearchPresenter
      SearchInput={SearchInput}
      loading={loading}
      error={error}
      onSubmit={onSubmit}
      movieResults={movieResults}
      tvResults={tvResults}
    />
  );
};
