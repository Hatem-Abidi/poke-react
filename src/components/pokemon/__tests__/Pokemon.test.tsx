import React from "react";
import type { ReactNode } from "react";
import { Provider } from "react-redux";
import { render } from "@testing-library/react";

import Pokemon from "../Pokemon";
import { store } from "../../../state/store";

function Wrapper(props: { children: ReactNode }) {
  return <Provider store={store}>{props.children}</Provider>;
}

describe("render Pokemon", () => {
  it("render Pokemon", () => {
    const component = render(<Pokemon />, { wrapper: Wrapper });
    expect(component).toMatchSnapshot();
  });
});
