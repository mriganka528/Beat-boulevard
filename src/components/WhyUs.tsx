"use client";
import React from "react";
import Image from "next/image";
import { TracingBeam } from "../components/ui/tracing-beam";
import { motion } from "framer-motion";
export function WhyUs() {
    return (
        <motion.div
            initial={{ opacity: 0.0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
                delay: 0.3,
                duration: 0.8,
                ease: "easeInOut",
            }} className=" dark:bg-slate-800 pt-14 pb-10 ">
            <TracingBeam className="px-6">
                <div className="max-w-2xl   mx-auto antialiased  relative">
                    {content.map((item, index) => (
                        <div key={`content-${index}`} className="mb-10 flex flex-col gap-3  text-center align-middle justify-center">

                            <h2 className="text-2xl text-wrap leading-8 font-bold tracking-tight sm:text-4xl">
                                {item.title}
                            </h2>

                            <div className="  flex pt-[1.5rem]  justify-center align-middle  prose prose-sm dark:prose-invert">

                                {item?.image && (
                                    <Image
                                        src={item.image}
                                        alt="blog thumbnail"
                                        height="250"
                                        width="250"
                                        className=" rounded-lg mb-10 object-cover"
                                    />
                                )}
                            </div>
                            <div  >
                                {item.description}
                            </div>
                        </div>
                    ))}
                </div>
            </TracingBeam>
        </motion.div>
    );
}

const content = [
    {
        title: "Discover Your Sound with Us: A Personal Journey in Music Mastery",
        description: (
            <p className="text-base">
                Embark on a musical journey that’s uniquely yours. Our personalized instruction adapts to your individual needs, setting the stage for unparalleled growth and creativity. At our music school, your aspirations meet our dedicated support, creating a harmonious path to mastery.
            </p>
        ),
        image: "/assets/whyus/1.avif",
    },
    {
        title: "Live Feedback & Engagement",
        description: (
            <p className="text-base" >
                Immerse yourself in an interactive learning experience where feedback is immediate, just like real-time changes in a collaborative project. This approach enhances your understanding and mastery of music concepts and performance techniques.
            </p>
        ),
        image:
            "/assets/whyus/2.jpg",
    },
    {
        title: "Cutting-Edge Curriculum",
        description: (
            <p className="text-base">
                Our curriculum is continuously updated to include the latest music education trends and technologies, ensuring you’re always learning with the most current and effective methods. Say goodbye to outdated materials and welcome an education that evolves with the industry.
            </p>
        ),
        image:
            "/assets/whyus/3.jpg",
    },
    {
        title: "Limitless Learning Opportunities",
        description: (
            <p className="text-base">
                With our expansive resource library and dynamic course offerings, you’ll never find yourself without something new to explore. Our platform provides continuous opportunities for growth, ensuring your musical skills are always advancing.
            </p>
        ),
        image:
            "/assets/whyus/4.jpg",
    },
];
