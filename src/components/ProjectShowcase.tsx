import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Play, Bot, Sparkles, Zap, Wand2, Cpu } from "lucide-react";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

const ProjectShowcase = () => {
  const projects = [
    {
      id: 1,
      title: "AI Chatbot That Actually Understands You",
      description: "Don't just build any chatbot—create an AI that learns your conversation style, remembers context, and gets smarter with every chat. Use cutting-edge AI models with just a few clicks!",
      image: project1,
      tags: ["AI-Powered", "Natural Language", "Smart Learning"],
      duration: "Week 1-2",
      aiFeatures: ["GPT Integration", "Memory System", "Personality Learning"],
      difficulty: "Beginner-Friendly"
    },
    {
      id: 2,
      title: "AI Game Master That Never Loses",
      description: "Build an AI that doesn't just play games—it creates them! Generate infinite game levels, adapt difficulty in real-time, and create NPCs with unique personalities. All with AI tools that make complex logic simple.",
      image: project2,
      tags: ["Game AI", "Procedural Generation", "Adaptive Intelligence"],
      duration: "Week 3-4",
      aiFeatures: ["Dynamic Difficulty", "Procedural Content", "Behavior Trees"],
      difficulty: "AI-Enhanced"
    },
    {
      id: 3,
      title: "Smart Home AI That Predicts Your Needs",
      description: "Create an AI that doesn't wait for commands—it anticipates them! Build a system that learns your routines, predicts what you need, and automates your life. Machine learning made simple with visual AI tools.",
      image: project3,
      tags: ["Predictive AI", "IoT Integration", "Machine Learning"],
      duration: "Week 5-6",
      aiFeatures: ["Pattern Recognition", "Predictive Analytics", "Automated Learning"],
      difficulty: "AI-Advanced"
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-24 relative overflow-hidden">
      {/* Enhanced background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"></div>
      <div className="absolute top-10 right-10 w-32 sm:w-64 h-32 sm:h-64 bg-gradient-primary rounded-full blur-3xl opacity-10 animate-pulse" />
      <div className="absolute bottom-20 left-10 w-24 sm:w-48 h-24 sm:h-48 bg-gradient-secondary rounded-full blur-2xl opacity-15 animate-float" style={{ animationDelay: '3s' }} />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-gradient-primary/20 text-primary px-6 py-3 rounded-full mb-6 animate-scale-in">
            <Bot className="h-5 w-5 animate-pulse" />
            <span className="font-semibold">AI-Powered Project Building</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-6 sm:mb-8 leading-tight">
            Build AI Projects That{" "}
            <span className="text-gradient-secondary">Actually Matter</span>
          </h2>
          <div className="space-y-4 text-lg sm:text-xl max-w-4xl mx-auto px-4">
            <p className="text-muted-foreground leading-relaxed">
              Forget copying code from tutorials. With AI tools, you'll build <span className="font-semibold text-primary">intelligent systems</span> that think, learn, and adapt—without getting lost in complex algorithms.
            </p>
            <div className="bg-gradient-card p-6 rounded-2xl shadow-card glow-on-hover">
              <p className="text-foreground font-medium">
                🚀 <span className="text-primary">AI does the heavy lifting</span> • You focus on the <span className="text-secondary">creative vision</span> • Build <span className="text-accent">professional-grade projects</span> in weeks, not months
              </p>
            </div>
          </div>
          
          {/* Enhanced stats */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 lg:gap-8 text-center mt-8">
            <div className="bg-gradient-card px-6 py-4 rounded-xl shadow-card hover-scale glow-on-hover">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Sparkles className="h-5 w-5 text-primary" />
                <div className="text-2xl font-bold text-primary">100%</div>
              </div>
              <div className="text-sm text-muted-foreground">AI-Enhanced</div>
            </div>
            <div className="bg-gradient-card px-6 py-4 rounded-xl shadow-card hover-scale glow-on-hover">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Zap className="h-5 w-5 text-secondary" />
                <div className="text-2xl font-bold text-secondary">10x</div>
              </div>
              <div className="text-sm text-muted-foreground">Faster Building</div>
            </div>
            <div className="bg-gradient-card px-6 py-4 rounded-xl shadow-card hover-scale glow-on-hover">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Bot className="h-5 w-5 text-accent" />
                <div className="text-2xl font-bold text-accent">0</div>
              </div>
              <div className="text-sm text-muted-foreground">PhD Required</div>
            </div>
          </div>
        </div>

        {/* AI-Enhanced Project Cards */}
        <div className="space-y-16 sm:space-y-20">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className={`grid lg:grid-cols-2 gap-8 sm:gap-12 items-center animate-fade-in ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
              style={{animationDelay: `${index * 0.2}s`}}
            >
              
              {/* Project Image */}
              <div className={`relative ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="relative group">
                  {/* AI Enhancement Badge */}
                  <div className="absolute -top-4 left-4 z-20 bg-gradient-primary px-4 py-2 rounded-full text-sm font-bold text-primary-foreground shadow-lg animate-pulse">
                    <Wand2 className="h-4 w-4 inline mr-2" />
                    AI-Enhanced
                  </div>
                  
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="rounded-2xl shadow-card glow-on-hover w-full transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl"
                  />
                  
                  {/* Enhanced overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="absolute bottom-4 left-4 right-4 space-y-3">
                      <div className="flex flex-wrap gap-2">
                        {project.aiFeatures.map((feature, featureIndex) => (
                          <span 
                            key={featureIndex}
                            className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs rounded-full border border-white/30"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                      <Button variant="hero" size="lg" className="w-full">
                        <Play className="h-5 w-5" />
                        See AI Magic in Action
                      </Button>
                    </div>
                  </div>
                  
                  {/* Difficulty badge */}
                  <div className="absolute -top-4 right-4 bg-gradient-secondary px-4 py-2 rounded-full text-sm font-bold text-secondary-foreground shadow-lg">
                    {project.difficulty}
                  </div>
                </div>
              </div>

              {/* Enhanced Project Details */}
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                
                {/* AI-focused tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-4 py-2 bg-gradient-card text-foreground text-sm rounded-full font-medium shadow-card glow-on-hover border border-primary/20"
                    >
                      <Cpu className="h-3 w-3 inline mr-2" />
                      {tag}
                    </span>
                  ))}
                </div>
                
                {/* Title with AI emphasis */}
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight">
                  {project.title}
                </h3>
                
                {/* Enhanced description */}
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                {/* AI Features Highlight */}
                <div className="bg-gradient-card p-4 rounded-xl border border-primary/20">
                  <h4 className="font-semibold text-primary mb-2 flex items-center gap-2">
                    <Sparkles className="h-4 w-4" />
                    AI Powers You'll Master:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    {project.aiFeatures.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Enhanced action buttons */}
                <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
                  <Button variant="cta" size="lg" className="group text-sm sm:text-base">
                    <Bot className="h-4 w-4" />
                    Start Building with AI
                    <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                  
                  <Button variant="ghost_glow" size="lg" className="text-sm sm:text-base">
                    <Github className="h-4 w-4" />
                    View AI Code
                  </Button>
                </div>
                
                {/* Enhanced progress with AI timeline */}
                <div className="space-y-2">
                  <div className="bg-muted rounded-full h-3 overflow-hidden">
                    <div 
                      className="h-full bg-gradient-primary transition-all duration-1000 animate-pulse"
                      style={{ width: `${(index + 1) * 33.33}%` }}
                    />
                  </div>
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>AI Project {index + 1} of 3</span>
                    <span>Complete in {project.duration}</span>
                  </div>
                </div>
                
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced call to action */}
        <div className="text-center mt-20 animate-fade-in" style={{animationDelay: '1s'}}>
          <div className="bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/20 p-8 sm:p-12 rounded-3xl shadow-card glow-on-hover max-w-4xl mx-auto border border-primary/20">
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 bg-gradient-primary/20 text-primary px-6 py-3 rounded-full mb-4">
                <Sparkles className="h-5 w-5 animate-pulse" />
                <span className="font-semibold">AI-Powered Learning</span>
              </div>
            </div>
            <h3 className="text-3xl sm:text-4xl font-bold mb-6 leading-tight">
              Ready to Build the Future with{" "}
              <span className="text-gradient-primary">AI as Your Copilot?</span>
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              These aren't just projects—they're your gateway to the AI revolution. Build intelligent systems that learn, adapt, and amaze. No PhD required, just curiosity and our AI-powered guidance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="cta" size="xl" className="group text-lg px-8 py-4">
                <Bot className="h-6 w-6" />
                Start Your AI Journey - ₹199
                <ExternalLink className="h-6 w-6 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="ghost_glow" size="xl" className="text-lg px-8 py-4">
                <Play className="h-6 w-6" />
                See AI in Action
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-4 opacity-80">
              Join thousands building the future with AI • No experience needed
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ProjectShowcase;