import React from 'react'
import Category from './Category/Category'
import { CategoryType } from '@/types/pokemon'

const Categories = () => {

    const categoryes: CategoryType[] = [{
        name: "Fire",
        id: "fire"
    }, {
        name: "Grass",
        id: "grass"
    }]
    return (
        <div>
            <div className='text-xl font-bold'>Categories</div>
            <div className='flex flex-wrap gap-3 mt-7'>
                {categoryes.map(category =>
                    <Category key={category.id} category={category} />
                )}
            </div>
        </div>
    )
}

export default Categories