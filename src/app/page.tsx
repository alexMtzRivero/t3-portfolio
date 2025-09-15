import React from "react";
import { Hero } from "./_components/Hero";
import { About } from "./_components/About";
import { Skills } from "./_components/Skills";
import { Experience } from "./_components/Experience";
import { Projects } from "./_components/Projects";
import { Contact } from "./_components/Contact";
import { Footer } from "./_components/Footer";
import { navItems, skillCategories, experiences, projects, contactMethods } from "../data";
import { Navigation } from "./_components/Navigation";


export default function HomePage() {

  return (
    <div className="min-h-screen bg-secondary-50 grid-pattern">
      <Navigation navItems={navItems} />
      <Hero />
      <About />
      <Skills skillCategories={skillCategories} />
      <Experience experiences={experiences} />
      <Projects projects={projects} />
      <Contact contactMethods={contactMethods} />
      <Footer />
    </div>
  );
}