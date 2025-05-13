import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { useIsMobile } from '@/hooks/use-mobile.ts';
import AppNavbar from './AppNavbar.tsx';
import AppSidebar from './AppSidebar.tsx';
const Nav = ({ children }: { children: React.ReactNode }) => {
  const isMobile = useIsMobile();
  if (isMobile) {
    return (
      <SidebarProvider className='z-1'>
        <AppSidebar />
        <main>
          <SidebarTrigger />
          {children}
        </main>
    </SidebarProvider>

  );
  }
  return (
    <div className="z-1">
      <AppNavbar />
      {children}
    </div>

);
}

export default Nav