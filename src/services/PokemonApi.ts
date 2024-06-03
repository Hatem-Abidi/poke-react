import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import pokemonMapper from "../models/pokemon/PokemonMapper";
import pokemonListMapper from "../models/pokemonsList/PokemonsListMapper";

const POKEAPI_BASE_URL = "https://pokeapi.co/api/v2";

export const pokemonApi = createApi({
  reducerPath: "pokemonApi",
  baseQuery: fetchBaseQuery({ baseUrl: POKEAPI_BASE_URL }),
  endpoints: (builder) => ({
    /**
     * get pokemon details using the id of the selected pokemon
     * index: number
     */
    getPokemon: builder.query({
      query: (index) => `pokemon/${index}`,
      transformResponse: pokemonMapper,
    }),

    /**
     * get pokemons list
     * params:
     *   offset: number
     *   limit: number
     */
    getPokemonsList: builder.query({
      query: (params) => ({
        url: `pokemon`,
        params,
      }),
      transformResponse: pokemonListMapper,
    }),
  }),
});

export const { useGetPokemonQuery, useGetPokemonsListQuery } = pokemonApi;
