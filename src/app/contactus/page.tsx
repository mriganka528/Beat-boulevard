'use client';
import React, { FormEvent, useState } from 'react';
import { AuroraBackground } from '@/components/ui/aurora-background';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
function MusicSchoolContactUs() {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log('Submitted:', { email, message });
    };

    return (
        <motion.div initial={{ opacity: 0.0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
                delay: 0.3,
                duration: 0.8,
                ease: "easeInOut",
            }} className=' scroll-smooth '>

            <AuroraBackground className='h-full'>

                <div className="min-h-screen px-4 sm:px-1 py-12 pt-36 relative">

                    <div className="max-w-2xl mx-auto p-4 relative z-10">
                        <h1 className="text-3xl md:text-7xl text-center font-sans font-bold mb-8 dark:text-white">
                            Contact Us
                        </h1>
                        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-base text-center">
                            We&apos;re here to help with any questions about our courses,
                            programs, or events. Reach out and let us know how we can assist you
                            in your musical journey.
                        </p>
                        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Your email address"
                                className="rounded-lg border bg-neutral-100 dark:text-neutral-100 ring-2 ring-neutral-800 dark:border-neutral-800 focus:ring-2 focus:ring-slate-700 w-full p-4 dark:bg-neutral-900   dark:placeholder:text-neutral-600"
                                required
                            />
                            <textarea
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                placeholder="Your message"
                                className="rounded-lg border dark:text-neutral-100 bg-neutral-100  ring-2 ring-neutral-800 dark:border-neutral-800 focus:ring-2 focus:ring-slate-700 w-full p-4 dark:bg-neutral-900   dark:placeholder:text-neutral-600"
                                rows={7}
                                required
                            ></textarea>
                            <div className='w-full flex justify-center'>

                                <Button variant={'outline'} size={'lg'} className='text-base ring-2 ring-neutral-800 dark:text-white dark:bg-neutral-800 sm:my-4 pt-5 pb-6 ' type='submit'>Submit Here</Button>
                            </div>
                        </form>
                    </div>
                </div>
            </AuroraBackground>
        </motion.div>
    );
}

export default MusicSchoolContactUs;