"use client"
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import BackButton from '@/components/button/BackButton';
import { pokemonKeys } from '@/constants/queryKeys';
import { useQuery } from '@tanstack/react-query';
import pokemonService from '@/services/pokemonService';
import Skeleton from 'react-loading-skeleton';
import PokemonBanner from "@/assets/images/pokemon-banner.png"
import Abilities from './Abilities';
import Stats from './Stats';


const Pokemon = ({
    params,
    searchParams,
}: {
    params: { pokemon: string };
    searchParams: { [key: string]: string | string[] | undefined };
}) => {
    const { data: pokemonData, isLoading, isFetching } = useQuery({
        queryKey: [pokemonKeys.GET_POKEMON_BY_ID, params.pokemon],
        queryFn: async () => {
            const data = await pokemonService.getPokemonsByname(params.pokemon);
            return data.data;
        },
    });

    const renderDetail = (label: string, value: React.ReactNode) => (
        <div className='flex justify-between'>
            <div className='text-brown-900'>{label}</div>
            <div className='text-black'>{value}</div>
        </div>
    );

    const loading = isLoading || isFetching;

    return (
        <div>
            <Link href={searchParams.category ? `/categories/${searchParams?.category}` : '/'}>
                <BackButton label='Back to category' />
            </Link>

            {isLoading ? (
                <Skeleton height={218} />
            ) : (
                <div className='relative'>
                    <Image src={PokemonBanner} alt='pokemon banner' />
                    <div className='absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center'>
                        <div className='text-center font-bold text-4xl text-white shadow-lg'>{pokemonData?.name}</div>
                    </div>
                </div>
            )}

            <div className='flex flex-col gap-4 mt-8'>
                {renderDetail('National No.', loading ? <Skeleton width={100} /> : pokemonData?.id)}
                {renderDetail('Type', loading ? <Skeleton width={100} /> : pokemonData?.types[0].type.name ?? '')}
                {renderDetail('Weight', loading ? <Skeleton width={100} /> : <span>{pokemonData?.weight} kg</span>)}
                {renderDetail('Height', loading ? <Skeleton width={100} /> : <span>{pokemonData?.height} kg</span>)}
            </div>

            <div className='text-lg font-bold mt-8 mb-4'>Ability</div>
            <div className='flex gap-3'>
                <Abilities abilities={pokemonData?.abilities} loading={loading} />
            </div>

            <div className='text-lg font-bold my-8'>Base Stats</div>
            <div className='flex flex-wrap'>
                <Stats stats={pokemonData?.stats} loading={loading} />
            </div>
        </div>
    );
};

export default Pokemon;
