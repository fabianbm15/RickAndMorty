import "./Detail.css";

import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function Detail() {
  const { detailId } = useParams();
  const [character, setCharacter] = useState({});
  /*
  useEffect(() => {
    fetch(`http://localhost:3001/rickandmorty/detail/${detailId}`)
      .then((response) => response.json())
      .then((char) => {
        if (char.name) {
          setCharacter(char);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      })
      .catch((err) => {
        window.alert("No hay personajes con ese ID");
      });
    return setCharacter({});
  }, [detailId]);
*/

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios(
          `http://localhost:3001/rickandmorty/detail/${detailId}`
        );
        const char = response.data;
        if (char.name) {
          setCharacter(char);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      } catch (error) {
        window.alert("No hay personajes con ese ID");
      }
    };
    fetchData();
    return setCharacter({});
  }, [detailId]);

  return (
    <div className="divDataImage">
      <div className="divData">
        <h1>NOMBRE: {character.name}</h1>
        <h3>STATUS: {character.status}</h3>
        <h3>ESPECIE: {character.species}</h3>
        <h3>GÉNERO: {character.gender}</h3>
        <h3>ORIGIN: {character.origin?.name}</h3>
      </div>
      <div className="divImage">
        <img src={character.image} alt={character.image} />
      </div>
    </div>
  );
}
