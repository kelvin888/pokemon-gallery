import Image from 'next/image'
import React from 'react'
import PokemonBanner from "@/assets/images/pokemon-banner.png"


const page = () => {
    return (
        <div className='pt-8'>
            <Image src={PokemonBanner} alt='pokemon banner' />

            <div className='text-center font-bold text-xl my-8'>Pikachu</div>

            <div className='text-lg font-bold mb-8'>Electric • 1.04 • 13.2 lbs</div>

            <div className='flex flex-col gap-4'>
                <div className='flex justify-between'>
                    <div className='text-brown-900'>National No.</div>
                    <div className='text-black'>025</div>
                </div>
                <div className='flex justify-between'>
                    <div className='text-brown-900'>National No.</div>
                    <div className='text-black'>025</div>
                </div>
                <div className='flex justify-between'>
                    <div className='text-brown-900'>National No.</div>
                    <div className='text-black'>025</div>
                </div>
                <div className='flex justify-between'>
                    <div className='text-brown-900'>National No.</div>
                    <div className='text-black'>025</div>
                </div>
            </div>

            <div className='text-lg font-bold my-8'>Catch Rate</div>
            <div>percentage bar here</div>

            <div className='text-lg font-bold my-8'>Base Stats</div>


            <div className='text-lg font-bold my-8'>Effort Values Earned</div>



            <div className='text-lg font-bold my-8'>Gender</div>


            <div className='text-lg font-bold my-8'>Egg Groups</div>


            <div className='text-lg font-bold my-8'>Training</div>


            <div className='text-lg font-bold my-8'>Base Friendship</div>


            <div className='text-lg font-bold my-8'>Pokédex Color</div>


        </div>
    )
}

export default page