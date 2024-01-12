"use client";
import AboutMe from "@/components/AboutMe";
import ContactPage from "@/components/ContactPage";
import Hero from "@/components/Hero";
import Jobs from "@/components/Jobs";
import Technologies from "@/components/Technologies";
import Works from "@/components/Works";
export default function Home() {
  // TODO Lenis smooth scroll
  return (
    <main className="flex min-h-screen flex-row bg-black">
      <div className="container mx-auto px-5 sm:px-10 md:px-14 lg:px-16 xl:px-20 2xl:px-24 py-4 mt-40">
        <Hero />
        <AboutMe />
        <Technologies />
        <Jobs />
        <Works />
        <ContactPage />
      </div>
    </main>
  );
}
