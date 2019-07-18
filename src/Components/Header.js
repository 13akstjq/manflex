import React from "react";
import styled from "styled-components";
import { Link, withRouter } from "react-router-dom";

const Header = styled.header`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);
  padding: 0 10px;
`;

const List = styled.ul`
  display: flex;
`;

const Item = styled.li`
  cursor: pointer;
  padding: 10px 0;
  border-bottom: 2px solid
    ${props => (props.current ? "#3498db" : "transparent")};
  &:not(:last-child) {
    margin-right: 20px;
  }
  &:hover {
    color: rgba(200, 200, 200, 0.9);
  }
`;

export default withRouter(({ location: { pathname } }) => {
  //   console.log(pathname);
  return (
    <Header>
      <List>
        <Item current={pathname === "/" ? true : false}>
          <Link to="/movies">Movies</Link>
        </Item>
        <Item current={pathname === "/tv" ? true : false}>
          <Link to="/tv">Tv</Link>
        </Item>
        <Item current={pathname === "/search" ? true : false}>
          <Link to="/search">search</Link>
        </Item>
      </List>
    </Header>
  );
});
