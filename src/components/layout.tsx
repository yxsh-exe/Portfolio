
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Sidebar } from "@/components/sidebar";
import { ThemeToggle } from "@/components/theme-toggle";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const location = useLocation();
  const [mounted, setMounted] = useState(false);
  
  // Used to prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="flex min-h-screen">
      <Sidebar activePath={location.pathname} />
      
      <div className="flex-1 ml-64">
        <header className="sticky top-0 z-10 bg-background/80 backdrop-blur-md border-b h-14 flex items-center justify-end px-6">
          <ThemeToggle />
        </header>
        
        <main className="p-8">
          {children}
        </main>
      </div>
    </div>
  );
}
