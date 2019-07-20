export default ({ showDetail, movieDetail, loading, error }) => {
  if (loading) {
    return "loading";
  } else {
    return "detail";
  }
};
