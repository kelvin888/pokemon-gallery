import React from 'react';
import Skeleton from 'react-loading-skeleton';

const Abilities = ({ abilities, loading }: { abilities: { ability: { name: string } }[] | undefined; loading: boolean; }) => (
    <>
        {loading ? (
            [...Array(3)].map((_, index) => (
                <Skeleton key={index} width={100} className='bg-primary-300 rounded-xl px-4 h-8 flex items-center justify-center' />
            ))
        ) : (
            abilities?.map((ability) => (
                <div key={ability.ability.name} className='bg-primary-300 rounded-xl px-4 h-8 flex items-center justify-center'>
                    {ability.ability.name}
                </div>
            ))
        )}
    </>
);

export default Abilities;
