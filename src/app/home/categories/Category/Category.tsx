import Image from 'next/image'
import React, { FC } from 'react'
import Fire from "@/assets/images/categories/fire.png"
import Link from 'next/link'
import { CategoryType } from '@/types/pokemon'

type Props = {
    category: CategoryType
}

const Category: FC<Props> = ({ category }) => {
    return (
        <Link href={`/categories/${category.name.toLowerCase()}`}>

            <div className='w-[208px] h-[74px] border border-primary-500 rounded-lg flex items-center px-4 hover:bg-primary-500 cursor-pointer'>
                <div className='flex gap-3 items-center'>
                    <Image src={Fire} alt='pokemon category' />
                    <div>{category.name}</div>
                </div>
            </div>
        </Link>
    )
}

export default Category