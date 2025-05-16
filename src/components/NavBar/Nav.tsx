import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { useIsMobile } from '@/hooks/use-mobile.ts';
import AppNavbar from '@/components/NavBar/AppNavbar.tsx';
import AppSidebar from '@/components/NavBar/AppSidebar.tsx';

const Nav = ({ children }: { children: React.ReactNode }) => {
  const isMobile = useIsMobile();
  if (isMobile) {
    return (
      <SidebarProvider>
        <AppSidebar />
        <main className="bg-pink-100 min-h-full min-w-full">
          <SidebarTrigger className="z-10"/>
          <div className="relative z-10">
            {children}
          </div>
        </main>
    </SidebarProvider>

  );
  }
  return (
    <div className="relative">
      <AppNavbar />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}

export default Nav