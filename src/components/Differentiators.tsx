import { Video, Wrench, MessageCircle } from "lucide-react";

const Differentiators = () => {
  const features = [
    {
      icon: Video,
      title: "LIVE Interactive Sessions",
      description: "Learn directly from experts in real-time",
      details: "No boring pre-recorded videos. Join live sessions where you can ask questions, get instant feedback, and learn alongside other creators your age.",
      color: "primary"
    },
    {
      icon: Wrench,
      title: "Full Guidance for Hands-On Projects",
      description: "Build a portfolio of impressive, real-world AI projects",
      details: "Don't just learn theory—create actual AI applications. Build chatbots, games, and smart tools that solve real problems and impress your friends.",
      color: "secondary"
    },
    {
      icon: MessageCircle,
      title: "24/7 Constant Support",
      description: "Never get stuck. Expert help is always available",
      details: "Stuck on a coding problem at 11 PM? Our AI-powered support system and expert mentors ensure you always have someone to turn to.",
      color: "accent"
    }
  ];

  return (
    <section className="py-24 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
      
      <div className="container mx-auto px-6 relative">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            What Makes Tutrix{" "}
            <span className="text-gradient-primary">Unstoppable</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're not just another online course. We're your AI learning superpower—
            combining live instruction, hands-on building, and constant support.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const colorMap = {
              primary: "text-primary bg-primary/10 border-primary/20",
              secondary: "text-secondary bg-secondary/10 border-secondary/20",
              accent: "text-accent bg-accent/10 border-accent/20"
            };
            
            return (
              <div 
                key={index}
                className="group bg-gradient-card p-8 rounded-2xl shadow-card hover:shadow-float transition-all duration-300 animate-slide-up border border-border/50 glow-on-hover"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Icon */}
                <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 border-2 ${colorMap[feature.color as keyof typeof colorMap]} transition-all group-hover:scale-110`}>
                  <Icon className="h-8 w-8" />
                </div>
                
                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold group-hover:text-gradient-primary transition-all">
                    {feature.title}
                  </h3>
                  
                  <p className="text-lg font-medium text-muted-foreground">
                    {feature.description}
                  </p>
                  
                  <p className="text-foreground/80 leading-relaxed">
                    {feature.details}
                  </p>
                </div>

                {/* Floating Badge */}
                <div className="absolute -top-3 -right-3 bg-gradient-primary px-3 py-1 rounded-full text-xs font-bold text-primary-foreground opacity-0 group-hover:opacity-100 transition-opacity">
                  Exclusive
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center mt-20">
          <div className="inline-flex items-center gap-4 bg-gradient-card p-6 rounded-2xl shadow-card">
            <div className="flex -space-x-2">
              <div className="w-10 h-10 rounded-full bg-gradient-primary border-2 border-background" />
              <div className="w-10 h-10 rounded-full bg-gradient-secondary border-2 border-background" />
              <div className="w-10 h-10 rounded-full bg-gradient-primary border-2 border-background" />
            </div>
            <div className="text-left">
              <p className="font-medium">Join 1000+ students already building with AI</p>
              <p className="text-sm text-muted-foreground">Your next project could change everything</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Differentiators;