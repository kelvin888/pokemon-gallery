import { pokemonRepository } from "@/api/pokemonRepository";

const pokemonService = {
  getPokemonCategories: async () => {
    return await pokemonRepository.getAllPokemonCategories();
  },
  getPokemonsByCategory: async (category: string) => {
    return await pokemonRepository.getPokemonsByCategory(category);
  },
};

export default pokemonService;
