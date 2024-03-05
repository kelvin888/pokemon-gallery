import { pokemonRepository } from "@/api/pokemonRepository";

const pokemonService = {
  getPokemonCategories: async () => {
    return await pokemonRepository.getAllPokemonCategories();
  },
  getPokemonsByCategory: async (category: string) => {
    return await pokemonRepository.getPokemonsByCategory(category);
  },
  getPokemonsByname: async (name: string) => {
    return await pokemonRepository.getPokemonByName(name);
  },
};

export default pokemonService;
