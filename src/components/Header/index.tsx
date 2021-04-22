import React, { useState } from 'react'
import Image from 'next/image'
// import Link from 'next/link'
import { Navbar, Menu } from './styles'

export default function Header() {
    const [isDropped, setIsDroppped] = useState(false)

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
                <li>login</li>
                <li>about</li>
                <li>contact</li>
            </Menu>
        </Navbar>
    )
}
