import { toCapitalize } from "../util";

const rawName: string = "bulbasaur";
const name: string = "Bulbasaur";

describe("capitalize name", () => {
  it("should capitalize pokemon name", () => {
    expect(toCapitalize(rawName)).toEqual(name);
  });
});
