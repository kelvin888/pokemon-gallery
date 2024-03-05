import { ChevronLeft } from 'lucide-react'
import React, { FC } from 'react'
type Props = {
    label: string
}
const BackButton: FC<Props> = ({ label }) => {
    return (
        <div className='flex gap-1 my-4 text-black/50'>
            <ChevronLeft /> <span>{label}</span>
        </div>)
}

export default BackButton