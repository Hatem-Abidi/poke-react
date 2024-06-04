import React from "react";
import type { ReactNode } from "react";
import { Provider } from "react-redux";
import { render } from "@testing-library/react";

import PokemonsList from "../PokemonsList";
import { store } from "../../../state/store";

function Wrapper(props: { children: ReactNode }) {
  return <Provider store={store}>{props.children}</Provider>;
}

describe("render PokemonsList", () => {
  it("render PokemonsList", () => {
    const component = render(<PokemonsList />, { wrapper: Wrapper });
    expect(component).toMatchSnapshot();
  });
});
