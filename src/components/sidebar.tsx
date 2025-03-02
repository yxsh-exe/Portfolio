import { Home, User, Folder, FileText, Mail, ExternalLink, Linkedin, Github, Twitter, X, ArrowRight } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface SidebarItemProps {
  icon?: React.ElementType;
  imageSrc?: string;
  label: string;
  href: string;
  isActive?: boolean;
  external?: boolean;
  onNavigate?: () => void;
}

const SidebarItem = ({ icon: Icon, imageSrc, label, href, isActive, external, onNavigate }: SidebarItemProps) => {
  const handleClick = () => {
    if (onNavigate && !external) {
      onNavigate();
    }
  };

  const LinkComponent = external ? 'a' : Link;
  const linkProps = external 
    ? { href, target: "_blank", rel: "noopener noreferrer", onClick: handleClick } 
    : { to: href, onClick: handleClick };
  
  return (
    <LinkComponent
      {...linkProps}
      className={cn(
        "flex items-center gap-2 px-3 py-2 rounded-md transition-all duration-200 hover:bg-accent",
        isActive ? "bg-accent text-primary font-medium" : "text-foreground/70 hover:text-foreground"
      )}
    >
      {imageSrc ? (
        <img src={imageSrc} alt={label} className="w-6 h-6" />
      ) : Icon && (
        <Icon className="w-6 h-6" />
      )}
      <span>{label}</span>
      {external && <ExternalLink className="w-3 h-3 ml-1 opacity-70" />}
    </LinkComponent>
  );
};

interface SidebarProps {
  className?: string;
  activePath: string;
  onClose?: () => void;
}

export function Sidebar({ className, activePath, onClose }: SidebarProps) {
  const navigationItems = [
    { icon: Home, label: "Home", href: "/", path: "/" },
    { icon: User, label: "About", href: "/about", path: "/about" },
    { icon: Folder, label: "Projects", href: "/projects", path: "/projects" },
    { icon: FileText, label: "Articles", href: "/articles", path: "/articles" },
    { icon: Mail, label: "Contact", href: "/contact", path: "/contact" },
  ].filter(item => item.label !== "Articles");

  const socialItems = [
    { icon: Twitter, label: "Twitter", href: "https://x.com/dev_yash04?t=v5m3QNlyBNnCtq7dsoNaPw&s=09", external: true },
    { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/yash-bansod-b61471268/", external: true },
    { icon: Github, label: "GitHub", href: "https://github.com/yxsh-exe", external: true },
  ].filter(item => item.label !== "YouTube");

  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  return (
    <div className={cn("h-screen flex flex-col border-r bg-background w-full", className)}>
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200">
              <img src="/yash.jpg" alt="Profile" className="w-full h-full object-cover" />
            </div>
            <div className="font-medium">Yash Bansod</div>
          </div>
          
          <button 
            onClick={onClose}
            className="p-1 rounded-md hover:bg-muted md:hidden"
          >
            <X size={20} />
          </button>
        </div>
        
        <nav className="space-y-1">
          {navigationItems.map((item) => (
            <SidebarItem 
              key={item.label}
              icon={item.icon}
              label={item.label}
              href={item.href}
              isActive={item.path === activePath}
              onNavigate={isMobile ? onClose : undefined}
            />
          ))}
        </nav>
        
        <div className="mt-8">
          <h3 className="text-sm font-medium text-muted-foreground mb-2">Socials</h3>
          <div className="space-y-1">
            {socialItems.map((item) => (
              <SidebarItem 
                key={item.label}
                icon={item.icon}
                label={item.label}
                href={item.href}
                external={item.external}
              />
            ))}
          </div>
        </div>
      </div>
      
      <div className="mt-auto p-4 border-t">
        <Button
          onClick={() => {
            window.open("/Yash Bansod.pdf", "_blank");
          }}
          className="w-full bg-white text-black hover:bg-gray-100 transition-all transform hover:scale-105 duration-200"
        >
          Resume
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}