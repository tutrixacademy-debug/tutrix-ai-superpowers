import { Button } from "@/components/ui/button";
import { ArrowRight, Brain, Target, Globe, BookOpen, Zap, TrendingUp } from "lucide-react";

const ProblemSolution = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"></div>
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-secondary/10 rounded-full blur-3xl animate-pulse"></div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-gradient-primary/20 text-primary px-6 py-3 rounded-full mb-6 animate-scale-in">
            <Zap className="h-5 w-5" />
            <span className="font-semibold">The Future is Now</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-6 sm:mb-8 leading-tight">
            The World is Changing{" "}
            <span className="text-gradient-primary animate-pulse">Fast.</span>
            <br />
            <span className="text-gradient-secondary">Are You Ready?</span>
          </h2>
          <div className="space-y-6 text-lg sm:text-xl max-w-5xl mx-auto px-4">
            <p className="text-muted-foreground leading-relaxed animate-fade-in" style={{animationDelay: '0.2s'}}>
              We're living in the <span className="font-semibold text-primary">AI revolution</span>. By 2030, artificial intelligence will transform every industry - from healthcare and finance to entertainment and space exploration. 
            </p>
            <p className="text-foreground font-medium text-xl animate-fade-in" style={{animationDelay: '0.4s'}}>
              The jobs your parents had? <span className="text-destructive">Many won't exist.</span><br />
              The careers you'll have? <span className="text-primary">Most haven't been invented yet.</span>
            </p>
            <div className="bg-gradient-card p-6 rounded-2xl shadow-card animate-fade-in glow-on-hover" style={{animationDelay: '0.6s'}}>
              <p className="text-lg text-muted-foreground leading-relaxed">
                <span className="text-destructive font-semibold">Here's the reality:</span> Traditional education isn't keeping up. While you're memorizing facts for tests, the world outside is demanding creativity, problem-solving, and AI literacy. Students who graduate without understanding technology and AI will be left behind.
              </p>
            </div>
          </div>
        </div>

        {/* Statistics Grid */}
        <div className="mb-16 animate-fade-in" style={{animationDelay: '0.8s'}}>
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">
              The gap is growing{" "}
              <span className="text-gradient-primary">every day</span>
            </h3>
            <TrendingUp className="h-8 w-8 text-destructive mx-auto animate-bounce" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              {
                icon: Brain,
                stat: "85%",
                description: "of jobs in 2030 will require digital and AI skills",
                color: "text-primary",
                delay: "0s"
              },
              {
                icon: Target,
                stat: "40%",
                description: "more earnings for students with AI knowledge in their first jobs",
                color: "text-secondary",
                delay: "0.1s"
              },
              {
                icon: Globe,
                stat: "Global",
                description: "competition means you're not just competing locally anymore",
                color: "text-accent",
                delay: "0.2s"
              },
              {
                icon: BookOpen,
                stat: "Traditional",
                description: "tutoring focuses on memorization, not future skills",
                color: "text-destructive",
                delay: "0.3s"
              }
            ].map((item, index) => (
              <div 
                key={index} 
                className="bg-gradient-card p-6 rounded-xl shadow-card text-center glow-on-hover hover-scale animate-fade-in group cursor-pointer"
                style={{animationDelay: item.delay}}
              >
                <div className="bg-gradient-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <item.icon className={`h-8 w-8 ${item.color} group-hover:animate-pulse`} />
                </div>
                <div className={`text-3xl font-bold mb-3 ${item.color}`}>{item.stat}</div>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Solution Content */}
        <div className="max-w-5xl mx-auto space-y-8">
          <div className="bg-gradient-card p-8 sm:p-12 rounded-3xl shadow-card glow-on-hover animate-fade-in" style={{animationDelay: '1s'}}>
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 bg-primary/20 text-primary px-6 py-3 rounded-full mb-6">
                <Zap className="h-5 w-5 animate-pulse" />
                <span className="font-semibold">The Good News</span>
              </div>
              <h3 className="text-3xl sm:text-4xl font-bold mb-6 text-gradient-primary">
                You don't have to figure this out alone.
              </h3>
            </div>
            <div className="space-y-6 text-lg text-center">
              <p className="text-muted-foreground leading-relaxed">
                What if you could learn from <span className="font-semibold text-primary">AI experts</span> who understand both today's curriculum AND tomorrow's world? 
              </p>
              <p className="text-muted-foreground leading-relaxed">
                What if your tutor didn't just help you pass exams, but prepared you to <span className="font-semibold text-secondary">thrive in an AI-powered future?</span>
              </p>
              <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-6 rounded-2xl border border-primary/20">
                <p className="text-xl font-bold text-foreground">
                  The question isn't whether AI will shape your future.<br />
                  <span className="text-gradient-primary text-2xl">It's whether you'll be ready to shape it back.</span>
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/20 p-8 sm:p-12 rounded-3xl shadow-card text-center animate-fade-in glow-on-hover" style={{animationDelay: '1.2s'}}>
            <h3 className="text-3xl sm:text-4xl font-bold mb-6 leading-tight">
              Ready to bridge the gap between<br />
              <span className="text-muted-foreground">where you are</span> and{" "}
              <span className="text-gradient-primary">where you need to be?</span>
            </h3>
            <Button variant="cta" size="xl" className="group text-lg px-8 py-4 hover-scale">
              Start Your AI Journey Today
              <ArrowRight className="h-6 w-6 transition-transform group-hover:translate-x-1" />
            </Button>
            <p className="text-sm text-muted-foreground mt-4 opacity-80">
              Join thousands of students already preparing for tomorrow
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ProblemSolution;