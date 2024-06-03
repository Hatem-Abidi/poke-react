import {
  PokemonPage,
  PokemonItem,
  PokemonItemRaw,
  PokemonPageRaw,
} from "./PokemonsList";
import { toCapitalize } from "../../Utils/Utils";

const pokemonListMapper = (pokemonList: PokemonPageRaw): PokemonPage => ({
  pokemonsCount: pokemonList.count,
  nextUrl: pokemonList.next,
  previousUrl: pokemonList.previous,
  pokemonsList: pokemonList.results.map(
    (pokemon: PokemonItemRaw): PokemonItem => {
      const urlSplitted = pokemon.url.split("/");
      const index = parseInt(urlSplitted[urlSplitted.length - 2]);
      return {
        name: toCapitalize(pokemon.name),
        index,
      };
    }
  ),
});

export default pokemonListMapper;
