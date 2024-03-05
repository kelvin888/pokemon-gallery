import Image from 'next/image'
import React, { FC } from 'react'
import Fire from "@/assets/images/categories/fire.png"
import Link from 'next/link'
import { CategoryType, PokemonCategoryName } from '@/types/pokemon'
import Skeleton from 'react-loading-skeleton'
import { categoryBackgrounds } from '@/config/categoryBackgrounds'

type Props = {
    category: CategoryType
}

const Category: FC<Props> = ({ category }) => {

    const getCategoryBackground = (categoryName: PokemonCategoryName) => {
        return (categoryBackgrounds as Record<PokemonCategoryName, string>)[categoryName] || "#CCCCCC";
    };
    return (
        <Link href={`/categories/${category.name.toLowerCase()}`}>

            <div style={{ backgroundColor: getCategoryBackground(category.name as PokemonCategoryName) }} className='w-[222px] h-[74px] border text-white font-bold border-primary-500 rounded-lg flex items-center px-4 cursor-pointer'>
                <div className='flex gap-3 items-center'>
                    <Image src={Fire} alt='pokemon category' />
                    <div>{category.name}</div>
                </div>
            </div>
        </Link>
    )
}

export default Category