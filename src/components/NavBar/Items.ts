import { Home, Store, Images } from 'lucide-react';
import HomePage from '@/pages/Home/Home.tsx';
import ServicesPage from '@/pages/Services/Services.tsx';
import GalleryPage from '@/pages/Gallery/Gallery.tsx';
const items = [
  {
    title: 'Home',
    url: '/',
    icon: Home,
    element: HomePage
  },
  {
    title: 'Services',
    url: '/services',
    icon: Store,
    element: ServicesPage
  },
  {
    title: 'Gallery',
    url: '/gallery',
    icon: Images,
    element: GalleryPage
  },
]

export default items;