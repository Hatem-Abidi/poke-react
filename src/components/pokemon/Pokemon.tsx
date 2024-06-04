import React from "react";
import { useSelector } from "react-redux";

import { RootState } from "../../state/store";
import { useGetPokemonQuery } from "../../services/pokemonsApi";

import "./Pokemon.scss";

const Pokemon = () => {
  const selectedPokemonIndex = useSelector(
    (state: RootState) => state.pokemon.selectedPokemonIndex
  );
  const { currentData, isError, isFetching } =
    useGetPokemonQuery(selectedPokemonIndex);

  return (
    <div className="pokemon__container">
      <h2>Pokemon Number {currentData?.id}</h2>
      {isFetching && <div>Loading...</div>}
      {isError && <div>Error</div>}
      {!isFetching && !isError && (
        <table>
          <tbody>
            <tr>
              <td colSpan={2}>
                <div className="pokemon__image__container">
                  <div>
                    <img src={currentData?.image} alt={currentData?.name} />
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td>Name:</td>
              <td> {currentData?.name}</td>
            </tr>
            <tr>
              <td>Height:</td>
              <td className="pokemon__number">{currentData?.height}</td>
            </tr>
            <tr>
              <td>Weight:</td>
              <td className="pokemon__number">{currentData?.weight}</td>
            </tr>
            <tr>
              <td>Types:</td>
              <td>{currentData?.types.join(", ")}</td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Pokemon;
