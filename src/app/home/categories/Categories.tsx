"use client"
import React from 'react';
import Category from './Category/Category';
import { useQuery } from '@tanstack/react-query';
import { pokemonKeys } from '@/constants/queryKeys';
import pokemonService from '@/services/pokemonService';
import Skeleton from 'react-loading-skeleton'; // Import Skeleton component

const Categories = () => {
    const { data: categories, isLoading, isFetching } = useQuery({
        queryKey: [pokemonKeys.FIND_ALL_CATEGORIES],
        queryFn: pokemonService.getPokemonCategories
    });

    return (
        <div>
            <div className='text-xl font-bold'>Categories</div>
            <div className='flex flex-wrap gap-3 mt-7'>
                {isLoading || isFetching ? (
                    <Skeleton containerClassName='flex flex-wrap gap-2' count={12} className='!w-[218px] h-[74px] border border-primary-500 rounded-lg flex items-center px-4 cursor-pointer' />
                ) : (
                    categories && categories.data.results.map(category =>
                        <Category key={category.name} category={category} />
                    )
                )}
            </div>
        </div>
    );
};

export default Categories;
