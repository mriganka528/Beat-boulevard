"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarTrigger,
} from "@/components/ui/menubar"
import Image from 'next/image';
import { Theme } from './Theme'
function Navbar() {
    return (
        <>

            <div className='fixed top-0 dark:bg-slate-950/75 shadow-md bg-white z-50 w-[100%] rounded-b-md round flex justify-between items-center py-4 px-7  '>
                <Link href={'/'} as={'/'}>
                    <Image src={'/assets/logo.svg'} alt="Loading" height={'30'} width={'30'} />
                </Link>
                <Menubar>
                    <MenubarMenu>
                        <Link href={'/'} as={'/'}>
                            <MenubarTrigger>Home</MenubarTrigger>
                        </Link>
                    </MenubarMenu>
                    <MenubarMenu>
                        <MenubarTrigger>Our Courses</MenubarTrigger>
                        <MenubarContent>
                            <Link href={'/courses'} as={'/courses'}>
                                <MenubarItem>All Courses</MenubarItem>
                            </Link>
                            <MenubarSeparator />
                            <Link href={'/courses'} as={'/courses'}>
                                <MenubarItem>Basic Music Theory</MenubarItem>
                            </Link>
                            <MenubarSeparator />
                            <Link href={'/courses'} as={'/courses'}>
                                <MenubarItem>Advanced Composition</MenubarItem>
                            </Link>
                            <MenubarSeparator />
                            <Link href={'/courses'} as={'/courses'}>
                                <MenubarItem>Song Writting</MenubarItem>
                            </Link>
                            <MenubarSeparator />
                            <Link href={'/courses'} as={'/courses'}>
                                <MenubarItem>Music Composition</MenubarItem>
                            </Link>
                        </MenubarContent>


                    </MenubarMenu>
                    <MenubarMenu>
                        <Link href={'/contactus'} as={'/contactus'}>
                            <MenubarTrigger>Contact us</MenubarTrigger>
                        </Link>
                    </MenubarMenu>

                </Menubar>
                <div>
                    <Theme />
                </div>
            </div >


        </>


    )
}

export default Navbar
