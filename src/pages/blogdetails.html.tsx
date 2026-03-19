import React from 'react';
import { HaycProvider } from '../hayc/config-context';
import BreadcrumbSection from '../components/BreadcrumbSection';
import BlogDetailsSection from '../components/BlogDetailsSection';

export default function BlogDetailsPage() {
  return (
    <HaycProvider>
      <div className="min-h-screen">
        <BreadcrumbSection />
        <BlogDetailsSection />
      </div>
    </HaycProvider>
  );
}