import { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Sidebar } from "@/components/sidebar";
import { FlickeringGrid } from "@/components/ui/flickering-grid";
import { Menu } from "lucide-react";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const location = useLocation();
  const navigate = useNavigate();
  const [mounted, setMounted] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const sidebarRef = useRef<HTMLDivElement>(null);
  
  // Used to prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
    
    // Set initial state based on screen size
    const checkMobileView = () => {
      if (window.innerWidth < 768) {
        setIsSidebarOpen(false);
      } else {
        setIsSidebarOpen(true);
      }
    };
    
    checkMobileView();
    window.addEventListener('resize', checkMobileView);
    
    return () => window.removeEventListener('resize', checkMobileView);
  }, []);

  // Close sidebar when route changes (on mobile)
  useEffect(() => {
    if (window.innerWidth < 768) {
      setIsSidebarOpen(false);
    }
  }, [location.pathname]);

  // Handle clicks outside sidebar
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        window.innerWidth < 768 && 
        sidebarRef.current && 
        !sidebarRef.current.contains(event.target as Node) &&
        isSidebarOpen
      ) {
        setIsSidebarOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isSidebarOpen]);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  if (!mounted) {
    return null;
  }

  return (
    <div className="flex min-h-screen relative">
      {/* Mobile sidebar overlay */}
      {isSidebarOpen && window.innerWidth < 768 && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-20"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
      
      {/* Mobile toggle button */}
      {!isSidebarOpen && (
        <button 
          onClick={toggleSidebar}
          className="fixed top-4 left-4 z-40 p-2 bg-primary text-primary-foreground rounded-md md:hidden"
        >
          <Menu size={20} />
        </button>
      )}
      
      {/* Sidebar */}
      <div 
        ref={sidebarRef}
        className={`
          fixed top-0 bottom-0 z-30 transition-all duration-300 bg-background
          w-64 ${isSidebarOpen ? 'left-0' : '-left-64'} 
          md:left-0
        `}
      >
        <Sidebar 
          activePath={location.pathname} 
          onClose={() => setIsSidebarOpen(false)}
        />
      </div>
      
      {/* Main content */}
      <div className={`
        flex-1 relative transition-all duration-300
        md:ml-64
      `}>
        <FlickeringGrid
          className="absolute inset-0 z-0"
          squareSize={5}
          gridGap={5}
          color="#6B7280"
          maxOpacity={0.5}
          flickerChance={0.8}
        />
        <main className="relative z-10 p-4">
          {children}
        </main>
      </div>
    </div>
  );
}