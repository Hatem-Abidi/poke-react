import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface PokemonsListState {
  pageIndex: number;
}

const initialState: PokemonsListState = {
  pageIndex: 1,
};

const pokemonsListSlice = createSlice({
  name: "pokemonsList",
  initialState,
  reducers: {
    // set page index
    setPage: (state, action: PayloadAction<number>) => {
      if (action.payload <= 1) {
        state.pageIndex = 1;
      } else {
        state.pageIndex = action.payload;
      }
    },
    nextPage: (state) => {
      state.pageIndex++;
    },
    previousPage: (state) => {
      if (state.pageIndex <= 1) {
        state.pageIndex = 1;
      } else {
        state.pageIndex--;
      }
    },
  },
});

export const { setPage, nextPage, previousPage } = pokemonsListSlice.actions;
export default pokemonsListSlice.reducer;
