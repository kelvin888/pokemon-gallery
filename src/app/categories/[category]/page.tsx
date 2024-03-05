"use client"
import Image from 'next/image';
import React from 'react';
import SearchIcon from "@/assets/images/icons/search.svg";
import Pokemon from '@/components/pokemon/Pokemon';
import Link from 'next/link';
import BackButton from '@/components/button/BackButton';
import { usePokemonFilter } from '@/hooks/usePokemonFilter';
import { Pagination } from '@/components/pagination/PaginationComponent';
import Skeleton from 'react-loading-skeleton';
import PaginationInfo from '@/components/pagination/PaginationInfo';

export default function Page({ params }: { params: { category: string } }) {
    const pageSize = 25;
    const {
        searchText, handleSearch, currentPage, totalPages, handlePageChange, paginatedItems, loading, allPokemons
    } = usePokemonFilter(params.category, pageSize);

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
                    onChange={(e) => handleSearch(e.target.value)}
                />
            </div>

            <div className='mt-6 flex flex-wrap gap-4'>
                {loading ?
                    <Skeleton
                        count={12}
                        containerClassName='flex flex-wrap gap-2'
                        className='items-center !w-[170px] !h-[170px] hover:border hover:border-primary-500 rounded-xl' /> :
                    paginatedItems?.length === 0 ?
                        <div>No Pokémon found.</div>
                        :
                        paginatedItems?.map((pokemon: any) => (
                            <div key={pokemon.pokemon.name}>
                                <Pokemon pokemon={pokemon.pokemon} category={params.category.toUpperCase()} />
                            </div>
                        ))
                }
            </div>

            {paginatedItems && paginatedItems.length > 0 &&
                <div className='flex justify-between items-center mt-6'>
                    <PaginationInfo pagination={{ currentPage, pageSize, totalPages, totalElements: allPokemons?.length ?? 0 }} />
                    <Pagination pagination={{ currentPage, pageSize, totalPages, totalElements: paginatedItems.length, handlePageChange }} showOnSmallScreen={true} />
                </div>
            }
        </div>
    );
}
