"use client"
import AllCourses from "@/components/AllCourses";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import { Instructor } from "@/components/Instructors";
import { Testimonial } from "@/components/Testimonial";
import { Webinars } from "@/components/Webinars";
import { WhyUs } from "@/components/WhyUs";


export default function Home() {

  return (
    <main className=" min-h-screen antialiased">
      <HeroSection />
      <AllCourses />
      <WhyUs />
      <Testimonial />
      <Webinars />
      <Instructor />
      <Footer />
    </main>
  );
}
