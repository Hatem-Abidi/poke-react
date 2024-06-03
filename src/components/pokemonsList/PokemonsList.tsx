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
    <div>
      <h2>Pokemons List:</h2>
      {isLoading && <div>loading</div>}
      {isError && <div>error</div>}
      {isSuccess && (
        <div>
          <div>
            {/* pokemons numbers per page */}
            <select
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
          {data.pokemonsList.map((pokemon: PokemonItem) => (
            <>
              <button onClick={() => setSelectedPokemon(pokemon.index)}>
                {pokemon.name}
              </button>
              <br />
            </>
          ))}
          <br />
          {/* paginator */}
          <div>
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
