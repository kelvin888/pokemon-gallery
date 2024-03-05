import React, { FC, ReactNode } from 'react'

type Props = {
    children: ReactNode
    className?: string
}

const Container: FC<Props> = ({ children, className }) => {
    const containerClassName = `max-w-[928px] px-4 lg:px-0 mx-auto ${className ?? ''}`.trim();

    return (
        <div className={containerClassName}>{children}</div>
    )
}

export default Container
