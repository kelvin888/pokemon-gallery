import React, { FC, ReactNode } from 'react'
import Header from '../../components/header/Header'
import Container from '@/components/container/Container'
import { ChevronLeft } from 'lucide-react'
import Link from 'next/link'

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