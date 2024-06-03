import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "../../state/store";
import {
  nextPage,
  previousPage,
  setPage,
} from "../../state/pokemonsList/pokemonsListSlice";
import { useGetPokemonsListQuery } from "../../services/PokemonApi";
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
  const { data, isError, isLoading, isSuccess } = useGetPokemonsListQuery({
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
      <h2>Pokemons List ({isSuccess && data.pokemonsCount})</h2>
      {isLoading && <div>loading</div>}
      {isError && <div>error</div>}
      {isSuccess && (
        <div>
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
          {/* pokemons list */}
          <table className="pokemon-list__list-container">
            {data.pokemonsList.map((pokemon: PokemonItem) => (
              <tr
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
          </table>
          {/* paginator */}
          <div className="pokemon-list__paginator">
            <button
              onClick={() => dispatch(previousPage())}
              disabled={!data.previousUrl}
            >
              previous
            </button>
            {pageIndex}
            <button
              onClick={() => dispatch(nextPage())}
              disabled={!data.nextUrl}
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
