import Image from 'next/image'
import React, { FC } from 'react'
import Fire from "@/assets/images/pokemon-thumbnail.png"
import { PokemonType } from '@/types/pokemon'
import Link from 'next/link'

type Props = {
    pokemon: PokemonType
}
const Pokemon: FC<Props> = ({ pokemon }) => {
    return (
        <Link href={`/pokemon/${pokemon.name.toLowerCase()}?category=${pokemon.type.toLowerCase()}`} passHref>
            <div className='flex gap-4'>
                <Image width={99} height={56} src={Fire} alt='pokemon' />
                <div>
                    <div className='text-black text-base font-medium'>{pokemon.name}</div>
                    <div className='text-brown-900 text-sm'>Type: {pokemon.type}</div>
                </div>
            </div>
        </Link>
    )
}

export default Pokemon