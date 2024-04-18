"use client";
import React from 'react'
import { AuroraBackground } from './ui/aurora-background'
import { motion } from 'framer-motion';
import Link from 'next/link';
function HeroSection() {
    return (
        <AuroraBackground>
            <motion.div
                initial={{ opacity: 0.0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.3,
                    duration: 0.8,
                    ease: "easeInOut",
                }} className="  text-center h-auto md:h-[40rem] relative flex flex-col gap-4 items-center justify-center px-4 pt-12" >
                <div className="text-3xl md:text-7xl font-bold dark:text-white text-center">
                    Master the Art of Music
                </div>
                <div className="text-base md:text-lg dark:text-neutral-300 max-w-lg mx-auto py-4">
                    Dive into our comprehensive music courses and transform your musical journey today. Whether you&lsquo;re a beginner or loking to refine your skills, join us to unlock your true potential.
                </div>
                <Link href={'/courses'} as={'/courses'} className="bg-neutral-950 text-neutral-100 border border-neutral-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group">
                    <span className="bg-neutral-400 shadow-neutral-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
                    Explore Courses
                </Link>
            </motion.div>
        </AuroraBackground>
    )
}

export default HeroSection
