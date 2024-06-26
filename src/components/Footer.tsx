"use client"
import React from "react";
import { motion } from "framer-motion"
import Link from "next/link";
function Footer() {
    return (
        <footer className=" dark:bg-neutral-950 dark:text-gray-400 py-16">
            <motion.div initial={{ opacity: 0.0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.3,
                    duration: 0.8,
                    ease: "easeInOut",
                }}>
                <div
                    className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8">
                    <div>
                        <h2 className="dark:text-white text-lg font-semibold mb-4">About Us</h2>
                        <p className="mb-4">
                            Music School is a premier institution dedicated to teaching the art
                            and science of music. We nurture talent from the ground up,
                            fostering a vibrant community of musicians.
                        </p>
                    </div>
                    <div>
                        <h2 className=" dark:text-white text-lg font-semibold mb-4">Quick Links</h2>
                        <ul>
                            <li>
                                <Link
                                    href={'/'} as={'/'}
                                    className=" hover:text-gray-950 dark:hover:text-white transition-colors duration-300"
                                >
                                    Home
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href={'/courses'} as={'/courses'}
                                    className=" hover:text-gray-950 dark:hover:text-white transition-colors duration-300"
                                >
                                    Courses
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href={"/contactus"} as={'/contactus'}
                                    className="hover:text-gray-950 dark:hover:text-white transition-colors duration-300"
                                >
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="dark:text-white text-lg font-semibold mb-4">Follow Us</h2>
                        <div className="flex space-x-4">
                            <Link
                                href="/"
                                className=" hover:text-gray-950 dark:hover:text-white transition-colors duration-300"
                            >
                                Facebook
                            </Link>
                            <Link
                                href="/"
                                className=" hover:text-gray-950 dark:hover:text-white transition-colors duration-300"
                            >
                                Twitter
                            </Link>
                            <Link
                                href="/"
                                className=" hover:text-gray-950 dark:hover:text-white transition-colors duration-300"
                            >
                                Instagram
                            </Link>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-white text-lg font-semibold mb-4">Contact Us</h2>
                        <p>Guwahati, Assam, India</p>
                        <p>Guwahati 01</p>
                        <p>Email: info@musicschool.com</p>
                        <p>Phone: (123) 456-7890</p>
                    </div>
                </div>
                <p className="text-center text-xs pt-8">© 2024 Music School. All rights reserved.</p>
            </motion.div>
        </footer>
    )
}

export default Footer