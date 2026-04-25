'use client';

import { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import ProjectsSection from '@/components/ProjectsSection';
import ArticlesSection from '@/components/ArticlesSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import BackgroundLogos from '@/components/BackgroundLogos';
import AboutSection from '@/components/AboutSection';
import portfolioData from '@/data/portfolio.json';
import LogoStrip from "@/components/LogoStrip";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-x-hidden">
      {/* Background logo strip */}
      <BackgroundLogos scrollY={scrollY} />

      <Navigation />

      <main className="relative z-10">
        <HeroSection data={portfolioData.personal} socials={portfolioData.socials} />

        <LogoStrip />

        <AboutSection skills={portfolioData.skills} personalData={portfolioData.personal} />

        <ProjectsSection projects={portfolioData.projects} />

        <ArticlesSection articles={portfolioData.articles} />

        <ContactSection personalData={portfolioData.personal} socials={portfolioData.socials} />
      </main>

      <Footer personalData={portfolioData.personal} />
    </div>
  );
}
