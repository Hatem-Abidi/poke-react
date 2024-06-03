import React from "react";
import { useSelector } from "react-redux";

import { RootState } from "../../state/store";
import { useGetPokemonQuery } from "../../services/PokemonApi";

import "./Pokemon.scss";

const Pokemon = () => {
  const selectedPokemonIndex = useSelector(
    (state: RootState) => state.pokemon.selectedPokemonIndex
  );
  const { data, isError, isLoading, isSuccess } =
    useGetPokemonQuery(selectedPokemonIndex);
  return (
    <div>
      <h2>Pokemon:</h2>
      {isLoading && <div>loading</div>}
      {isError && <div>error</div>}
      {isSuccess && (
        <div>
          <div>Name: {data.name}</div>
          <div>Height: {data.height}</div>
          <div>Weight: {data.weight}</div>
          <div>Types: {data.types.join(", ")}</div>
        </div>
      )}
    </div>
  );
};

export default Pokemon;
