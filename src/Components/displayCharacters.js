import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import Table from "react-bootstrap/Table";
import { getMoviesDetails } from "../Redux/characters";

const selectCharacters = (state) => state.characters;
const Characters = () => {
  const selectedCharacter = useSelector(selectCharacters);

  const dispatch = useDispatch();
  const getCharactersData = () => {
    if (selectedCharacter.length === 0) {
      dispatch(getMoviesDetails());
    }
  };
  useEffect(() => {
    getCharactersData();
  }, []);
  return (
    <div>
      <Table striped bordered hover size="sm" className="table">
        <thead>
          <tr>
            <th> Name </th> <th> Gender </th> <th> Height </th> <th> {} </th>{" "}
          </tr>{" "}
        </thead>{" "}
        <tbody>
          {" "}
          {selectedCharacter.map((m) => (
            <tr key={uuidv4()}>
              <td className="mission-name"> {m.name} </td> <td> {m.gender} </td>{" "}
              <td> {m.height} </td>{" "}
            </tr>
          ))}{" "}
        </tbody>{" "}
      </Table>{" "}
    </div>
  );
};

export default Characters;
