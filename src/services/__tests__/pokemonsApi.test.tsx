import React from "react";
import type { ReactNode } from "react";
import { Provider } from "react-redux";
import { renderHook } from "@testing-library/react";

import { store } from "../../state/store";
import { useGetPokemonQuery, useGetPokemonsListQuery } from "../pokemonsApi";

function Wrapper(props: { children: ReactNode }) {
  return <Provider store={store}>{props.children}</Provider>;
}

describe("render Pokemon APIs", () => {
  it("renders hook getPokemon", () => {
    const { result } = renderHook(() => useGetPokemonQuery(1), {
      wrapper: Wrapper,
    });
    expect(result.current).toMatchObject({
      status: "pending",
      endpointName: "getPokemon",
      isLoading: true,
      isSuccess: false,
      isError: false,
      isFetching: true,
    });
  });

  it("renders hook getPokemonsList", () => {
    const { result } = renderHook(
      () => useGetPokemonsListQuery({ offset: 0, limit: 10 }),
      {
        wrapper: Wrapper,
      }
    );
    expect(result.current).toMatchObject({
      status: "pending",
      endpointName: "getPokemonsList",
      isLoading: true,
      isSuccess: false,
      isError: false,
      isFetching: true,
    });
  });
});
