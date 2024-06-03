import React from "react";
import { useSelector } from "react-redux";

import { RootState } from "./state/store";
import Pokemon from "./components/pokemon/Pokemon";
import PokemonsList from "./components/pokemonsList/PokemonsList";

import "./App.scss";

function App() {
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
        <div>{selectedPokemonIndex && <Pokemon />}</div>
      </div>
    </div>
  );
}

export default App;
