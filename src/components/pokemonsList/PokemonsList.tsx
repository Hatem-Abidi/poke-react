import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "../../state/store";
import {
  nextPage,
  previousPage,
  setPage,
} from "../../state/pokemonsList/pokemonsListSlice";
import { useGetPokemonsListQuery } from "../../services/pokemonApi";
import { PokemonItem } from "../../models/pokemonsList/PokemonsList";
import { setSelectedPokemonIndex } from "../../state/pokemon/pokemonSlice";

import "./PokemonsList.scss";

const PokemonsList = () => {
  const [numberPokemonPerPage, setNumberPokemonPerPage] = useState(20);
  const pageIndex = useSelector(
    (state: RootState) => state.pokemonsList.pageIndex
  );
  const selectedPokemonIndex = useSelector(
    (state: RootState) => state.pokemon.selectedPokemonIndex
  );
  const { data, currentData, isError, isFetching } = useGetPokemonsListQuery({
    limit: numberPokemonPerPage,
    offset: (pageIndex - 1) * numberPokemonPerPage,
  });

  const setSelectedPokemon = (index: number) => {
    dispatch(setSelectedPokemonIndex(index));
  };

  const handleNumberPokemonPerPageChange = (event: any) => {
    setNumberPokemonPerPage(parseInt(event.target.value));
    dispatch(setPage(1));
  };

  const dispatch = useDispatch();

  return (
    <div className="pokemon-list__container">
      <h2>Pokemons List ({data?.pokemonsCount})</h2>
      <div>
        {/* pokemons numbers per page */}
        Pokemons per page:
        <select
          className="pokemon-list__pokemons-per-page"
          value={numberPokemonPerPage}
          onChange={handleNumberPokemonPerPageChange}
        >
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="30">30</option>
          <option value="40">40</option>
          <option value="50">50</option>
        </select>
      </div>

      {isFetching && <div className="pokemon-list__alert-message">Loading...</div>}
      {isError && <div className="pokemon-list__alert-message">Error</div>}
      {!isFetching && !isError && (
        <div>
          {/* pokemons list */}
          <table className="pokemon-list__list-container">
            <tbody>
              {currentData?.pokemonsList.map((pokemon: PokemonItem) => (
                <tr
                  key={pokemon.index}
                  onClick={() => setSelectedPokemon(pokemon.index)}
                  className={
                    selectedPokemonIndex === pokemon.index
                      ? "pokemon-list__active-pokemon"
                      : ""
                  }
                >
                  <td>{pokemon.index}</td>
                  <td>{pokemon.name}</td>
                </tr>
              ))}
            </tbody>
          </table>
          {/* paginator */}
          <div className="pokemon-list__paginator">
            <button
              onClick={() => dispatch(previousPage())}
              disabled={!currentData?.previousUrl}
            >
              previous
            </button>
            {pageIndex}
            <button
              onClick={() => dispatch(nextPage())}
              disabled={!currentData?.nextUrl}
            >
              next
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PokemonsList;
