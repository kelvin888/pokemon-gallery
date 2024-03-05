"use client"
import React from 'react'
import Category from './Category/Category'
import { useQuery } from '@tanstack/react-query';
import { pokemonKeys } from '@/constants/queryKeys';
import pokemonService from '@/services/pokemonService';

const Categories = () => {

    const { data: categories, isLoading, isFetching } = useQuery({
        queryKey: [pokemonKeys.FIND_ALL_CATEGORIES],
        queryFn: pokemonService.getPokemonCategories
    });


    return (
        <div>
            <div className='text-xl font-bold'>Categories</div>
            <div className='flex flex-wrap gap-3 mt-7'>
                {categories && categories.data.results.map(category =>
                    <Category isLoading={isLoading || isFetching} key={category.id} category={category} />
                )}
            </div>
        </div>
    )
}

export default Categories