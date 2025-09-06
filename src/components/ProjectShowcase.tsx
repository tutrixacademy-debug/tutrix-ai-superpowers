import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Play } from "lucide-react";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

const ProjectShowcase = () => {
  const projects = [
    {
      id: 1,
      title: "AI Chatbot That Actually Helps",
      description: "Build a smart assistant that can answer questions, help with homework, and even tell jokes. Your friends will think you're a tech genius!",
      image: project1,
      tags: ["Beginner", "Chat AI", "Fun"],
      duration: "Week 1-2"
    },
    {
      id: 2,
      title: "Unbeatable Game AI",
      description: "Create an AI that can play and win games. Start with tic-tac-toe, then move to more complex strategy games. Challenge your friends to beat your AI!",
      image: project2,
      tags: ["Intermediate", "Game AI", "Strategy"],
      duration: "Week 3-4"
    },
    {
      id: 3,
      title: "Smart Home Controller",
      description: "Build an AI system that can control lights, music, and temperature in your room. The future of homes starts with your project!",
      image: project3,
      tags: ["Advanced", "IoT", "Automation"],
      duration: "Week 5-6"
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-24 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-10 right-10 w-32 sm:w-64 h-32 sm:h-64 bg-gradient-primary rounded-full blur-3xl opacity-10 animate-float" />
      <div className="absolute bottom-20 left-10 w-24 sm:w-48 h-24 sm:h-48 bg-gradient-secondary rounded-full blur-2xl opacity-15 animate-float" style={{ animationDelay: '3s' }} />
      
      <div className="container mx-auto px-4 sm:px-6 relative">
        
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            Build Projects That{" "}
            <span className="text-gradient-secondary">Blow Minds</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
            Forget boring homework. These are the AI projects you'll actually want to show off.
            Each one is designed to be impressive, practical, and fun to build.
          </p>
          
          {/* Quick stats */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 lg:gap-8 text-center">
            <div className="bg-gradient-card px-4 sm:px-6 py-2 sm:py-3 rounded-full">
              <div className="text-xl sm:text-2xl font-bold text-primary">6</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Weeks</div>
            </div>
            <div className="bg-gradient-card px-4 sm:px-6 py-2 sm:py-3 rounded-full">
              <div className="text-xl sm:text-2xl font-bold text-secondary">3</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Major Projects</div>
            </div>
            <div className="bg-gradient-card px-4 sm:px-6 py-2 sm:py-3 rounded-full">
              <div className="text-xl sm:text-2xl font-bold text-accent">∞</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Possibilities</div>
            </div>
          </div>
        </div>

        {/* Project Cards */}
        <div className="space-y-12 sm:space-y-16">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className={`grid lg:grid-cols-2 gap-8 sm:gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              
              {/* Project Image */}
              <div className={`relative ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="relative group">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="rounded-2xl shadow-card glow-on-hover w-full transition-transform group-hover:scale-105"
                  />
                  
                  {/* Overlay with play button */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 right-2 sm:right-4">
                      <Button variant="hero" size="lg" className="w-full text-sm sm:text-base">
                        <Play className="h-4 w-4 sm:h-5 sm:w-5" />
                        <span className="hidden sm:inline">See How It's Built</span>
                        <span className="sm:hidden">View Demo</span>
                      </Button>
                    </div>
                  </div>
                  
                  {/* Floating badge */}
                  <div className="absolute -top-2 sm:-top-3 -right-2 sm:-right-3 bg-gradient-secondary px-2 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-bold text-secondary-foreground">
                    {project.duration}
                  </div>
                </div>
              </div>

              {/* Project Details */}
              <div className={`space-y-4 sm:space-y-6 ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-2 sm:px-3 py-1 bg-muted text-muted-foreground text-xs sm:text-sm rounded-full font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                {/* Title */}
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
                  {project.title}
                </h3>
                
                {/* Description */}
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
                
                {/* Action buttons */}
                <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
                  <Button variant="hero" size="lg" className="group text-sm sm:text-base">
                    Start This Project
                    <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                  
                  <Button variant="ghost_glow" size="lg" className="text-sm sm:text-base">
                    <Github className="h-4 w-4" />
                    View Code
                  </Button>
                </div>
                
                {/* Progress indicator */}
                <div className="bg-muted rounded-full h-2 overflow-hidden">
                  <div 
                    className="h-full bg-gradient-primary transition-all duration-1000"
                    style={{ width: `${(index + 1) * 33.33}%` }}
                  />
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Project {index + 1} of 3 • Complete in {project.duration}
                </p>
                
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-20">
          <div className="bg-gradient-card p-8 rounded-2xl shadow-float max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Start Building Your{" "}
              <span className="text-gradient-primary">AI Portfolio?</span>
            </h3>
            <p className="text-muted-foreground mb-6">
              These projects will be yours to keep, showcase, and build upon. 
              Your future self will thank you for starting today.
            </p>
            <Button variant="cta" size="hero" className="group">
              Get Started for ₹199
              <ExternalLink className="h-6 w-6 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ProjectShowcase;