import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import pokemonMapper from "../models/pokemon/PokemonMapper";
import pokemonsListMapper from "../models/pokemonsList/PokemonsListMapper";

const POKEAPI_BASE_URL = "https://pokeapi.co/api/v2";

export const pokemonsApi = createApi({
  reducerPath: "pokemonsApi",
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
      transformResponse: pokemonsListMapper,
    }),
  }),
});

export const { useGetPokemonQuery, useGetPokemonsListQuery } = pokemonsApi;
