"use client";
import { BackgroundBeams } from "./ui/background-beams";
import { CardStack } from "./ui/card-stack";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export function Testimonial() {
    return (
        <div className=" dark:bg-slate-900">
            <motion.div initial={{ opacity: 0.0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{
                delay: 0.3, duration:
                    0.8, ease: "easeInOut",
            }} className=" py-20 w-full rounded-md relative flex flex-col items-center justify-center antialiased">
                <div className="max-w-2xl mx-auto p-4">
                    <div className="px-3 flex flex-col justify-center gap-y-8 sm:gap-y-7 items-center ">
                        <h2 className="text-3xl antialiased font-bold text-center z-10">Hear our Harmony: Voices of success</h2>
                        <p className="text-center font-normal dark:text-teal-400 max-w-23 sm:max-w-[32rem] text-wrap text-base ">
                            Tune into the testimonials of our users as they sing praises for our music course app. Discover how our platform has harmonized with their musical aspirations.
                        </p>
                    </div>
                    <div className="h-[35rem] flex flex-col  justify-center items-center w-full sm:pr-7 ">
                        <CardStack items={CARDS} />
                    </div>
                </div>
                <BackgroundBeams />
            </motion.div>
        </div>
    );
}

// Small utility to highlight the content of specific section of a testimonial content
export const Highlight = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <span
            className={cn(
                "font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-500 px-1 py-0.5",
                className
            )}
        >
            {children}
        </span>
    );
};

const CARDS = [
    {
        id: 0,
        name: "Alex Johnson",
        designation: "Guiter Student",
        content: (
            <p>
                Joining the music school <Highlight>transformed my understanding of music</Highlight> and helped me to truly discover my own sound. The instructors are world-class!
            </p>
        ),
    },
    {
        id: 1,
        name: "Samantha Lee",
        designation: "Piano Student",
        content: (
            <p>
                The community and support at this school are unmatched. <Highlight> I&lsquo;ve grown not just as a pianist, but also as a performer </Highlight>, thanks to their comprehensive approach.
            </p>
        ),
    },
    {
        id: 2,
        name: "Emily Taylor",
        designation: "Violin Student",
        content: (
            <p>
                As a violinist, finding the right mentor can be challenging, but this school <Highlight> matched me with a teacher who truly understands my goals and challenges club.</Highlight>
            </p>
        ),
    },
    {
        id: 3,
        name: "Michael Chen",
        designation: "Vocal Student",
        content: (
            <p>
                This school offered me the tools and confidence to take my singing to the next level.<Highlight>
                    I&lsquo;m endlessly grateful for the personalized coaching.</Highlight>
            </p>
        ),
    },
    {
        id: 4,
        name: "Chris Morales",
        designation: "Music Production Studen",
        content: (
            <p>
                The production courses here <Highlight> opened my eyes to the intricacies of music production. </Highlight>Highly recommend for any aspiring producers!
            </p>
        ),
    },
];
