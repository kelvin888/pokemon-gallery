import React, { FC, ReactNode } from 'react'
import Header from '../../components/header/Header'
import Container from '@/components/container/Container'
type Props = {
    children: ReactNode
}
const layout: FC<Props> = ({ children }) => {
    return (
        <div>
            <Header />
            <Container>
                {children}
            </Container>
        </div>
    )
}

export default layout