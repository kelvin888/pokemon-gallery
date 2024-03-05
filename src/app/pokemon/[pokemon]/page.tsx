"use client"
import Image from 'next/image'
import React from 'react'
import PokemonBanner from "@/assets/images/pokemon-banner.png"
import Link from 'next/link'
import BackButton from '@/components/button/BackButton'
import { pokemonKeys } from '@/constants/queryKeys'
import { useQuery } from '@tanstack/react-query'
import pokemonService from '@/services/pokemonService'
import Skeleton from 'react-loading-skeleton'

export default function Pokemon({
    params,
    searchParams,
}: {
    params: { pokemon: string }
    searchParams: { [key: string]: string | string[] | undefined }
}) {

    const { data: pokemonData, isLoading } = useQuery({
        queryKey: [pokemonKeys.GET_POKEMON_BY_ID, params.pokemon],
        queryFn: async () => {
            const data = await pokemonService.getPokemonsByname(params.pokemon)
            return data.data
        },
    });

    return (
        <div>
            <Link href={searchParams.category ? `/categories/${searchParams?.category}` : '/'}>
                <BackButton label='Back to category' />
            </Link>


            {isLoading ? <Skeleton height={218} />
                : <div className='relative'>
                    <Image src={PokemonBanner} alt='pokemon banner' />
                    <div className='absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center'>
                        <div className='text-center font-bold text-4xl text-white shadow-lg'>{pokemonData?.name}</div>
                    </div>
                </div>}


            <div className='flex flex-col gap-4 mt-8'>
                <div className='flex justify-between'>
                    <div className='text-brown-900'>National No.</div>
                    <div className='text-black'> {isLoading ? <Skeleton width={100} /> : pokemonData?.id}</div>
                </div>
                <div className='flex justify-between'>
                    <div className='text-brown-900'>Type</div>
                    <div className='text-black'>{isLoading ? <Skeleton width={100} /> : pokemonData?.types[0].type.name ?? ""}</div>
                </div>
                <div className='flex justify-between'>
                    <div className='text-brown-900'>Weight</div>
                    <div className='text-black'>{isLoading ? <Skeleton width={100} /> : <span>{pokemonData?.weight} kg</span>}</div>
                </div>
                <div className='flex justify-between'>
                    <div className='text-brown-900'>Height</div>
                    <div className='text-black'>{isLoading ? <Skeleton width={100} /> : <span>{pokemonData?.height} kg</span>} </div>
                </div>
            </div>

            <div className='text-lg font-bold mt-8 mb-4'>Ability</div>
            <div className='flex gap-3'>
                {pokemonData?.abilities.map(ability =>
                    <div
                        key={ability.ability.name}
                        className='bg-primary-300 rounded-xl px-4 h-8 flex items-center justify-center'
                    >
                        {isLoading ? <Skeleton width={100} /> : ability.ability.name}</div>
                )}
            </div>

            <div className='text-lg font-bold my-8'>Base Stats</div>
            <div className='flex flex-wrap'>
                {pokemonData?.stats.map(stat =>
                    <div key={stat.stat.name} className='border-y border-y-brown-900/20 w-[49%] mb-4 py-4'>
                        <div className='text-brown-900'>{isLoading ? <Skeleton width={100} /> : stat.stat.name}</div>
                        <div>{isLoading ? <Skeleton width={100} /> : stat.base_stat}</div>
                    </div>
                )}
            </div>

        </div>
    )
}


