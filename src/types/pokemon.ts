export type CategoryType = {
    id: string;
    name: string;
}

export type PokemonCategoryName =
  | "normal"
  | "fire"
  | "water"
  | "electric"
  | "grass"
  | "ice"
  | "fighting"
  | "poison"
  | "ground"
  | "flying"
  | "psychic"
  | "bug"
  | "rock"
  | "ghost"
  | "dragon"
  | "dark"
  | "steel"
  | "fairy";

export type PokemonType = {
    name: string;
    type: string;
}

export type PokemonCategoryResponse = {
    data: {
        results: CategoryType[];
    };
}

export type PokemonResponseType = {
    pokemon: PokemonType;
}

export type PokemonByCategoryResponse = {
    data: {
        pokemon: PokemonResponseType[];
    };
}
