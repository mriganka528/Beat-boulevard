"use client";
import React from "react";
import { AnimatedTooltip } from "./ui/animated-tooltip";
import instructors from "@/data/music_instructors.json";
import { LampContainer } from "./ui/lamp";
import { motion } from "framer-motion"
import { AuroraBackground } from "./ui/aurora-background";
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
        <>

            <motion.div
                initial={{ opacity: 0.0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.3,
                    duration: 0.8,
                    ease: "easeInOut",
                }} className="relative">
                <AuroraBackground>

                    <div className="flex flex-col justify-center items-center space-y-20 ">
                        <div>
                            <p className="text-2xl antialiased md:text-3xl lg:text-5xl dark:text-gray-200 font-bold inter-var text-center">
                                Meet Our Instructors
                            </p>
                            <p className="text-base md:text-lg mt-4 dark:text-gray-200 font-normal inter-var text-center">
                                Discover the talented professionals who will guide your musical journey
                            </p>
                        </div>
                        <div className="flex flex-row items-center justify-center mb-10 w-full">
                            <AnimatedTooltip items={music_instructor} />
                        </div>
                    </div>
                </AuroraBackground >
            </motion.div>
        </>
    );
}
