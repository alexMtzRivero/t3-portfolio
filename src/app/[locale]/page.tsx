import React from "react";
import { Hero } from "./_components/Hero";
import { UnderConstruction } from "./_components/UnderConstruction";
import { StakedViews } from "./_components/StakedViews";
import { Languages } from "./_components/Languages";
import { Contact } from "./_components/Contact";
import { Footer } from "./_components/Footer";
import { Navigation } from "./_components/Navigation";

// Generate static params for all supported locales
export async function generateStaticParams() {
  return [
    { locale: 'en' },
    { locale: 'es' },
    { locale: 'fr' }
  ];
}

export default async function HomePage({
  params: _params
}: {
  params: Promise<{locale: string}>;
}) {
  // const {locale} = await params;
  return (
    <div className="min-h-screen bg-secondary-50 grid-pattern">
      <Navigation />
      <UnderConstruction />
      <Hero />
      <StakedViews />
      <Languages />
      <Contact />
      <Footer />
    </div>
  );
}