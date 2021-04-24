import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Navbar, Menu } from './styles'

interface HeaderProps {
    name: string;
}

export default function Header({ name }: HeaderProps) {
    const [isDropped, setIsDroppped] = useState(false)
    const route = name === 'about' ? '/about' : '/'

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
                <li><Link href="/signin">login</Link></li>
                <li><Link href={route}>{name}</Link></li>
                <li>contact</li>
            </Menu>
        </Navbar>
    )
}
