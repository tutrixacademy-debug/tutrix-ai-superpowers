import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Rocket } from "lucide-react";

const FloatingButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button after scrolling past hero section (approximately after 100vh)
      if (window.pageYOffset > window.innerHeight) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
      }`}
    >
      <Button
        onClick={scrollToTop}
        size="lg"
        className="h-16 w-16 rounded-full bg-gradient-primary hover:bg-gradient-secondary shadow-glow hover:shadow-float transition-all duration-300 group"
        aria-label="Start Learning"
      >
        <div className="flex flex-col items-center justify-center">
          <Rocket className="h-6 w-6 text-white group-hover:animate-bounce" />
          <span className="text-xs font-semibold text-white mt-1">Start</span>
        </div>
      </Button>
    </div>
  );
};

export default FloatingButton;