import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, ArrowUp } from "lucide-react";
import tutrixLogo from "@/assets/tutrix-logo.png";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-16 bg-gradient-to-t from-muted/20 to-background border-t border-border/50">
      <div className="container mx-auto px-6">
        
        {/* Main footer content */}
        <div className="grid lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand column */}
          <div className="lg:col-span-2 space-y-6">
            <img 
              src={tutrixLogo} 
              alt="Tutrix" 
              className="h-12 w-auto"
            />
            <p className="text-muted-foreground max-w-md leading-relaxed">
              Empowering the next generation of AI creators with live instruction, 
              hands-on projects, and constant support. Join thousands of students 
              building the future with AI.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="hero" size="lg" className="group">
                Start Your Journey - ₹199
              </Button>
            </div>
          </div>

          {/* Quick links */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold">Quick Links</h3>
            <nav className="space-y-3">
              {[
                "About Tutrix",
                "Our Instructors", 
                "Student Projects",
                "Success Stories",
                "Parent Info",
                "FAQ"
              ].map((link) => (
                <a 
                  key={link}
                  href="#" 
                  className="block text-muted-foreground hover:text-primary transition-colors"
                >
                  {link}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact info */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold">Get in Touch</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary" />
                <span className="text-muted-foreground">hello@tutrix.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary" />
                <span className="text-muted-foreground">+91 99999 88888</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5" />
                <span className="text-muted-foreground">
                  Building the future<br />
                  One student at a time
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="pt-8 border-t border-border/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            
            {/* Copyright */}
            <div className="text-muted-foreground text-sm">
              © 2024 Tutrix. All rights reserved. Made with ❤️ for young creators.
            </div>

            {/* Legal links */}
            <div className="flex items-center gap-6 text-sm">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Refund Policy
              </a>
            </div>

            {/* Back to top */}
            <Button 
              variant="ghost" 
              size="icon"
              onClick={scrollToTop}
              className="group"
            >
              <ArrowUp className="h-4 w-4 transition-transform group-hover:-translate-y-1" />
            </Button>
          </div>
        </div>

        {/* Final encouragement */}
        <div className="text-center mt-8 pt-6 border-t border-border/30">
          <p className="text-sm text-muted-foreground">
            🚀 Your AI journey starts with a single click. Ready to build the future?
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;