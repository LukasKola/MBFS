import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { LayoutProps } from 'types'

export default function Layout({ children }: LayoutProps) {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    )
}
