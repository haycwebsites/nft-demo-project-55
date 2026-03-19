import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import IndexPage from './pages/index.html';
import AboutPage from './pages/about.html';
import BlogPage from './pages/blog.html';
import BlogDetailsPage from './pages/blogdetails.html';
import ContactPage from './pages/contact.html';
import ServicesPage from './pages/services.html';

const router = createBrowserRouter([
  {
    path: '/',
    element: <IndexPage />,
  },
  {
    path: '/about',
    element: <AboutPage />,
  },
  {
    path: '/blog',
    element: <BlogPage />,
  },
  {
    path: '/blog/:id',
    element: <BlogDetailsPage />,
  },
  {
    path: '/contact',
    element: <ContactPage />,
  },
  {
    path: '/services',
    element: <ServicesPage />,
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}