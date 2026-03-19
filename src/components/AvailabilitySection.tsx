import { useHayc } from '../hayc/config-context';

export default function AvailabilitySection() {
  const { t, cp, config } = useHayc();
  
  const availability = config.siteConfig.availability;
  
  if (!availability?.title?.en) return null;

  return (
    <div className="availability-section" {...cp('siteConfig.availability')}>
      {/* Availability content goes here */}
    </div>
  );
}