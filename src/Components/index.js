import React from "react";
import styled from "styled-components";

const DropDownContainer = styled("div")``;
const DropDownListContainer = styled("div")``;
const DropDownList = styled("ul")``;
const ListItem = styled("li")``;

const Home = () => {
  return (
    <div className="container">
      <div className="header-container">
        <h1 className="container"> Star Wars </h1>{" "}
        <div className="drop-down">
          <div className="drop-down-container">
            <h4> Choose a star war movie </h4>{" "}
            <DropDownContainer>
              <DropDownListContainer>
                <DropDownList>
                  <ListItem> Mangoes </ListItem> <ListItem> Apples </ListItem>{" "}
                  <ListItem> Oranges </ListItem>{" "}
                </DropDownList>{" "}
              </DropDownListContainer>{" "}
            </DropDownContainer>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
};
export default Home;
