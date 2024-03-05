import Image from 'next/image'
import React from 'react'
import SearchIcon from "@/assets/images/icons/search.svg"
import Pokemon from '@/components/pokemon/Pokemon'
import Link from 'next/link'
import { ChevronLeft } from 'lucide-react'

export default function Page({ params }: { params: { category: string } }) {
    return (
        <div className='py-5'>
            <Link href={`/`}>
                <div className='flex gap-1 my-4'>
                    <ChevronLeft /> <span>Back to home</span>
                </div>
            </Link>
            <div className='text-xl font-bold my-4'>
                {params.category.toUpperCase()} Pokemons
            </div>

            <div className='flex items-center h-[48px] bg-primary-300 px-4 rounded-xl text-brown-900'>
                <Image src={SearchIcon} alt='search icon' />
                <input
                    className='bg-primary-300 w-full h-full focus:border-0 focus:ring-0 focus:outline-none text-base ml-4 placeholder-brown-900'
                    type="text"
                    placeholder='Search by name or number'
                />
            </div>


            <div className='mt-6'>
                <Pokemon pokemon={{ name: "Bulbasaur", type: "Grass" }} />
            </div>

        </div>
    )
}