import React from 'react';
import Skeleton from 'react-loading-skeleton';

const Stats = ({ stats, loading }: { stats: { base_stat: number; stat: { name: string } }[] | undefined; loading: boolean; }) => (
    <>
        {loading ? (
            [...Array(6)].map((_, index) => (
                <div key={index} className='border-y border-y-brown-900/20 w-[49%] mb-4 py-4'>
                    <div className='text-brown-900'><Skeleton width={100} /></div>
                    <div><Skeleton width={100} /></div>
                </div>
            ))
        ) : (
            stats?.map((stat) => (
                <div key={stat.stat.name} className='border-y border-y-brown-900/20 w-[49%] mb-4 py-4'>
                    <div className='text-brown-900'>{stat.stat.name}</div>
                    <div>{stat.base_stat}</div>
                </div>
            ))
        )}
    </>
);

export default Stats;
