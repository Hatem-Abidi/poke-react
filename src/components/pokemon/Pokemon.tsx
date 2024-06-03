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
    <div className="pokemon__container">
      <h2>Pokemon Number {isSuccess && data.id}</h2>
      {isLoading && <div>loading</div>}
      {isError && <div>error</div>}
      {isSuccess && (
        <table>
          <tr>
            <td colSpan={2}>
              <div className="pokemon__image__container">
                <img src={data.image} alt={data.name} />
              </div>
            </td>
          </tr>
          <tr>
            <td>Name:</td>
            <td> {data.name}</td>
          </tr>
          <tr>
            <td>Height:</td>
            <td className="pokemon__number">{data.height}</td>
          </tr>
          <tr>
            <td>Weight:</td>
            <td className="pokemon__number">{data.weight}</td>
          </tr>
          <tr>
            <td>Types:</td>
            <td>{data.types.join(", ")}</td>
          </tr>
        </table>
      )}
    </div>
  );
};

export default Pokemon;
