import axios from "axios";

const API_KEY = "c58e75391cfe16df20073888e26b1c9c";
const EN_US = "en-US";

const config = {
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: API_KEY,
    language: EN_US
  }
};
const appendConfig = {
  ...config,
  params: {
    ...config.params,
    append_to_response: "videos"
  }
};
const searchConfig = term => {
  return {
    ...config,
    params: {
      ...config.params,
      query: encodeURIComponent(term)
    }
  };
};
export const tv = {
  airingToday: () => axios.get("tv/airing_today", config),
  popular: () => axios.get("tv/popular", config),
  topRated: () => axios.get("tv/top_rated", config),
  showDetail: id => axios.get(`tv/${id}`, appendConfig),
  search: term => axios.get("search/tv", searchConfig(term))
};
export const movie = {
  nowPlaying: () => axios.get("movie/now_playing", config),
  upcoming: () => axios.get("movie/upcoming", config),
  popular: () => axios.get("movie/popular", config),
  movieDetail: id => axios.get(`movie/${id}`, appendConfig),
  search: term => axios.get("search/movie", searchConfig(term))
};
