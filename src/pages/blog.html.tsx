import { useHayc } from '../hayc/config-context';
import BlogListingSection from '../components/BlogListingSection';

export default function BlogPage() {
  const { t, config } = useHayc();

  return (
    <div className="min-h-screen bg-white">
      <BlogListingSection />
    </div>
  );
}