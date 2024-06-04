import React from "react";
import type { ReactNode } from "react";
import { Provider } from "react-redux";
import { render } from "@testing-library/react";

import PokemonApp from "../PokemonApp";
import { store } from "../../../state/store";

function Wrapper(props: { children: ReactNode }) {
  return <Provider store={store}>{props.children}</Provider>;
}

describe("render PokemonApp", () => {
  it("render PokemonApp", () => {
    const component = render(<PokemonApp />, { wrapper: Wrapper });
    expect(component).toMatchSnapshot();
  });
});
