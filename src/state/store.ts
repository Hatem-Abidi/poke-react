import { configureStore } from "@reduxjs/toolkit";

import { pokemonApi } from "../services/pokemonApi";
import pokemonReduce from "./pokemon/pokemonSlice";
import pokemonsListReducer from "./pokemonsList/pokemonsListSlice";

export const store = configureStore({
  reducer: {
    pokemonsList: pokemonsListReducer,
    pokemon: pokemonReduce,
    [pokemonApi.reducerPath]: pokemonApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pokemonApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
