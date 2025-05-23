import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';

import { Link } from 'react-router';

import items from '@/components/NavBar/Items.ts';

const NavigationBar = () => {
  return (
    <NavigationMenu className="bg-pink-400 text-white min-w-full justify-items-center z-10 ">
      <NavigationMenuList>
        {items.map((item) => (
          <NavigationMenuItem key={item.title}>
            <NavigationMenuLink asChild>
              <Link to={item.url} className="hover:text-pink-300">
                <span>{item.title}</span>
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  )

}

export default NavigationBar;