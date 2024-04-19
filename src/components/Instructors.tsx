"use client";
import React from "react";
import { AnimatedTooltip } from "./ui/animated-tooltip";
import instructors from "@/data/music_instructors.json";
import { motion } from "framer-motion"
import { Spotlight } from "./ui/Spotlight";
interface Instructor {
    id: number,
    name: string,
    designation: string,
    image: string,
    isAvailable: boolean
}
export function Instructor() {
    const music_instructor = instructors.instructors.filter((instructor: Instructor) => instructor.isAvailable);
    return (
        <div className=" dark:bg-slate-950">
            <motion.div
                initial={{ opacity: 0.0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.3,
                    duration: 0.8,
                    ease: "easeInOut",
                }} className="relative min-h-screen flex justify-center items-center">
                <Spotlight fill="white" className=" top-20 left-20" />
                <div className="flex flex-col justify-center items-center space-y-20 ">
                    <div className="px-9  sm:px-2" >
                        <p className="text-2xl antialiased md:text-3xl lg:text-5xl dark:text-gray-200 font-bold inter-var text-center">
                            Meet Our Instructors
                        </p>
                        <p className="text-base md:px-[16rem]  md:text-lg mt-4 dark:text-gray-200 font-normal inter-var text-center">
                        Craft your professional profile with finesse, spotlighting your musical journey, credentials, and teaching ethos. Immerse learners in your world through an array of mediums from insightful articles and captivating video tutorials to meticulously curated playlists  offering invaluable guidance across genres and skill levels.
                        </p>
                    </div>
                    <div className="flex flex-row items-center justify-center mb-10 w-full">
                        <AnimatedTooltip items={music_instructor} />
                    </div>
                </div>
            </motion.div >
        </div>
    );
}
