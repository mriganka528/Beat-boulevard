"use client"
import * as React from "react"
import webinarsData from "@/data/music_webinars.json";
import { Spotlight } from "./ui/Spotlight";
import { motion } from "framer-motion";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
interface Webinars {
    id: number;
    title: string,
    description: string,
    slug: string,
    isFeatured: boolean
}
export function Webinars() {
    const featured_webinars = webinarsData.featuredWebinars.filter((webinars: Webinars) => webinars.isFeatured)
    return (
        <>
            <Spotlight fill="white" className="left-20" />
            <motion.div
                initial={{ opacity: 0.0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.3,
                    duration: 0.8,
                    ease: "easeInOut",
                }} className="flex flex-col min-h-screen gap-y-10 pt-14 pb-20 px-10 justify-center items-center">
                <div className='flex text-center flex-col justify-center align-middle gap-4'>
                    <p className='text-lg text-teal-600 font-semibold tracking-wide uppercase antialiased' > FEATURED WEBINARS</p>
                    <p className=' text-3xl leading-8 font-extrabold tracking-tight sm:text-4xl'>Enhance Your Musical Journey</p>
                </div>
                <Carousel className="w-full max-w-xs ">
                    <CarouselContent>
                        {featured_webinars.map((webinars: Webinars) =>
                        (
                            <CarouselItem key={webinars.id}>
                                <div className=" w-full relative max-w-xs">
                                    <div className="absolute  inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
                                    <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 min-h-[18rem] overflow-hidden rounded-2xl flex flex-col justify-end items-start">
                                        <div className="h-5 w-5 rounded-full border flex items-center justify-center mb-4 border-gray-500">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth="1.5"
                                                stroke="currentColor"
                                                className="h-2 w-2 text-gray-300"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
                                                />
                                            </svg>
                                        </div>
                                        <div>
                                            <h1 className="font-bold text-xl text-white mb-4 relative z-50">
                                                {webinars.title}
                                            </h1>

                                            <p className="font-normal text-base text-slate-500 mb-4 relative z-50">
                                                {webinars.description}
                                            </p>
                                            <p className=" font-medium  pb-4 text-sm text-slate-400 mb-4 relative z-50">
                                                {webinars.slug}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </motion.div>
        </>
    )
}
