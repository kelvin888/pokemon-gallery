"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import SearchIcon from "@/assets/images/icons/search.svg"
import Pokemon from '@/components/pokemon/Pokemon'
import Link from 'next/link'
import BackButton from '@/components/button/BackButton'
import { pokemonKeys } from '@/constants/queryKeys'
import pokemonService from '@/services/pokemonService'
import { useQuery } from '@tanstack/react-query'
import Skeleton from 'react-loading-skeleton'
import { Pagination, PaginationType } from '@/components/pagination/PaginationComponent'

export default function Page({ params }: { params: { category: string } }) {
    const { data: allPokemons, isLoading } = useQuery({
        queryKey: [pokemonKeys.GET_POKEMONS_BY_CATEGORY, params.category],
        queryFn: async () => {
            const data = await pokemonService.getPokemonsByCategory(params.category)
            return data.data.pokemon
        },
    });

    const [searchText, setSearchText] = useState("");
    const [currentPage, setCurrentPage] = useState(0);
    const pageSize = 10; // Change this according to your requirements

    const handlePageChange = ({ selected }: { selected: number }) => {
        setCurrentPage(selected);
    };

    const filteredPokemons = allPokemons?.filter((pokemon: any) =>
        pokemon.pokemon.name.toLowerCase().includes(searchText.toLowerCase())
    );

    const startIndex = currentPage * pageSize;
    const paginatedPokemons = filteredPokemons?.slice(startIndex, startIndex + pageSize);
    const totalPages = Math.ceil((filteredPokemons?.length ?? 0) / pageSize);


    const pagination: PaginationType = {
        currentPage,
        pageSize,
        totalPages,
        totalElements: filteredPokemons?.length || 0,
        handlePageChange,
    };

    return (
        <div className='py-5'>
            <Link href={`/`}>
                <BackButton label='Back to home' />
            </Link>
            <div className='text-xl font-bold my-4'>
                {params.category.toUpperCase()} Pokemons
            </div>

            <div className='flex items-center h-[48px] bg-primary-300 px-4 rounded-xl text-brown-900'>
                <Image src={SearchIcon} alt='search icon' />
                <input
                    className='bg-primary-300 w-full h-full focus:border-0 focus:ring-0 focus:outline-none text-base ml-4 placeholder-brown-900/50'
                    type="text"
                    placeholder='Search by name or number'
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                />
            </div>

            <div className='mt-6 flex flex-wrap gap-4'>
                {isLoading ?
                    <Skeleton
                        count={12}
                        containerClassName='flex flex-wrap gap-2'
                        className='items-center !w-[218px] !h-[218px] hover:border hover:border-primary-500 rounded-xl' />
                    : <>
                        {paginatedPokemons?.length === 0 ?
                            <div>No Pokémon found.</div>
                            :
                            paginatedPokemons?.map((pokemon: any) => (
                                <div key={pokemon.pokemon.name}>
                                    <Pokemon pokemon={pokemon.pokemon} category={params.category.toUpperCase()} />
                                </div>
                            ))
                        }
                    </>}
            </div>

            <Pagination pagination={pagination} showOnSmallScreen={true} />
        </div>
    )
}
