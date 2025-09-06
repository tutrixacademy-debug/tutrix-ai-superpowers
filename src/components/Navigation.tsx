import { Button } from "@/components/ui/button";
import { Rocket } from "lucide-react";
import tutrixLogo from "@/assets/tutrix-logo.png";

const Navigation = () => {
  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Why AI?", href: "#why-ai" },
    { label: "Courses", href: "#courses" },
    { label: "Teachers", href: "#teachers" },
    { label: "Join Now", href: "#join" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src={tutrixLogo} 
              alt="Tutrix" 
              className="h-8 w-auto"
            />
          </div>

          {/* Navigation Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-foreground/80 hover:text-foreground transition-colors font-medium"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Start Learning Button */}
          <Button 
            variant="hero" 
            size="sm"
            className="group"
          >
            Start Learning!
            <Rocket className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>

        </div>
      </div>
    </nav>
  );
};

export default Navigation;