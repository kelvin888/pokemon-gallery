import React, { FC } from 'react'
import Header from '../../components/header/Header'
import Container from '@/components/container/Container'
type LayoutProps = {
    children: React.ReactNode
}
const layout: FC<LayoutProps> = ({ children }) => {
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