"use client"
import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import pokemonService from '@/services/pokemonService';
import { pokemonKeys } from '@/constants/queryKeys';

export const usePokemonFilter = (category: string, pageSize: number) => {
    const [searchText, setSearchText] = useState('');
    const [currentPage, setCurrentPage] = useState(0);

    const { data: allPokemons, isLoading } = useQuery({
        queryKey: [pokemonKeys.GET_POKEMONS_BY_CATEGORY, category],
        queryFn: async () => {
            const data = await pokemonService.getPokemonsByCategory(category);
            return data.data.pokemon;
        },
    });

    const handleSearch = (text: string) => {
        setSearchText(text);
        setCurrentPage(0);
    };

    const handlePageChange = ({ selected }: { selected: number }) => {
        setCurrentPage(selected);
    };

    const filteredItems = allPokemons?.filter((item: any) =>
        item.pokemon.name.toLowerCase().includes(searchText.toLowerCase())
    );

    const startIndex = currentPage * pageSize;
    const endIndex = Math.min(startIndex + pageSize, filteredItems?.length || 0);
    const paginatedItems = filteredItems?.slice(startIndex, endIndex);
    const totalPages = Math.ceil((filteredItems?.length || 0) / pageSize);

    return {
        searchText,
        handleSearch,
        currentPage,
        totalPages,
        handlePageChange,
        paginatedItems,
        isLoading,
    };
};
