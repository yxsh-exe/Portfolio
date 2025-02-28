
import { Home, User, Folder, FileText, Mail, ExternalLink, Linkedin, Github, Youtube, Twitter } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/theme-toggle";

interface SidebarItemProps {
  icon: React.ElementType;
  label: string;
  href: string;
  isActive?: boolean;
  external?: boolean;
}

const SidebarItem = ({ icon: Icon, label, href, isActive, external }: SidebarItemProps) => {
  const LinkComponent = external ? 'a' : Link;
  const linkProps = external ? { href, target: "_blank", rel: "noopener noreferrer" } : { to: href };
  
  return (
    <LinkComponent
      {...linkProps}
      className={cn(
        "flex items-center gap-2 px-3 py-2 rounded-md transition-all duration-200 hover:bg-accent",
        isActive ? "bg-accent text-primary font-medium" : "text-foreground/70 hover:text-foreground"
      )}
    >
      <Icon className="w-5 h-5" />
      <span>{label}</span>
      {external && <ExternalLink className="w-3 h-3 ml-1 opacity-70" />}
    </LinkComponent>
  );
};

interface SidebarProps {
  className?: string;
  activePath: string;
}

export function Sidebar({ className, activePath }: SidebarProps) {
  const navigationItems = [
    { icon: Home, label: "Home", href: "/", path: "/" },
    { icon: User, label: "About", href: "/about", path: "/about" },
    { icon: Folder, label: "Projects", href: "/projects", path: "/projects" },
    { icon: FileText, label: "Articles", href: "/articles", path: "/articles" },
    { icon: Mail, label: "Contact", href: "/contact", path: "/contact" },
  ];

  const socialItems = [
    { icon: Twitter, label: "Twitter", href: "https://twitter.com", external: true },
    { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com", external: true },
    { icon: Github, label: "GitHub", href: "https://github.com", external: true },
    { icon: Youtube, label: "YouTube", href: "https://youtube.com", external: true },
  ];

  return (
    <div className={cn("w-64 h-screen fixed flex flex-col border-r bg-background", className)}>
      <div className="p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200">
            <img src="/placeholder.svg" alt="Profile" className="w-full h-full object-cover" />
          </div>
          <div>
            <h2 className="font-semibold text-lg leading-none">John Doe</h2>
            <p className="text-muted-foreground text-sm">Developer</p>
          </div>
        </div>
        
        <nav className="space-y-1">
          {navigationItems.map((item) => (
            <SidebarItem 
              key={item.label}
              icon={item.icon}
              label={item.label}
              href={item.href}
              isActive={item.path === activePath}
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
        <a 
          href="#" 
          className="flex items-center justify-center gap-2 w-full p-2 rounded-md border bg-primary text-primary-foreground hover:bg-primary/90 transition-all"
        >
          Read Resume
        </a>
      </div>
    </div>
  );
}
