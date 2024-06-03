import { Pokemon, PokemonRaw, PokemonTypeRaw } from "./Pokemon";

const pokemonMapper = (pokemon: PokemonRaw): Pokemon => ({
  name: pokemon.name,
  height: pokemon.height,
  weight: pokemon.weight,
  types: pokemon.types.map((type: PokemonTypeRaw) => type.type.name),
});

export default pokemonMapper;
