import React, { useContext, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { ContactModalContext } from '@/contexts/ContactModalContext'

import { Navbar, Menu } from './styles'

interface HeaderProps {
    pathA: string;
    pathB: string;
}

export default function Header({ pathA, pathB }: HeaderProps) {
    const { toggleContactModal } = useContext(ContactModalContext)

    const [isDropped, setIsDropped] = useState(false)
    const routeA = pathA === 'about' ? '/about' : '/'
    const routeB = pathB === 'login' ? '/signin' : '/'

    return (
        <Navbar>
            <Image
               onClick={()=>setIsDropped(!isDropped)}
               width={45}
               height={45}
               src='/drawable/app_logo.svg'
               objectFit='contain'
               alt="Logo"
            />
            <Menu style={{top: isDropped ? '0' : '-330px'}}>
                <li onClick={()=>setIsDropped(false)}><Link href={routeB}>{pathB}</Link></li>
                <li onClick={()=>setIsDropped(false)}><Link href={routeA}>{pathA}</Link></li>
                <li onClick={()=>{
                    toggleContactModal()
                    setIsDropped(false)
                }}>contact</li>
            </Menu>
        </Navbar>
    )
}
