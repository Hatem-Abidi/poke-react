export interface Pokemon {
  id: number;
  name: string;
  height: number;
  weight: number;
  types: Array<string>;
  image: string;
}

export interface PokemonRaw {
  id: number;
  name: string;
  height: number;
  weight: number;
  types: Array<PokemonTypeRaw>;
  sprites: {
    other: {
      "official-artwork": {
        front_default: string;
      };
    };
  };
}

export interface PokemonTypeRaw {
  type: { name: string };
}
