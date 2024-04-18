"use client"
import React from 'react'
import courseData from '../data/music_courses.json'
import { motion } from 'framer-motion';
import { HoverEffect } from './ui/card-hover-effect';
import { Spotlight } from './ui/Spotlight';
import { Button } from './ui/button';
import Link from 'next/link';
interface course {
  id: number,
  title: string,
  slug: string,
  description: string,
  price: number,
  instructor: string,
  isFeatured: boolean,
}
function AllCourses() {
  const featuredCourses = courseData.courses.filter((course: course) => course.isFeatured);
  return (
    <>
      <Spotlight
        className="top-[50rem] left-24"
        fill="white"
      />
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }} className='py-12  text-center' >
        <div className='flex flex-col justify-center align-middle gap-5'>
          <p className='text-lg text-teal-600 font-semibold tracking-wide uppercase antialiased' > FEATURED COURSES</p>
          <p className=' text-3xl px-3 leading-8 font-extrabold tracking-tight sm:text-4xl'>Learn From The  Best</p>
        </div>
        <div className="max-w-5xl mx-auto mb-3 px-8">
          <HoverEffect items={featuredCourses} />
        </div>
        <Link href={'/courses'} as={'/courses'} >
          <Button variant={'secondary'} className='px-5 py-5 text-base '>Explore Courses</Button>
        </Link>
      </motion.div>
    </>
  )
}

export default AllCourses
