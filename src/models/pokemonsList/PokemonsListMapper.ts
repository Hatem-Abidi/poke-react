import {
  PokemonPage,
  PokemonItem,
  PokemonItemRaw,
  PokemonPageRaw,
} from "./PokemonsList";

const pokemonListMapper = (pokemonList: PokemonPageRaw): PokemonPage => ({
  nextUrl: pokemonList.next,
  previousUrl: pokemonList.previous,
  pokemonsList: pokemonList.results.map((pokemon: PokemonItemRaw): PokemonItem => {
    const urlSplitted = pokemon.url.split("/");
    const index = parseInt(urlSplitted[urlSplitted.length - 2]);
    return {
      name: pokemon.name,
      index,
    };
  }),
});

export default pokemonListMapper;
