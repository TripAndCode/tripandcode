"use client";
import Link from 'next/link'
import Image from 'next/image'
import { ReactNode, useState } from "react";
import logo from '../public/images/tripcode-high-resolution-logo-color-on-transparent-background.png'

import { usePathname } from 'next/navigation';

function NavLink({ to, children }: { to: string, children: ReactNode }) {
    return <a href={to} className={`mx-4`}>
        {children}
    </a>
}

// ORDER OF ITESM - HOME, ABOUT, BLOG
const MenuItems = ({ pathName }: { pathName: string | null }) => {
    if (pathName === "/about") {
        return (
            <>
                <NavLink to="/">
                    HOME
                </NavLink>
                <NavLink to="/blog">
                    BLOG
                </NavLink>
            </>
        )
    } else if (pathName === "/blog") {
        return (
            <>
                <NavLink to="/">
                    HOME
                </NavLink>
                <NavLink to="/about">
                    ABOUT
                </NavLink>
            </>
        )
    }
    return (
        <>
            <NavLink to="/about">
                ABOUT
            </NavLink>
            <NavLink to="/blog">
                BLOG
            </NavLink>

        </>
    )
}

function MobileNav({ open, pathName }: { open: boolean, pathName: string | null }) {
    return (
        <div className={`absolute z-50 top-0 left-0 h-screen w-screen bg-white transform ${open ? "-translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out filter drop-shadow-md `}>
            <div className="flex items-center justify-center filter drop-shadow-md bg-white h-20"> {/*logo container*/}
                <Link href="">
                    <Image src={logo} width={150} height={150} style={{
                        width: '100%',
                        height: 'auto',
                    }} className="mx-auto" alt={'trip&code'} />
                </Link>
            </div>
            <div className="flex flex-col ml-4 my-7">
                <MenuItems pathName={pathName} />
            </div>
        </div>
    )
}



export default function Navbar() {
    const [open, setOpen] = useState(false)
    const pathName = usePathname()

    return (
        <nav className="flex bg-white my-2 h-20 items-center">
            <MobileNav open={open} pathName={pathName} />
            <div className="w-2/12 ">
                <Link href='/'>
                    <Image src={logo} alt={'trip&code_logo'} />
                </Link>
            </div>
            <div className="w-10/12 flex justify-end pr-6 md:pr-0">

                <div className="z-50 flex relative w-8 h-8 flex-col justify-between items-center md:hidden" onClick={() => {
                    setOpen(!open)
                }}>
                    {/* hamburger button */}
                    <span className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${open ? "rotate-45 translate-y-3.5" : ""}`} />
                    <span className={`h-1 w-full bg-black rounded-lg transition-all duration-300 ease-in-out ${open ? "w-0" : "w-full"}`} />
                    <span className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${open ? "-rotate-45 -translate-y-3.5" : ""}`} />
                </div>

                <div className="hidden md:flex">
                    <MenuItems pathName={pathName} />
                </div>
            </div>
        </nav>
    )
}


