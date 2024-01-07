"use client";
import AboutMe from "@/components/AboutMe";
import ContactPage from "@/components/ContactPage";
import Hero from "@/components/Hero";
import Technologies from "@/components/Technologies";
import Works from "@/components/Works";
import dynamic from "next/dynamic";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-black">
      <div className="container mx-auto px-5 sm:px-10 md:px-14 lg:px-16 xl:px-20 2xl:px-24 py-4 mt-60">
        <Hero />
        <AboutMe />
        <Technologies />
        <Works />
        <ContactPage />
      </div>
    </main>
  );
}
