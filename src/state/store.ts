import { configureStore } from "@reduxjs/toolkit";

import { pokemonsApi } from "../services/pokemonsApi";
import pokemonReduce from "./pokemon/pokemonSlice";
import pokemonsListReducer from "./pokemonsList/pokemonsListSlice";

export const store = configureStore({
  reducer: {
    pokemonsList: pokemonsListReducer,
    pokemon: pokemonReduce,
    [pokemonsApi.reducerPath]: pokemonsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pokemonsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
