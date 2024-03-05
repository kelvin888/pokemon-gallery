import Image from 'next/image'
import React, { FC } from 'react'
import { PokemonType } from '@/types/pokemon'
import Link from 'next/link'

type Props = {
    pokemon: PokemonType
    category: string
}
const Pokemon: FC<Props> = ({ pokemon, category }) => {

    return (
        <Link href={`/pokemon/${pokemon?.name?.toLowerCase()}?category=${category.toLowerCase()}`} passHref>
            <div className='flex flex-col items-center w-[170px] gap-4 hover:border hover:border-primary-500 rounded-xl p-2 bg-gray-400' data-cy="pokemon">
                <Image width={150} height={150} src={`https://img.pokemondb.net/sprites/home/normal/${pokemon.name}.png`} alt='pokemon' />

            </div>
            <div className='text-black text-lg font-medium my-2'><span className='font-bold'>{pokemon.name}</span></div>
        </Link>
    )
}

export default Pokemon