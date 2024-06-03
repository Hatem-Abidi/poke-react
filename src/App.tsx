import React from "react";
import { useSelector } from "react-redux";

import { RootState } from "./state/store";
import Pokemon from "./components/pokemon/Pokemon";
import PokemonsList from "./components/pokemonsList/PokemonsList";

import "./App.css";

function App() {
  const selectedPokemonIndex = useSelector(
    (state: RootState) => state.pokemon.selectedPokemonIndex
  );
  return (
    <div>
      <h1>Pokemon React</h1>
      <PokemonsList />
      {selectedPokemonIndex && <Pokemon />}
    </div>
  );
}

export default App;
