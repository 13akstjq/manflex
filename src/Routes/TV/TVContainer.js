import React, { useState, useEffect } from "react";
import TVPresenter from "./TVPresenter";
import { tv } from "../../Components/api";
export default () => {
  const [airingToday, setAiringToday] = useState("");
  const [topRated, setTopRated] = useState("");
  const [popular, setPopular] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const getData = async () => {
    try {
      setLoading(true);
      const {
        data: { results: airingToday }
      } = await tv.airingToday();
      const {
        data: { results: popular }
      } = await tv.popular();
      const {
        data: { results: topRated }
      } = await tv.topRated();
      setAiringToday(airingToday);
      setPopular(popular);
      setTopRated(topRated);
    } catch (e) {
      setError(e);
    } finally {
      setLoading(false);
    }
  };
  //데이터 셋팅을 한번만 하기 위함.
  useEffect(() => {
    getData();
  }, []);

  return (
    <TVPresenter
      airingToday={airingToday}
      topRated={topRated}
      popular={popular}
      loading={loading}
      error={error}
    />
  );
};
