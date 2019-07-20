export default ({ nowPlaying, upcoming, popular, loading, error }) => {
  console.log(nowPlaying, upcoming, popular, loading, error);
  if (loading) {
    return "loading";
  } else {
    return "home";
  }
};
