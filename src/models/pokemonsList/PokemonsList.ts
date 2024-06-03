export interface PokemonPage {
  pokemonsCount: number;
  nextUrl?: string;
  previousUrl?: string;
  pokemonsList: PokemonsList;
}

export type PokemonsList = Array<PokemonItem>;

export interface PokemonItem {
  name: string;
  index: number;
}

export interface PokemonPageRaw {
  count: number;
  next?: string;
  previous?: string;
  results: PokemonsListRaw;
}

export type PokemonsListRaw = Array<PokemonItemRaw>;

export interface PokemonItemRaw {
  name: string;
  url: string;
}
