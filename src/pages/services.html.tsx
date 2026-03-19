import { useHayc } from '../hayc/config-context';
import { ServicesSection } from '../components/ServicesSection';
import { CtaSection } from '../components/CtaSection';
import { FeaturesSection } from '../components/FeaturesSection';

export default function ServicesPage() {
  const { t } = useHayc();

  return (
    <div className="min-h-screen">
      <ServicesSection />
      <CtaSection />
      <FeaturesSection />
    </div>
  );
}