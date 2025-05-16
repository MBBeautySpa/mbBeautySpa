import { Home, Store, Images } from 'lucide-react';
import HomePage from '@/pages/Home/Home.tsx';
import ServicesPage from '@/pages/Services/Services.tsx';
import GalleryPage from '@/pages/Gallery/Gallery.tsx';
const items = [
  {
    title: 'MB Beauty Spa',
    url: '/',
    icon: Home,
    element: HomePage
  },
  {
    title: 'Servicios',
    url: '/services',
    icon: Store,
    element: ServicesPage
  },
  {
    title: 'Galería',
    url: '/gallery',
    icon: Images,
    element: GalleryPage
  },
]

export default items;