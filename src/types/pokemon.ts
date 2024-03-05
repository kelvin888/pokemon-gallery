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

export type PokemonByCatResponseType = {
    pokemon: PokemonType;
}

export type PokemonByCategoryResponse = {
    data: {
        pokemon: PokemonByCatResponseType[];
    };
}

export type PokemonByIdResponseType = {
    data: PokemonType;
}

export type PokemonByNameResponse = {
    data: {
        id: number,
        name: string,
        weight: number,
        height: number,
        types: {
            type: {
                name: string,
                url: string
            }
        }[],
        sprites: {
            front_shiny: string
        },
        abilities: {
            ability: {
                name: string
            }
        }[],
        stats: {
            base_stat: number,
            stat: {
                name: string
            }
        }[]
    }
}
