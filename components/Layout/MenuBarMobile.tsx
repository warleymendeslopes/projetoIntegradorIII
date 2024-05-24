// @/components/Layout/MenuBarMobile.jsimport React from 'react'import Link from 'next/link'import { FiMenu as Icon } from 'react-icons/fi'import { FaUser } from 'react-icons/fa'import logo from '@/img/logo.svg'import { CiMenuBurger } from "react-icons/ci";export default function MenuBarMobile({ setter }: any) {    return (        <nav className="md:hidden z-20 fixed top-0 left-0 right-0 h-[60px] bg-white flex [&>*]:my-auto px-2">            <button                className="text-4xl flex"                onClick={() => {                    setter((oldVal: any) => !oldVal);                }}            >                <CiMenuBurger />            </button>            <Link href="/document" className="mx-auto">                <h1 className={'title-logo'}><span style={{color: 'blue'}}>Doc</span>Control</h1>            </Link>        </nav>    )}