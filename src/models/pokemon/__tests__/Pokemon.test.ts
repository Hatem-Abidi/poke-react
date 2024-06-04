import PokemonMapper from "../PokemonMapper";
import { Pokemon, PokemonRaw } from "../Pokemon";

const pokemonRaw: PokemonRaw = {
  height: 7,
  id: 1,
  name: "bulbasaur",
  sprites: {
    other: {
      "official-artwork": {
        front_default:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
      },
    },
  },
  types: [
    {
      type: { name: "grass" },
    },
    {
      type: { name: "poison" },
    },
  ],
  weight: 69,
};

const pokemon: Pokemon = {
  id: 1,
  name: "Bulbasaur",
  height: 7,
  weight: 69,
  types: ["Grass", "Poison"],
  image:
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
};

describe("pokemon mapper", () => {
  it("should map pokemon data", () => {
    const mappedData = PokemonMapper(pokemonRaw);
    expect(mappedData).toMatchObject(pokemon);
  });
});
