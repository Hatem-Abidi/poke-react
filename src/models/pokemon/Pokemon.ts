export interface Pokemon {
  name: string;
  height: number;
  weight: number;
  types: Array<string>;
}

export interface PokemonRaw {
  name: string;
  height: number;
  weight: number;
  types: Array<PokemonTypeRaw>;
}

export interface PokemonTypeRaw {
  type: { name: string };
}
