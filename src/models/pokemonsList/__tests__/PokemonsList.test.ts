import pokemonsListMapper from "../PokemonsListMapper";
import { PokemonPage, PokemonPageRaw } from "../PokemonsList";

const pokemonsListRaw: PokemonPageRaw = {
  count: 1302,
  next: "https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20",
  previous: null,
  results: [
    { name: "bulbasaur", url: "https://pokeapi.co/api/v2/pokemon/1/" },
    { name: "ivysaur", url: "https://pokeapi.co/api/v2/pokemon/2/" },
    { name: "venusaur", url: "https://pokeapi.co/api/v2/pokemon/3/" },
    { name: "charmander", url: "https://pokeapi.co/api/v2/pokemon/4/" },
    { name: "charmeleon", url: "https://pokeapi.co/api/v2/pokemon/5/" },
    { name: "charizard", url: "https://pokeapi.co/api/v2/pokemon/6/" },
    { name: "squirtle", url: "https://pokeapi.co/api/v2/pokemon/7/" },
    { name: "wartortle", url: "https://pokeapi.co/api/v2/pokemon/8/" },
    { name: "blastoise", url: "https://pokeapi.co/api/v2/pokemon/9/" },
    { name: "caterpie", url: "https://pokeapi.co/api/v2/pokemon/10/" },
    { name: "metapod", url: "https://pokeapi.co/api/v2/pokemon/11/" },
    { name: "butterfree", url: "https://pokeapi.co/api/v2/pokemon/12/" },
    { name: "weedle", url: "https://pokeapi.co/api/v2/pokemon/13/" },
    { name: "kakuna", url: "https://pokeapi.co/api/v2/pokemon/14/" },
    { name: "beedrill", url: "https://pokeapi.co/api/v2/pokemon/15/" },
    { name: "pidgey", url: "https://pokeapi.co/api/v2/pokemon/16/" },
    { name: "pidgeotto", url: "https://pokeapi.co/api/v2/pokemon/17/" },
    { name: "pidgeot", url: "https://pokeapi.co/api/v2/pokemon/18/" },
    { name: "rattata", url: "https://pokeapi.co/api/v2/pokemon/19/" },
    { name: "raticate", url: "https://pokeapi.co/api/v2/pokemon/20/" },
  ],
};

const pokemonsList: PokemonPage = {
  pokemonsCount: 1302,
  nextUrl: "https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20",
  previousUrl: null,
  pokemonsList: [
    { name: "Bulbasaur", index: 1 },
    { name: "Ivysaur", index: 2 },
    { name: "Venusaur", index: 3 },
    { name: "Charmander", index: 4 },
    { name: "Charmeleon", index: 5 },
    { name: "Charizard", index: 6 },
    { name: "Squirtle", index: 7 },
    { name: "Wartortle", index: 8 },
    { name: "Blastoise", index: 9 },
    { name: "Caterpie", index: 10 },
    { name: "Metapod", index: 11 },
    { name: "Butterfree", index: 12 },
    { name: "Weedle", index: 13 },
    { name: "Kakuna", index: 14 },
    { name: "Beedrill", index: 15 },
    { name: "Pidgey", index: 16 },
    { name: "Pidgeotto", index: 17 },
    { name: "Pidgeot", index: 18 },
    { name: "Rattata", index: 19 },
    { name: "Raticate", index: 20 },
  ],
};

describe("pokemons list mapper", () => {
  it("should map pokemons list data", () => {
    const mappedData = pokemonsListMapper(pokemonsListRaw);
    expect(mappedData).toMatchObject(pokemonsList);
  });
});
