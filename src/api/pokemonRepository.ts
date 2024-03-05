import { pokemonUrls } from "@/constants/apiUrls/pokemon";
import { get } from "./client";
import {
  PokemonByCategoryResponse,
  PokemonCategoryResponse,
} from "@/types/pokemon";

export const pokemonRepository = {
  getAllPokemonCategories: async (): Promise<PokemonCategoryResponse> => {
    return await get(pokemonUrls.ALL_POKEMON_CATEGORIES);
  },
  getPokemonsByCategory: async (pokemonCategory: string): Promise<PokemonByCategoryResponse> => {
    return await get(`${pokemonUrls.ALL_POKEMON_CATEGORIES}/${pokemonCategory}`);
  }
};
