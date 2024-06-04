import React from "react";
import { useSelector } from "react-redux";

import { RootState } from "../../state/store";
import Pokemon from "../pokemon/Pokemon";
import PokemonsList from "../pokemonsList/PokemonsList";

import "./PokemonApp.scss";

function PokemonApp() {
  const selectedPokemonIndex = useSelector(
    (state: RootState) => state.pokemon.selectedPokemonIndex
  );
  return (
    <div>
      <h1>Pokemon React</h1>
      <div className="pokemon-react__container">
        <div>
          <PokemonsList />
        </div>
        <div>
          <div className="pokemon-react__pokemon-container">
            {selectedPokemonIndex && <Pokemon />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PokemonApp;
