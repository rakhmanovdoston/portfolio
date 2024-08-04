"use client"
import AchievementsSection from "./components/AchievmentSection";
import AboutSection from "./components/AboutSection";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import MyProjects from "./components/MyProjects";

export default function Home() {
  return (
    <main className="min-h-screen scroll-smooth">
      <header>
       <Navbar />
      </header>
      <section>
       <HeroSection />
      </section>
      <AchievementsSection/>
      <AboutSection />
      <MyProjects />
    </main>
  );
}
