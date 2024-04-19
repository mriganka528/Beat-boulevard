"use client"
import React from 'react'
import { useEffect, useState } from "react";
import { Sidebar } from "./Sidebar";
import Navbar from "./Navbar";
function Header() {
    const [isMobile, setIsMobile] = useState<boolean>(false);
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 700);
        }
        setIsMobile(window.innerWidth <= 700);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [isMobile])
    return (

        (isMobile === false) ? <Navbar /> : <Sidebar />
    )
}
export default Header
