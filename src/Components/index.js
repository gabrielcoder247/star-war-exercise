import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import starWarsLogo from "../images/starWarsLogo.png";
import { getMoviesTitle } from "../Redux/characters";

const Container = styled("div")`
  height: 100%;
  width: 100%;
`;
const ImageLogo = styled("div")`
  background-image: url(${starWarsLogo});
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const Main = styled("div")`
  font-family: sans-serif;
  background: #ffff00;
  height: 2.5em;
  width: 15.5em;
  margin: 60px auto;
`;

const DropDownContainer = styled("div")`
  width: 15.5em;
  margin: 0 auto;
`;

const DropDownHeader = styled("div")`
  margin-bottom: 0.8em;
  padding: 0.4em 2em 0.4em 1em;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
  font-weight: 500;
  font-size: 20px;
  white-space: nowrap;
  color: #000000;
  background: #ffff00;
`;

const DropDownListContainer = styled("div")``;

const DropDownList = styled("ul")`
  padding: 0;
  margin: 0;
  padding-left: 1em;
  background: #ffff00;
  border: 2px solid #e5e5e5;
  box-sizing: border-box;
  color: #000000;
  font-size: 1.3rem;
  font-weight: 500;
  &:first-child {
    padding-top: 0.8em;
  }
`;

const ListItem = styled("li")`
  list-style: none;
  margin-bottom: 0.8em;
`;

// const options = ["Mangoes", "Apples", "Oranges"];
const selectCharacters = (state) => state.characters;
const Home = () => {
  const selectedCharacter = useSelector(selectCharacters);
  console.log(selectedCharacter);
  const dispatch = useDispatch();
  const getCharactersData = () => {
    if (selectedCharacter.length === 0) {
      dispatch(getMoviesTitle());
    }
  };
  useEffect(() => {
    getCharactersData();
  }, []);

  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = (value) => () => {
    setSelectedOption(value);
    setIsOpen(false);
    console.log(selectedOption);
  };
  return (
    <Container>
      {" "}
      <ImageLogo>
        <Main>
          <DropDownContainer>
            <DropDownHeader onClick={toggling}>
              {" "}
              {selectedOption || "Choose a star war movie"}{" "}
            </DropDownHeader>{" "}
            {isOpen && (
              <DropDownListContainer>
                <DropDownList>
                  {" "}
                  {selectedCharacter.map((char) => (
                    <ListItem onClick={onOptionClicked(char)} key={uuidv4()}>
                      {" "}
                      {char.title}{" "}
                    </ListItem>
                  ))}{" "}
                </DropDownList>{" "}
              </DropDownListContainer>
            )}{" "}
          </DropDownContainer>{" "}
        </Main>{" "}
      </ImageLogo>{" "}
    </Container>
  );
};
export default Home;
