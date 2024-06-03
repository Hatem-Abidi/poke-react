import { toCapitalize } from "../../Utils/Utils";
import { Pokemon, PokemonRaw, PokemonTypeRaw } from "./Pokemon";

const pokemonMapper = (pokemon: PokemonRaw): Pokemon => ({
  id: pokemon.id,
  name: toCapitalize(pokemon.name),
  height: pokemon.height,
  weight: pokemon.weight,
  types: pokemon.types.map((type: PokemonTypeRaw) =>
    toCapitalize(type.type.name)
  ),
  image: pokemon.sprites.other["official-artwork"].front_default,
});

export default pokemonMapper;
