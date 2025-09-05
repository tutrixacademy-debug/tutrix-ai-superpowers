import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Zap, Users, Clock } from "lucide-react";
import tutrixLogo from "@/assets/tutrix-logo.png";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-hero opacity-90" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,191,255,0.1),transparent_70%)]" />
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-primary rounded-full blur-xl opacity-60 animate-float" />
      <div className="absolute bottom-32 right-16 w-32 h-32 bg-gradient-secondary rounded-full blur-2xl opacity-40 animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-accent rounded-full blur-lg opacity-50 animate-float" style={{ animationDelay: '4s' }} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column - Content */}
          <div className="space-y-8 text-center lg:text-left">
            
            {/* Logo */}
            <div className="flex justify-center lg:justify-start mb-8">
              <img 
                src={tutrixLogo} 
                alt="Tutrix - AI Education Platform" 
                className="h-16 w-auto"
              />
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                AI is Your New{" "}
                <span className="text-gradient-primary">Superpower</span>
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground max-w-2xl">
                Don't just learn about AI—build with it. Create incredible projects, 
                get live expert guidance, and join the next generation of AI creators.
              </p>
            </div>

            {/* Key Benefits Row */}
            <div className="flex flex-wrap gap-6 justify-center lg:justify-start text-sm">
              <div className="flex items-center gap-2 bg-muted/50 px-4 py-2 rounded-full backdrop-blur-sm">
                <Users className="h-4 w-4 text-primary" />
                <span>Live Interactive Sessions</span>
              </div>
              <div className="flex items-center gap-2 bg-muted/50 px-4 py-2 rounded-full backdrop-blur-sm">
                <Zap className="h-4 w-4 text-accent" />
                <span>Hands-On Projects</span>
              </div>
              <div className="flex items-center gap-2 bg-muted/50 px-4 py-2 rounded-full backdrop-blur-sm">
                <Clock className="h-4 w-4 text-secondary" />
                <span>24/7 Support</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                variant="hero" 
                size="hero"
                className="group"
              >
                Start Your AI Journey - ₹199
                <ArrowRight className="h-6 w-6 transition-transform group-hover:translate-x-1" />
              </Button>
              
              <Button 
                variant="ghost_glow" 
                size="xl"
                className="group"
              >
                <Play className="h-5 w-5" />
                Watch Demo
              </Button>
            </div>

            {/* Social Proof */}
            <div className="text-center lg:text-left">
              <p className="text-sm text-muted-foreground mb-2">
                Trusted by 1000+ young creators
              </p>
              <div className="flex justify-center lg:justify-start">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div 
                      key={i}
                      className="w-8 h-8 rounded-full bg-gradient-primary border-2 border-background"
                    />
                  ))}
                  <div className="w-8 h-8 rounded-full bg-muted border-2 border-background flex items-center justify-center text-xs">
                    +
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column - Hero Image */}
          <div className="relative">
            <div className="relative">
              <img 
                src={heroImage}
                alt="AI-powered learning experience"
                className="rounded-2xl shadow-float glow-on-hover w-full max-w-md lg:max-w-none mx-auto"
              />
              
              {/* Floating UI Elements */}
              <div className="absolute -top-4 -right-4 bg-gradient-card p-4 rounded-xl shadow-card backdrop-blur-sm animate-float">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  <span className="text-sm font-medium">AI Assistant Online</span>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-gradient-card p-4 rounded-xl shadow-card backdrop-blur-sm animate-float" style={{ animationDelay: '1s' }}>
                <div className="text-sm">
                  <div className="font-medium text-accent">Project Completed!</div>
                  <div className="text-muted-foreground">Your AI chatbot is ready</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;