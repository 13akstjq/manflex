import React from "react";
import Router from "./Router";
import GlobalStyles from "./GlobalStyles";
import "./api";
//만든 Router 사용
function App() {
  return (
    <>
      <GlobalStyles />
      <Router />
    </>
  );
}

export default App;
