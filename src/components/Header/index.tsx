import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Navbar, Menu } from './styles'

interface HeaderProps {
    pathA: string;
    pathB: string;
}

export default function Header({ pathA, pathB }: HeaderProps) {
    const [isDropped, setIsDroppped] = useState(false)
    const routeA = pathA === 'about' ? '/about' : '/'
    const routeB = pathB === 'login' ? '/signin' : '/'

    return (
        <Navbar>
            <Image
               onClick={()=>setIsDroppped(!isDropped)}
               width={45}
               height={45}
               src='/drawable/app_logo.svg'
               objectFit='contain'
            />
            <Menu style={{top: isDropped ? '0' : '-330px'}}>
                <li><Link href={routeB}>{pathB}</Link></li>
                <li><Link href={routeA}>{pathA}</Link></li>
                <li>contact</li>
            </Menu>
        </Navbar>
    )
}
