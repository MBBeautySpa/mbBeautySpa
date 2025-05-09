import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Link } from 'react-router';
const NavBar = () => {
  return (
    <NavigationMenu className="bg-pink-500 text-white min-w-full justify-items-center">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuLink>
            <Link to="/" className="hover:text-pink-300">
              Home
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink>
            <Link to="/about" className="hover:text-pink-300">
              About
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink>
            <Link to="/services" className="hover:text-pink-300">
              Services
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink>
            <Link to="/gallery" className="hover:text-pink-300">
              Gallery
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default NavBar;