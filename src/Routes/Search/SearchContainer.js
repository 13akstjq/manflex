import React, { useState } from "react";
import SearchPresenter from "./SearchPresenter";
import useInput from "../../Components/Hooks/useInput";

export default () => {
  const SearchInput = useInput("dfgsgdfg");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const onSubmit = e => {
    alert("제출");
  };

  return (
    <SearchPresenter
      SearchInput={SearchInput}
      loading={loading}
      error={error}
      onSubmit={onSubmit}
    />
  );
};
