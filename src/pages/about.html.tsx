import { useHayc } from '../hayc/config-context';
import BreadcrumbSection from '../components/BreadcrumbSection';
import AboutSection from '../components/AboutSection';
import CTASection from '../components/CTASection';
import CounterSection from '../components/CounterSection';

export default function AboutPage() {
  const { config } = useHayc();

  return (
    <div className="min-h-screen bg-white">
      <BreadcrumbSection />
      <AboutSection />
      <CTASection />
      <CounterSection />
    </div>
  );
}