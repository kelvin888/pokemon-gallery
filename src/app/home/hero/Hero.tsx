import React from 'react'

const Hero = () => {
    return (
        <div className='bg-hero-background h-[480px] flex items-center justify-center'>
            <div className='flex flex-col items-center'>
                <div className='text-white text-5xl font-black'>Welcome to the world of Pokémon</div>
                <div className='bg-primary-900/40 shadow-lg font-bold text-white px-4 py-2 rounded-2xl mt-4'>Choose a category below to explore</div>
            </div>
        </div>
    )
}

export default Hero