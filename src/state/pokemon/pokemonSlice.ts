import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface PokemonState {
  selectedPokemonIndex: number | undefined;
}

const initialState: PokemonState = {
  selectedPokemonIndex: undefined,
};

const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    // set selected pokemon index
    setSelectedPokemonIndex: (
      state,
      action: PayloadAction<number | undefined>
    ) => {
      state.selectedPokemonIndex = action.payload;
    },
  },
});

export const { setSelectedPokemonIndex } = pokemonSlice.actions;
export default pokemonSlice.reducer;
