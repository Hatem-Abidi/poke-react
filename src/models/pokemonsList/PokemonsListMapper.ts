import {
  PokemonPage,
  PokemonItem,
  PokemonItemRaw,
  PokemonPageRaw,
} from "./PokemonsList";
import { toCapitalize } from "../../utils/utils";

const pokemonsListMapper = (pokemonsList: PokemonPageRaw): PokemonPage => ({
  pokemonsCount: pokemonsList.count,
  nextUrl: pokemonsList.next,
  previousUrl: pokemonsList.previous,
  pokemonsList: pokemonsList.results.map(
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

export default pokemonsListMapper;
