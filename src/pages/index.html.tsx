import React from 'react';
import { HaycProvider } from '../hayc/config-context';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import CounterSection from '../components/CounterSection';
import ServicesSection from '../components/ServicesSection';
import CtaSection from '../components/CtaSection';
import ApartmentPlansSection from '../components/ApartmentPlansSection';
import AvailabilitySection from '../components/AvailabilitySection';
import NeighborhoodsSection from '../components/NeighborhoodsSection';
import TestimonialSection from '../components/TestimonialSection';
import ContactSection from '../components/ContactSection';
import BrandSection from '../components/BrandSection';

function HomePage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <CounterSection />
      <ServicesSection />
      <ServicesSection />
      <CtaSection />
      <ApartmentPlansSection />
      <AvailabilitySection />
      <NeighborhoodsSection />
      <TestimonialSection />
      <ContactSection />
      <BrandSection />
    </div>
  );
}

export default function IndexPage() {
  return (
    <HaycProvider>
      <HomePage />
    </HaycProvider>
  );
}